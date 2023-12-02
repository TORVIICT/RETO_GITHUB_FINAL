import React from 'react';

function App() {

  const value = 'World';
  return 
    <div>
      
      <h1>GENIMAGE</h1>

      <form>
        <label>Inserte URL o propmt: 
          <input type="text" value={value} />
        </label>
        <button type="submit">ANALISIS</button>
        <button type="submit">GENERAR</button>
      </form>
    
      
    
    </div>;
}

export default App;
