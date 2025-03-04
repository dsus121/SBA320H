import PropTypes from "prop-types";
import "../assets/styles/App.css";

const CharityCard = ({ charity, onDonate, expanded, toggleExpand }) => {
  const toSentenceCase = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  };

  return (
    <div className="nonprofit-card">
      <h3>{charity.name || "No Name Available"}</h3>
      <p onClick={toggleExpand} style={{ cursor: "pointer" }}>
        <strong>Purpose:</strong>{" "}
        {expanded
          ? toSentenceCase(charity.statementofpurpose)
          : `${toSentenceCase(
              charity.statementofpurpose.substring(0, 100)
            )}...`}
      </p>
      <p>
        <strong>Filing Date:</strong> {charity.filingdate || "N/A"}
      </p>
      <button className="button" onClick={onDonate}>
        Donate
      </button>
    </div>
  );
};

CharityCard.propTypes = {
  charity: PropTypes.object.isRequired,
  onDonate: PropTypes.func.isRequired,
  expanded: PropTypes.bool.isRequired,
  toggleExpand: PropTypes.func.isRequired,
};

export default CharityCard;
