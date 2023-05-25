import React, { useState } from 'react'
import { useLocation, Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { updateBread } from '../../../Actions/admin.js';

function Bread({ theme }) {
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
    (bread && (<div>
      <div className="d-flex justify-content-center">
        <br />
        <div className="col-md-5 m-3">
          <div className={`card-body bg-${theme.color} text-${theme.text}`}>
            <img src="https://hips.hearstapps.com/hmg-prod/images/banana-bread-1581535174.jpg?crop=0.9990570485619991xw:1xh;center,top&resize=980:*" className="card-img-top" alt={bread.name} />
            <form onSubmit={handleSubmit} className='mt-3'>
              <table className="card-title" width="100%" cellPadding={3}>
                <tr>
                  <th>Name</th>
                  <td><input className="form-control" type="text" name="name" value={bread.name} onChange={handleChange}></input></td>
                </tr>
                <tr>
                  <th>Amount</th>
                  <td><input className="form-control" type="number" name="amount" value={bread.amount} onChange={handleChange}></input></td>
                </tr>
                <tr align="center">
                  <th colSpan={2}><h4 className='m-3'>About Bread</h4></th>
                </tr>
                <tr>
                  <td colSpan={2}><textarea className="form-control" id="exampleFormControlTextarea1" rows="7" name="description" value={bread.description} onChange={handleChange}></textarea></td>
                </tr>
              </table>
              <div className="d-flex justify-content-between mt-3">
                <Link to="/breads" className={`btn btn-${theme.color === 'light' ? 'dark' : 'light'} px-4`}>Go Back</Link>
                <button type='submit' className={`btn btn-${theme.color === 'light' ? 'dark' : 'light'} px-4`}>UPDATE</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    )
    )
  );
}

export default Bread
