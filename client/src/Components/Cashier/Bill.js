import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import html2Pdf from 'html2pdf.js';
function Bill({ theme }) {
  const location = useLocation();
  const bill = location.state.bill;
  console.log(bill.breads.length);

  let food = [];
  let breads = [];
  let total = 0;
  for (let i = 0; i < bill.breads.length; i++) {
    food.push(Object.entries(bill.breads[i])[0]);
  }

  for (let i = 0; i < food.length; i++) {
    for (let j = 0; j < food.length; j++) {
      if ((i !== j) && (food[i][0] === food[j][0])) {
        if (food[j][1].quantity > food[i][1].quantity) {
          food[i][1].quantity = (food[j][1].quantity - food[i][1].quantity);
        } else {
          food[i][1].quantity = (food[i][1].quantity - food[j][1].quantity);
        }
        food[j][1].quantity = 0;
      }
    }
  }

  for (let i = 0; i < food.length; i++) {
    if (food[i][1].quantity !== 0) {
      breads.push(food[i]);
      total += (food[i][1].quantity * food[i][1].amount);
    }
  }

  const convertToPdf = () => {
    const element = document.getElementById('bill');
    html2Pdf().from(element).save();
  };


  return (
    (bill && (

      <div className="mt-3 mb-3 d-flex justify-content-center">
        <div className={`card`}>
          <div className="card-body text-dark"  id='bill' align="center">
            <table className="card-title" cellPadding={5}>
              <tr>
                <td colSpan={2}>
                  <p className='fs-2'>B 4 Bread 🍞</p>
                </td>
              </tr>
              <tr>
                <th>
                  {bill.customer_name}
                </th>
                <th>
                  {new Date().toLocaleString()}
                </th>
              </tr>
              <tr>
                <td colspan='2'>
                  <table cellPadding={10}>
                    <thead>
                      <tr>
                        <th scope="col">No.</th>
                        <th scope="col">Bread</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Amount</th>
                        <th scope="col">Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      {breads.map((food, i) => {
                        if (food[1].quantity > 0) {
                          return (<tr>
                            <th scope="row">{i + 1}</th>
                            <th>{food[0]}</th>
                            <td>{food[1].quantity}</td>
                            <td>₹{food[1].amount}</td>
                            <td>₹{food[1].quantity * food[1].amount}</td>
                          </tr>)
                        }
                      })}
                      <tr>
                        <td colSpan={3}></td>
                        <th>Total Amount</th>
                        <th>₹{total}</th>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
              <tr align='center'>
                <th colSpan={2}>Visit Again</th>
              </tr>
            </table>
          </div>
          <button class="btn btn-primary btn-lg" onClick={convertToPdf}>SUBMIT</button>
          <Link to="/cashier/home" class="btn btn-dark m-2 fs-5">Back</Link>
        </div>
      </div>
    ))
  )
}

export default Bill
