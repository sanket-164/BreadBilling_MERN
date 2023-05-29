import React from 'react';
import Authentication from './Components/Authentication'
import Admin from './Components/Admin';
import Cashier from './Components/Cashier';

function App() {
  const data = JSON.parse(localStorage.getItem('breadBilling'));
  let checkData;
  let isAdmin;
  if (data) {
    checkData = true;
    if (data.role === 'Admin') {
      isAdmin = true;
    }
  } else {
    checkData = false;
  }

  return (
    <div className="container">
      {checkData && isAdmin && <Admin />}
      {checkData && !isAdmin && <Cashier />}
      {!checkData && <Authentication />}
    </div>
  );
}

export default App;
