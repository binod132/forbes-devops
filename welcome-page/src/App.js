import React from 'react';
import './App.css';

function App() {
  const handleLoginClick = () => {
    window.location.href = '/login/';
  };

  return (
    <div className="App">
      <header className="App-header">
        <nav style={{ position: 'absolute', top: '20px', right: '20px' }}>
          <button onClick={handleLoginClick} style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}>
            Login
          </button>
        </nav>
        <h1>Welcome to Our Application</h1>
      </header>
    </div>
  );
}

export default App;
