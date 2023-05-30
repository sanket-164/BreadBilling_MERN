import React, { useState } from 'react'
import { useLocation, Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { updateBill } from '../../../Actions/admin.js';

function Bill({ theme }) {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [bill, setBill] = useState(location.state.bill);
  console.log(bill.cashier_name);
  const handleChange = (e) => {
    setBill({
      ...bill, [e.target.name]: e.target.value
    })
  }

  let food = [];
  for (let i = 0; i < bill.breads.length; i++) {
    food.push(Object.entries(bill.breads[i])[0]);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateBill(bill._id, { bill: bill }));
    navigate('/bills');
  }

  return (
    (bill &&
      <div className={`card bg-${theme.color}`} style={{ width: "25rem" }
      }>
        <div className="card-body">
          <form onSubmit={handleSubmit}>

            <h5 className="card-title">Bill</h5>
            <table className="card-title" width="100%">
              <tr>
                <th>Customer Name</th>
                <td><input className="form-control" type="text" name="customer_name" value={bill.customer_name} onChange={handleChange}></input></td>
              </tr>
              <tr>
                <th>Customer Email</th>
                <td><input className="form-control" type="text" name="customer_email" value={bill.customer_email} onChange={handleChange}></input></td>
              </tr>
              <tr>
                <th>Cashier Name</th>
                <td><input className="form-control" type="text" name="cashier_name" value={bill.cashier_name} onChange={handleChange} disabled></input></td>
              </tr>
              <tr>
                <td colSpan={2} align='center'>
                  <h3>Purchased</h3>
                </td>
              </tr>
              <tr>
                <td colspan='2'>
                  <table className={`table-${theme.color} table-striped border border-1 w-100`} cellPadding={5} cellSpacing={5}>
                    <thead>
                      <tr>
                        <th scope="col">No.</th>
                        <th scope="col">Food</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Amount</th>
                        <th scope="col">Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      {food.map((food, i) => {
                        return (<tr>
                          <th scope="row">{i + 1}</th>
                          <th>{food[0]}</th>
                          <td>{food[1].amount}</td>
                          <td>{food[1].quantity}</td>
                          <td>{food[1].quantity * food[1].amount}</td>
                        </tr>)
                      })}
                    </tbody>
                  </table>
                </td>
              </tr>
              <tr>
                <th>Purchased At</th>
                <td><input className="form-control" type="text" name="purchasedAt" value={new Date(bill.purchasedAt).toLocaleDateString()} disabled></input></td>
              </tr>
            </table>
            <div className="d-flex justify-content-between">
              <Link to="/bills" className={`btn btn-${(theme.text === 'white' ? 'light' : 'dark')}`}>Back</Link>
              <button type='submit' className={`btn btn-${(theme.text === 'white' ? 'light' : 'dark')}`}>UPDATE</button>
            </div>
          </form>
        </div>
      </div >
    ))
}

export default Bill
