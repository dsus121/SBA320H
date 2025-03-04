import React from "react";
import PropTypes from "prop-types";
import "../assets/styles/App.css";

const FilterButtons = ({ setFilter, counts }) => {
  return (
    <div className="button-container">
      <button className="button" onClick={() => setFilter("all")}>
        All ({counts.all})
      </button>
      <button className="button" onClick={() => setFilter("animals")}>
        Animals ({counts.animals})
      </button>
      <button className="button" onClick={() => setFilter("environment")}>
        Environment ({counts.environment})
      </button>
      <button className="button" onClick={() => setFilter("social responsibility")}>
        Social Responsibility ({counts.socialResponsibility})
      </button>
    </div>
  );
};

FilterButtons.propTypes = {
  setFilter: PropTypes.func.isRequired,
  counts: PropTypes.shape({
    all: PropTypes.number.isRequired,
    animals: PropTypes.number.isRequired,
    environment: PropTypes.number.isRequired,
    socialResponsibility: PropTypes.number.isRequired,
  }).isRequired,
};

export default FilterButtons;