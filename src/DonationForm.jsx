// dummy donation form component
const DonationForm = ({ charity, onClose }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Donation submitted!");
        onClose();
    };

    return (
        <div style={{ position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)", backgroundColor: "white", padding: "20px", border: "1px solid #ccc", borderRadius: "8px" }}>
          <h2>Donate to {charity.name}</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label>
                Name:
                <input type="text" required />
              </label>
            </div>
            <div>
              <label>
                Amount:
                <input type="number" required />
              </label>
            </div>
            <button type="submit">Submit</button>
            <button type="button" onClick={onClose}>Cancel</button>
          </form>
        </div>
      );
    };
    
    export default DonationForm;