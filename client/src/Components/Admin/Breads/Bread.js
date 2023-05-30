import React, { useState } from 'react'
import { useLocation, Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import FileBase from "react-file-base64";
import { updateBread } from '../../../Actions/admin.js';
import DefaultBread from '../../../Images/default-bread.png';

const YourComponent = ({ theme }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [bread, setBread] = useState(location.state.bread);

  const handleChange = (e) => {
    setBread({
      ...bread, [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateBread(bread._id, { bread: bread }));
    navigate('/breads');
  }

  return (
    <div className="container mt-3">
      <div className={`row bg-${theme.color} text-${theme.text}`}>

        <div className="col-lg-6 col-md-11">
          <img src={(bread.image !== "")? bread.image: DefaultBread} alt={bread.name} className={`img-fluid mt-3 mb-3 px-2 py-1 w-100`} />
        </div>
        <div className="col-lg-6 col-md-12 ">
          <form onSubmit={handleSubmit} className='mt-3 h-100'>
            <table className="card-title w-100" cellPadding={3}>
              <tr>
                <td>
                  <label htmlFor="bread-image" className="form-label">Image</label>
                  <div id="bread-image">
                    <FileBase type="file" multiple={false} onDone={({ base64 }) => setBread({ ...bread, image: base64 })}></FileBase>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="bread-name" className="form-label">Name</label>
                  <input className="form-control" type="text" name="name" id="bread-name" value={bread.name} onChange={handleChange}></input>
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="bread-amount" className="form-label">Amount</label>
                  <input className="form-control" type="number" name="amount" id="bread-amount" value={bread.amount} onChange={handleChange}></input></td>
              </tr>
              <tr align="center">
                <th><h4 className='m-3'>About Bread</h4></th>
              </tr>
              <tr>
                <td><textarea className="form-control" id="exampleFormControlTextarea1" rows="7" name="description" value={bread.description} onChange={handleChange}></textarea></td>
              </tr>
            </table>
            <div className="d-flex justify-content-between align-items-end mt-3">
              <Link to="/breads" className={`btn btn-${(theme.text === 'white' ? 'light' : 'dark')} px-4`}>Go Back</Link>
              <button type='submit' className={`btn btn-${(theme.text === 'white' ? 'light' : 'dark')} px-4`}>UPDATE</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default YourComponent;