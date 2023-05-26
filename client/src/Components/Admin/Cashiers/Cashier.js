import React, { useState } from 'react'
import { useLocation, Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import FileBase from 'react-file-base64';
import { updateCashier } from '../../../Actions/admin.js';
import DefaultProfile from '../../../Images/default-profile.png';

function Cashier({ theme }) {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [cashier, setCashier] = useState(location.state.cashier);

  const handleChange = (e) => {
    setCashier({
      ...cashier, [e.target.name]: e.target.value
    })
  }

  
  const handleSubmit = (e) => {
    console.log(cashier)
    e.preventDefault();
    dispatch(updateCashier(cashier._id, { cashier: cashier }));
    navigate('/cashiers');
  }
  
  return (
    (cashier &&
      <div className="d-flex justify-content-center mt-3">

        <div className={`card bg-${theme.color} text-${theme.text} col-md-5`}>
          <img src={(cashier.image !== "") && (cashier.image !== undefined)? cashier.image: DefaultProfile} className="card-img-top" alt={cashier.name} />

          <div className="card-body">
            <form onSubmit={handleSubmit}>

              <h5 className="card-title">Cashier</h5>
              <table className="card-title" width="100%" cellPadding={4}>
                <tr>
                  <th>Image</th>
                  <td><FileBase className="form-control" type="file" multiple={false} onDone={({ base64 }) => setCashier({ ...cashier, image: base64 })}></FileBase></td>
                </tr>
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
                    <div className="form-check form-check-inline">
                      {(cashier.gender === 'Male') &&
                        <input className="form-check-input" onClick={handleChange} type="radio" name="gender" id="male" value="Male" checked />
                      }
                      {(cashier.gender !== 'Male') &&
                        <input className="form-check-input" onClick={handleChange} type="radio" name="gender" id="male" value="Male" />
                      }
                      <label className="form-check-label" htmlFor="male">Male</label>
                    </div>
                    <div className="form-check form-check-inline">
                      {(cashier.gender === 'Female') &&
                        <input className="form-check-input" onClick={handleChange} type="radio" name="gender" id="female" value="Female" checked />
                      }
                      {(cashier.gender !== 'Female') &&
                        <input className="form-check-input" onClick={handleChange} type="radio" name="gender" id="female" value="Female" />
                      }
                      <label className="form-check-label" htmlFor="female">Female</label>
                    </div>
                    <div className="form-check form-check-inline">
                      {(cashier.gender === 'Other') &&
                        <input className="form-check-input" onClick={handleChange} type="radio" name="gender" id="other" value="Other" checked />
                      }
                      {(cashier.gender !== 'Other') &&
                        <input className="form-check-input" onClick={handleChange} type="radio" name="gender" id="other" value="Other" />
                      }
                      <label className="form-check-label" htmlFor="other">Other</label>
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
