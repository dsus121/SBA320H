import React from "react";
import PropTypes from "prop-types";
import CharityCard from "./CharityCard";
import "../assets/styles/App.css";

const CharityList = ({ groupedCharities, expandedCharities, toggleExpand, setSelectedCharity }) => {
  return (
    <div className="results">
      {Object.keys(groupedCharities).map((key) => (
        <div key={key}>
          <h2>{key}</h2>
          <div className="results-grid">
            {groupedCharities[key].map((charity, index) => (
              <CharityCard
                key={index}
                charity={charity}
                onDonate={() => setSelectedCharity(charity)}
                expanded={expandedCharities[index]}
                toggleExpand={() => toggleExpand(index)}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

CharityList.propTypes = {
  groupedCharities: PropTypes.object.isRequired,
  expandedCharities: PropTypes.object.isRequired,
  toggleExpand: PropTypes.func.isRequired,
  setSelectedCharity: PropTypes.func.isRequired,
};

export default CharityList;