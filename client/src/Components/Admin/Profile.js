import React, { useEffect, useState } from 'react'
import { useLocation, Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProfile, updateProfile } from '../../Actions/admin.js';

function Profile({ theme }) {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [admin, setAdmin] = useSelector((data) => data.admin);
  console.log(admin);

  const handleChange = (e) => {
    setAdmin({
      ...admin, [e.target.name]: e.target.value
    })
  }

  useEffect(() => {
    dispatch(fetchProfile());
  },[location, dispatch])

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateProfile(admin._id, {admin: admin}));
    navigate('/profile');
}

return (
  (admin &&
    <div className={`card bg-${theme.color} text-${theme.text}`} style={{ width: "25rem" }
  }>
      <img src="..." className="card-img-top" alt="..." />
  {console.log(admin.birthday.substring(admin.birthday.indexOf('T'), -10))}
      <div className="card-body">
        <form onSubmit={handleSubmit}>

          <h5 className="card-title">Admin</h5>
          <table className="card-title" width="100%">
            <tr>
              <th>Name</th>
              <td><input className="form-control" type="text" name="name" value={admin.name} onChange={handleChange}></input></td>
            </tr>
            <tr>
              <th>Email</th>
              <td><input className="form-control" type="text" name="name" value={admin.email} onChange={handleChange}></input></td>
            </tr>
            <tr>
              <th>Mobile No.</th>
              <td><input className="form-control" type="number" name="name" value={admin.phone} onChange={handleChange}></input></td>
            </tr>
            <tr>
              <th>Birth Date</th>
              <td><input className="form-control" type="date" name="birthday" value={`2005/04/16`} onChange={handleChange}></input></td>
            </tr>
            <tr>
              <th>Joining Date</th>
              <td><input className="form-control" type="text" name="joinedAt" value={admin.joinedAt.substring(admin.joinedAt.indexOf('T'), -10)} disabled></input></td>
            </tr>
          </table>
          <div className="d-flex justify-content-between">
              <Link to="/admins" className={`btn btn-${theme.color === 'light' ? 'dark' : 'light'}`}>Back</Link>
              <button type='submit' className={`btn btn-${theme.color === 'light' ? 'dark' : 'light'}`}>UPDATE</button>
            </div>
        </form>
      </div>
    </div >
  )

);
}

export default Profile
