import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchCashiers, hireCashier } from "../../../Actions/admin.js"
import { useLocation } from 'react-router-dom';
import { deleteCashier } from '../../../Actions/admin.js';

function Cashiers({ theme }) {
  const [cashier, setCashier] = useState({
    name: "",
    email: "",
    phone: "",
    birthday: "",
    joinedAt: new Date().toLocaleDateString(),
    password: ""
  });
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCashiers());
  }, [location, dispatch])

  const handleChange = (e) => {
    setCashier({
      ...cashier, [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    dispatch(hireCashier({ cashier: cashier }));
    setCashier({
      name: "",
      email: "",
      phone: "",
      gender: "",
      birthday: "",
      joinedAt: new Date().toLocaleDateString(),
      password: ""
    });
    navigate('/cashiers');
  }

  const cashiers = useSelector((data) => data.cashiers);

  const navigateToCashier = (cashier) => { navigate(`/cashier`, { state: { cashier: cashier } }) };

  return (
    <div>
      <div className="d-flex justify-content-between">
        <h2 className='m-3'>Cashiers</h2>
        <span className={`bg-${theme.color === 'light' ? 'dark' : 'light'} rounded-2 h-50 m-3`}>
          <button type="button" className={`btn btn-outline-${theme.color} px-4`} data-bs-toggle="modal" data-bs-target="#staticBackdrop">Hire Cashier</button>
        </span>
      </div>
      <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className={`modal-content bg-${theme.color}`}>
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">Hire New Cashier</h5>
              <button type="button" className={`btn-close bg-${theme.color === 'light' ? 'dark' : 'light'}`} data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="modal-body">
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Cashier's Name</label>
                  <input type="text" className="form-control" id="name" name="name" value={cashier.name} onChange={handleChange} placeholder="Sanket" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input type="email" className="form-control" id="email" name="email" value={cashier.email} onChange={handleChange} placeholder="cashier@gmail.com" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="phone" className="form-label">Mobile No.</label>
                  <input type="number" className="form-control" id="phone" name="phone" value={cashier.phone} onChange={handleChange} placeholder="9844321321" required />
                </div>
                <label htmlFor="gender" className="form-label">Gender</label>
                <div id="gender" className="mb-2">
                  <div class="form-check form-check-inline">
                    <input class="form-check-input" onClick={handleChange} type="radio" name="gender" id="male" value="Male" />
                    <label class="form-check-label" for="male">Male</label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input class="form-check-input" onClick={handleChange} type="radio" name="gender" id="female" value="Female" />
                    <label class="form-check-label" for="female">Female</label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input class="form-check-input" onClick={handleChange} type="radio" name="gender" id="other" value="Other" />
                    <label class="form-check-label" for="other">Other</label>
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="birthday" className="form-label">Birthday</label>
                  <input type="date" className="form-control" id="birthday" name="birthday" value={cashier.birthday} onChange={handleChange} placeholder="50" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input type="password" className="form-control" id="password" name="password" value={cashier.password} onChange={handleChange} placeholder="Password" required />
                </div>
              </div>
              <div className="modal-footer d-flex justify-content-center">
                <button type="submit" className={`btn btn-${theme.color === 'light' ? 'dark' : 'light'} px-4`} data-bs-dismiss="modal">Hire Cashier</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {(cashiers.length > 0) &&
        <table className={`table table-${theme.color} table-hover`}>
          <thead>
            <tr>
              <th scope="col">No.</th>
              <th scope="col">Name</th>
              <th scope="col">Gender</th>
              <th scope="col">Birthday</th>
              <th scope="col">Joined At</th>
              <th scope="col">FIRE</th>
            </tr>
          </thead>
          <tbody>

            {cashiers.map((cashier, i) => {
              return (<tr role="button">
                <th scope="row">{i + 1}</th>
                <td onClick={() => navigateToCashier(cashier)}>{cashier.name}</td>
                <td onClick={() => navigateToCashier(cashier)}>{cashier.gender}</td>
                <td onClick={() => navigateToCashier(cashier)}>{new Date(cashier.birthday).toLocaleDateString()}</td>
                <td onClick={() => navigateToCashier(cashier)}>{new Date(cashier.joinedAt).toLocaleDateString()}</td>
                <td><button className="btn btn-danger w-100" onClick={() => { dispatch(deleteCashier(cashier._id)); navigate("/cashiers") }}>FIRE</button></td>
              </tr>)
            })}
          </tbody>
        </table>
      }
    </div>
  )
}

export default Cashiers
