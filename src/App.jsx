import { useEffect, useState } from 'react';
import { fetchNonProfits } from './api';
import "./App.css";

function App() {
  const [term, setTerm] = useState('');
  const [nonProfits, setNonProfits] = useState([]);
  const [error, setError] = useState(null);
    
  const handleSearch = async () => {
    const data = await fetchNonProfits(term);
        if (data) {
          setNonProfits(data);
          setError(null);
        } else {
          setError('Failed to fetch data');
        }
      };

  return (
    <>
      <div className="App">
        <h1>Non-profits Search</h1>
        <input
          type="text"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
          placeholder=" enter search term "
        />
        <button onClick={handleSearch}>search</button>

        {error && <p className="error">{error}</p>}
        
        <div className="results">
          {nonProfits.map((nonProfit) => (
            <div key={nonProfit.id}>
              <h2>{nonProfit.name}</h2>
              <p>{nonProfit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
