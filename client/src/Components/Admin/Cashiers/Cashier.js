import React, { useState } from 'react'
import { useLocation, Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { updateCashier } from '../../../Actions/admin.js';

function Cashier({ theme }) {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [cashier, setCashier] = useState(location.state.cashier);

  console.log(cashier);

  const handleChange = (e) => {
    setCashier({
      ...cashier, [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateCashier(cashier._id, { cashier: cashier }));
    navigate('/cashiers');
  }

  return (
    (cashier &&
      <div className="d-flex justify-content-center mt-3">

        <div className={`card bg-${theme.color} text-${theme.text} col-md-5`}>
          <img src="..." className="card-img-top" alt="..." />

          <div className="card-body">
            <form onSubmit={handleSubmit}>

              <h5 className="card-title">Cashier</h5>
              <table className="card-title" width="100%" cellPadding={4}>
                <tr>
                  <th>Name</th>
                  <td><input className="form-control" type="text" name="name" value={cashier.name} onChange={handleChange}></input></td>
                </tr>
                <tr>
                  <th>Email</th>
                  <td><input className="form-control" type="text" name="name" value={cashier.email} onChange={handleChange}></input></td>
                </tr>
                <tr>
                  <th>Mobile No.</th>
                  <td><input className="form-control" type="number" name="name" value={cashier.phone} onChange={handleChange}></input></td>
                </tr>
                <tr>
                  <th>Gender</th>
                  <td>
                    <div class="form-check form-check-inline">
                      {(cashier.gender === 'Male') &&
                        <input class="form-check-input" onClick={handleChange} type="radio" name="gender" id="male" value="Male" checked />
                      }
                      {(cashier.gender !== 'Male') &&
                        <input class="form-check-input" onClick={handleChange} type="radio" name="gender" id="male" value="Male" />
                      }
                      <label class="form-check-label" for="male">Male</label>
                    </div>
                    <div class="form-check form-check-inline">
                      {(cashier.gender === 'Female') &&
                        <input class="form-check-input" onClick={handleChange} type="radio" name="gender" id="female" value="Female" checked />
                      }
                      {(cashier.gender !== 'Female') &&
                        <input class="form-check-input" onClick={handleChange} type="radio" name="gender" id="female" value="Female" />
                      }
                      <label class="form-check-label" for="female">Female</label>
                    </div>
                    <div class="form-check form-check-inline">
                      {(cashier.gender === 'Other') &&
                        <input class="form-check-input" onClick={handleChange} type="radio" name="gender" id="other" value="Other" checked />
                      }
                      {(cashier.gender !== 'Other') &&
                        <input class="form-check-input" onClick={handleChange} type="radio" name="gender" id="other" value="Other" />
                      }
                      <label class="form-check-label" for="other">Other</label>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th>Birth Date</th>
                  <td><input className="form-control" type="date" name="birthday" value={`2005/04/16`} onChange={handleChange}></input></td>
                </tr>
                <tr>
                  <th>Joining Date</th>
                  <td><input className="form-control" type="text" name="joinedAt" value={new Date(cashier.joinedAt).toLocaleDateString()} disabled></input></td>
                </tr>
              </table>
              <div className="d-flex justify-content-between mt-3">
                <Link to="/cashiers" className={`btn btn-${theme.color === 'light' ? 'dark' : 'light'} px-4`}>Go Back</Link>
                <button type='submit' className={`btn btn-${theme.color === 'light' ? 'dark' : 'light'} px-4`}>UPDATE</button>
              </div>
            </form>
          </div>
        </div >
      </div>
    )

  );
}

export default Cashier
