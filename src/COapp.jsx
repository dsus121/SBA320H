import { useState, useEffect } from "react";
import useCharities from "./ColoradoApi";
import DonationForm from "./DonationForm";
import "./App.css";

const COapp = () => {
  const { loading, charities, error } = useCharities();
  const [selectedCharity, setSelectedCharity] = useState(null);
  const [filter, setFilter] = useState("all");
  const [counts, setCounts] = useState({ all: 0, socialResponsibility: 0, environment: 0, animals: 0 });

  useEffect(() => {
    const countCharities = () => {
      const allCount = charities.length;
      const socialResponsibilityCount = charities.filter(charity => charity.statementofpurpose.toLowerCase().includes("social responsibility")).length;
      const environmentCount = charities.filter(charity => charity.statementofpurpose.toLowerCase().includes("environment")).length;
      const animalsCount = charities.filter(charity => charity.statementofpurpose.toLowerCase().includes("animals")).length;

      setCounts({
        all: allCount,
        socialResponsibility: socialResponsibilityCount,
        environment: environmentCount,
        animals: animalsCount,
      });
    };

    countCharities();
  }, [charities]);

  if (loading) return <p>Loading charities...</p>;
  if (error) return <p>Error: {error}</p>;

  // Filter charities based on the selected filter
  const filteredCharities = charities.filter((charity) => {
    if (filter === "all") return true;
    return charity.statementofpurpose.toLowerCase().includes(filter);
  });

  // Group charities by the selected filter
  const groupedCharities = filteredCharities.reduce((acc, charity) => {
    const key = filter === "all" ? "All Charities" : filter;
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(charity);
    return acc;
  }, {});

  return (
    <div className="App">
      <h1>Colorado Charities</h1>
      <div className="button-container">
        <button onClick={() => setFilter("all")}>All ({counts.all})</button>
        <button onClick={() => setFilter("animals")}>Animals ({counts.animals})</button>
        <button onClick={() => setFilter("environment")}>Environment ({counts.environment})</button>
        <button onClick={() => setFilter("social responsibility")}>Social Responsibility ({counts.socialResponsibility})</button>
      </div>
      <div className="results">
      {Object.keys(groupedCharities).map((key) => (
        <div key={key}>
          <h2>{key}</h2>
          {groupedCharities[key].map((charity, index) => (
            <div
              key={index}
              className="nonprofit-card"
              style={{ marginBottom: "20px", border: "1px solid #ccc", padding: "10px" }}
            >
              <h3>{charity.name || "No Name Available"}</h3>
              <p><strong>Purpose:</strong> {charity.statementofpurpose || "No description available."}</p>
              <p><strong>Filing Date:</strong> {charity.filingdate || "N/A"}</p>
              <button onClick={() => setSelectedCharity(charity)}>Donate</button>
            </div>
          ))}
        </div>
      ))}
      </div>
      {selectedCharity && <DonationForm charity={selectedCharity} onClose={() => setSelectedCharity(null)} />}
    </div>
  );
};

export default COapp;
