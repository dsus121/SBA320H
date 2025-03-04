import { useState, useEffect } from 'react';
import { fetchNonProfits } from './api';
import CharityList from './ColoradoApi';
import "./App.css";

function App() {
  const [nonProfits, setNonProfits] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [selectedCause, setSelectedCause] = useState(null);

  const handleSearch = async (cause) => {
    setLoading(true);
    setSelectedCause(cause);
    setError(null);
    
    try {
      const data = await fetchNonProfits(cause);
      
      if (data) {
        setNonProfits(data);
      } else {
        setError('Failed to fetch data');
        setNonProfits([]);
      }
    } catch (err) {
      console.error('Error in handleSearch:', err);
      setError('An unexpected error occurred');
      setNonProfits([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="App">
        <h1>Non-profits Search</h1>
        <div className="button-container">
          <button 
            onClick={() => handleSearch('women-and-girls')}
            className={selectedCause === 'women-and-girls' ? 'active' : ''}
          >
            Women & Girls
          </button>
          <button 
            onClick={() => handleSearch('indigenous-peoples')}
            className={selectedCause === 'indigenous-peoples' ? 'active' : ''}
          >
            Indigenous Peoples
          </button>
          <button 
            onClick={() => handleSearch('animals')}
            className={selectedCause === 'animals' ? 'active' : ''}
          >
            Animals
          </button>
        </div>
        
        {loading && <p>Loading...</p>}
        {error && <p className="error">{error}</p>}
        
        <div className="results">
          {nonProfits.length > 0 ? (
            nonProfits.map((nonProfit) => (
              <div key={nonProfit.ein || nonProfit.id} className="nonprofit-card">
                <h2>{nonProfit.name}</h2>
                {nonProfit.logoUrl && (
                  <img 
                    src={nonProfit.logoUrl} 
                    alt={`${nonProfit.name} logo`}
                    className="nonprofit-logo"
                  />
                )}
                <p>{nonProfit.description || 'No description available'}</p>
                {nonProfit.websiteUrl && (
                  <a 
                    href={nonProfit.websiteUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="nonprofit-link"
                  >
                    Visit Website
                  </a>
                )}
              </div>
            ))
          ) : (
            !loading && !error && <p>No results found. Select a cause to search.</p>
          )}
        </div>
      </div>
    </>
  );
}

export default App;