import React from 'react';
import Authentication from './Components/Authentication'
import Admin from './Components/Admin';
import Cashier from './Components/Cashier';

function App() {
  return (
    <div className="container">
      <Authentication />
      {/* <Admin></Admin> */}
      {/* <Cashier></Cashier> */}
    </div>
  );
}

export default App;
