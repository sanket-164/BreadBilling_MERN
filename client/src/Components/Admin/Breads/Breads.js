import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchBreads } from "../../../Actions/admin.js"
import { useLocation } from 'react-router-dom';
import { deleteBread, addBread } from '../../../Actions/admin.js';

function Breads({ theme }) {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const [bread, setBread] = useState({ name: "", amount: "", description: "" });

  useEffect(() => {
    dispatch(fetchBreads());
  }, [location, dispatch])

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addBread({ bread: bread }));
    setBread({ name: "", amount: "", description: "" });
    navigate('/breads');
  }

  const handleChange = (e) => {
    setBread({ ...bread, [e.target.name]: e.target.value })
  }

  const [remove_Bread, setRemove_Bread] = useState({
    id: 0,
    name: ""
  });

  const removeBread = (e) => {
    let value = e.target.value.split(",");
    setRemove_Bread({
      id: value[0],
      name: value[1]
    })
  }

  const breads = useSelector((data) => data.breads);

  const navigateToBread = (bread) => { navigate(`/bread`, { state: { bread: bread } }) };

  return (
    <div>
      <div className="d-flex justify-content-between">
        <h2 className='m-3'>Breads</h2>
        <span className={`bg-${theme.color === 'light' ? 'dark' : 'light'} rounded-2 h-50 m-3`}>
          <button type="button" className={`btn btn-outline-${theme.color} px-4`} data-bs-toggle="modal" data-bs-target="#staticBackdrop">Add New Bread</button>
        </span>
        <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered">
            <div className={`modal-content bg-${theme.color}`}>
              <div className="modal-header">
                <h5 className="modal-title" id="staticBackdropLabel">Enter Details for New Bread</h5>
                <button type="button" className={`btn-close bg-${theme.color === 'light' ? 'dark' : 'light'}`} data-bs-dismiss="modal" aria-label="Close" onClick={() => setBread({ name: "", amount: "", description: "" })}></button>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="modal-body">
                  <div className="mb-3">
                    <label htmlhtmlFor="name" className="form-label">Bread's Name</label>
                    <input type="text" className="form-control" id="name" name="name" value={bread.name} onChange={handleChange} placeholder="Bread" required />
                  </div>
                  <div className="mb-3">
                    <label htmlhtmlFor="amount" className="form-label">Amount</label>
                    <input type="number" className="form-control" id="amount" name="amount" value={bread.amount} onChange={handleChange} placeholder="50" required />
                  </div>
                  <div className="mb-3">
                    <label htmlhtmlFor="description" className="form-label">Description</label>
                    <textarea className="form-control" id="description" name="description" rows="5" value={bread.description} placeholder="This bread is.." onChange={handleChange}></textarea>
                  </div>
                </div>
                <div className="modal-footer d-flex justify-content-center">
                  <button type="submit" className={`btn btn-${theme.color === 'light' ? 'dark' : 'light'}`} data-bs-dismiss="modal">Add New Bread</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {(breads.length !== 0) && (
        <div>
          <table className={`table table-${theme.color} table-hover`}>
            <thead>
              <tr>
                <th scope="col">No.</th>
                <th scope="col">Name</th>
                <th scope="col">Amount</th>
                <th scope="col">REMOVE</th>
              </tr>
            </thead>
            <tbody>

              {breads.map((bread, i) => {
                return (<tr role="button">
                  <th scope="row">{i + 1}</th>
                  <td onClick={() => navigateToBread(bread)}>{bread.name}</td>
                  <td onClick={() => navigateToBread(bread)}>{bread.amount}</td>
                  <td>
                    <button type="button" data-bs-toggle="modal" data-bs-target="#removeBread" name="fire-btn" value={bread._id + ',' + bread.name} className="btn btn-danger w-100" onClick={removeBread}>
                      REMOVE
                    </button>
                  </td>
                </tr>)
              })}
            </tbody>
          </table>

          <div className="modal fade" id="removeBreadModal" tabindex="-1" aria-labelledby="removeBreadLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
              <div className={`modal-content bg-${theme.color}`}>
                <div className="modal-header">
                  <h5 className="modal-title" id="removeBreadLabel">Remove {remove_Bread.name}</h5>
                  <button type="button" className={`btn-close bg-${theme.color === 'light' ? 'dark' : 'light'}`} data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                  <div className="modal-body">
                    <h5>Are you sure you want to Remove {remove_Bread.name}?</h5>
                  </div>
                </div>
                <div className="modal-footer d-flex justify-content-center">
                  <button type="button" className={`btn btn-${theme.color === 'light' ? 'dark' : 'light'} px-4`} onClick={() => { dispatch(deleteBread(remove_Bread.id)); navigate("/breads") }} data-bs-dismiss="modal">YES</button>
                  <button type="button" className={`btn btn-${theme.color === 'light' ? 'dark' : 'light'} px-4`} data-bs-dismiss="modal">NO</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
      }

      {(breads.length === 0) && (
        <div className="d-flex align-items-center justify-content-center" style={{ height: "50vh" }}>
          <h2>Breads Don't Exist</h2>
        </div>
      )}

    </div>
  )
}

export default Breads
