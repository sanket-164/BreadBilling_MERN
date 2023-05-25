import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchBills } from "../../../Actions/admin.js"
import { useLocation } from 'react-router-dom';
import { deleteBill } from '../../../Actions/admin.js';

function Bills({ theme }) {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBills());
  }, [location, dispatch])

  const bills = useSelector((data) => data.bills);

  const navigateToBill = (bill) => {
    navigate('/bill', { state: { bill: bill } });
  }

  return (
    <div>
      <h2 className='m-3'>Bills</h2>
      {(bills.length > 0) &&
        <table className={`table table-${theme.color} table-hover`}>
          <thead>
            <tr>
              <th scope="col">No.</th>
              <th scope="col">Customer Name</th>
              <th scope="col">Cashier Name</th>
              <th scope="col">Amount</th>
              <th scope="col">Purchased At</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>

            {bills.map((bill, i) => {
              return (<tr role="button">
                <th scope="row" onClick={() => navigateToBill(bill)}>{i + 1}</th>
                <td onClick={() => navigateToBill(bill)}>{bill.customer_name}</td>
                <td onClick={() => navigateToBill(bill)}>{bill.cashier_name}</td>
                <td onClick={() => navigateToBill(bill)}>{bill.amount}</td>
                <td onClick={() => navigateToBill(bill)}>{new Date(bill.purchasedAt).toLocaleString()}</td>
                <td><button className="btn btn-danger w-100" onClick={() => { dispatch(deleteBill(bill._id)); navigate("/bills") }}>DELETE</button></td>
              </tr>)
            })}
          </tbody>
        </table>
      }
    </div>
  )
}

export default Bills