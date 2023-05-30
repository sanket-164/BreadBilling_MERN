import React from 'react'
import { useLocation, Link } from 'react-router-dom';
import DefaultBread from '../../Images/default-bread.png';

const Bread = ({ theme }) => {
  const location = useLocation();
  const bread = location.state.bread;

  return (
    <div className="container mt-3">
      <div className={`row`}>
        <div className={`bg-${theme.color} text-${theme.text} col-lg-6 col-md-12`}>
          <img src={(bread.image !== "") ? bread.image : DefaultBread} alt={bread.name} className={`img-fluid mt-3 mb-3 px-2 py-1 w-100`} />
        </div>
        <div className={`bg-${theme.color} text-${theme.text} col-lg-6 col-md-12`}>
          <table className="card-title w-100 mt-3" cellPadding={3}>
            <tr>
              <td>
                <label htmlFor="bread-name" className="form-label">Name</label>
                <input className="form-control" type="text" name="name" id="bread-name" value={bread.name} disabled></input>
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="bread-amount" className="form-label">Amount</label>
                <input className="form-control" type="number" name="amount" id="bread-amount" value={bread.amount} disabled></input></td>
            </tr>
            <tr align="center">
              <th><h4 className='m-3'>About Bread</h4></th>
            </tr>
            <tr>
              <td><textarea className="form-control" id="exampleFormControlTextarea1" rows="12" name="description" value={bread.description} disabled></textarea></td>
            </tr>
          </table>
          <div className="d-flex justify-content-center mt-3">
            <Link to="/home" className={`btn btn-${(theme.text === 'white' ? 'light' : 'dark')} px-4 fs-5`}>Bread Panel</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bread;