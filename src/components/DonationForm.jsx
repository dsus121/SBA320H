// DonationForm.jsx

import { useState } from "react";
import "../assets/styles/App.css";

const DonationForm = ({ charity, onClose, onSubmit }) => {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && amount) {
      alert(`Donation of $${amount} submitted by ${name}!`);
      localStorage.setItem("donorName", name); // Store the name in local storage
      onSubmit(name, amount); // Call the onSubmit callback
      onClose();
    } else {
      alert("Please enter your name and select an amount.");
    }
  };

  return (
    <div className="donation-form-modal">
      <button className="close-button" onClick={onClose}>X</button>
      <h2>Donate to {charity.name}</h2>
      <form onSubmit={handleSubmit} className="donation-form">
        <div className="form-group">
          <label>
            Please enter your name: 
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>
        </div>
        <div className="form-group">
          <label>I'd like to donate ↓</label>
          <div className="amount-buttons">
            <button
              type="button"
              className={`button ${amount === 5 ? "selected" : ""}`}
              onClick={() => setAmount(5)}
            >
              $5
            </button>
            <button
              type="button"
              className={`button ${amount === 50 ? "selected" : ""}`}
              onClick={() => setAmount(50)}
            >
              $50
            </button>
            <button
              type="button"
              className={`button ${amount === 500 ? "selected" : ""}`}
              onClick={() => setAmount(500)}
            >
              $500
            </button>
          </div>
        </div>
        <div className="form-buttons">
          <button type="submit" className="button">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default DonationForm;