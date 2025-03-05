import { useReducer, useEffect } from "react";

const initialState = {
  loading: true,
  charities: [],
  error: null,
};

const charityReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return { ...state, loading: false, charities: action.payload, error: null };
    case "FETCH_ERROR":
      return { ...state, loading: false, error: action.payload, charities: [] };
    default:
      return state;
  }
};

const useCharities = () => {
  const [state, dispatch] = useReducer(charityReducer, initialState);

  useEffect(() => {
    const fetchCharities = async () => {
      try {
        const response = await fetch(
          "https://data.colorado.gov/resource/7jm9-f28m.json?$query=SELECT%0A%20%20%60entityid%60%2C%0A%20%20%60documentid%60%2C%0A%20%20%60fein%60%2C%0A%20%20%60name%60%2C%0A%20%20%60statementofpurpose%60%2C%0A%20%20%60filingdate%60%0AWHERE%0A%20%20caseless_contains(%60statementofpurpose%60%2C%20%22animals%22)%0A%20%20%20%20OR%20(caseless_contains(%60statementofpurpose%60%2C%20%22environment%22)%0A%20%20%20%20%20%20%20%20%20%20OR%20(caseless_contains(%60statementofpurpose%60%2C%20%22environmental%22)%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20OR%20contains(%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%60statementofpurpose%60%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22social%20responsibility%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20)))"
        );
if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        dispatch({ type: "FETCH_SUCCESS", payload: data });
              } catch (error) {
        dispatch({ type: "FETCH_ERROR", payload: error.message });
              }
    };

    fetchCharities();
  }, []);

  return state;
};

export default useCharities;