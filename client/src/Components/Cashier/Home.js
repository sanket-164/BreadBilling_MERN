import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import { fetchBreads } from '../../Actions/cashier';
import DefaultBread from '../../Images/default-bread.png';

function Home({ theme }) {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const breads = useSelector((data) => data.cashier);
  const [bill, setBill] = useState({
    customer_name: "",
    customer_email: "",
    breads: {},
    purchasedAt: new Date()
  })

  const handleChange = (e) => {
    setBill({
      ...bill, [e.target.name]: e.target.value
    })
  }

  const handleQuantityBtn = (e) => {
    e.preventDefault();
    const bread = e.target.name.split(',');

    if (bread[1] === 'plus') {
      if (isNaN(parseInt(document.getElementById(`${bread[0]}-quantity`).value))) {
        document.getElementById(`${bread[0]}-quantity`).value = 0;
      }
      document.getElementById(`${bread[0]}-quantity`).value = parseInt(document.getElementById(`${bread[0]}-quantity`).value) + 1;
    } else if (bread[1] === 'minus') {
      if (document.getElementById(`${bread[0]}-quantity`).value > 0) {
        document.getElementById(`${bread[0]}-quantity`).value = parseInt(document.getElementById(`${bread[0]}-quantity`).value) - 1;
      }
    }

    document.getElementById(`${bread[0]}-total`).value = parseInt(document.getElementById(`${bread[0]}-quantity`).value) * parseInt(bread[2]);

    setBill({
      ...bill, breads: {
        ...bill.breads,
        [bread[0]]: {
          quantity: parseInt(document.getElementById(`${bread[0]}-quantity`).value),
          amount: parseInt(bread[2])
        }
      },
    })
  }

  const handleQuantityText = (e) => {
    const bread = e.target.name.split('-');

    if (isNaN(e.target.value)) {
      e.target.value = 0;
    } else {
      if (e.target.value > 0) {

        document.getElementById(`${bread[0]}-total`).value = e.target.value * parseInt(bread[2]);

        setBill({
          ...bill, breads: {
            ...bill.breads,
            [bread[0]]: {
              quantity: parseInt(e.target.value),
              amount: parseInt(bread[2])
            }
          }
        })

        console.log(bill.breads)

      } else if (e.target.value === "0") {
        e.target.value = "";
      } else {
        e.target.value = 0;
      }
    }
  }

  const handleSubmit = () => {
    console.log(bill);
    navigate('/createbill', { state: { bill: bill } });
  }

  useEffect(() => {
    dispatch(fetchBreads())
  }, [location, dispatch])
  return (
    <div>
      {(breads.length > 0) && (
        <div className='container mt-3'>
          <form onSubmit={handleSubmit}>
            <div className="row mb-3">
              <div className="col-md-6">
                <label htmlhtmlFor="name" className="form-label">Customer's Name</label>
                <input type="text" className="form-control" id="name" name="customer_name" placeholder="Jhon" value={bill.customer_name} onChange={handleChange} required />
              </div>
              <div className="col-md-6">
                <label htmlhtmlFor="email" className="form-label">Customer's Email</label>
                <input type="email" className="form-control" id="email" name="customer_email" placeholder="customer@gmail.com" value={bill.customer_email} onChange={handleChange} required />
              </div>
            </div>
            <div className="container p-4">
              <table className={`table table-${theme.color} fs-5`}>
                <tbody>
                  {breads.map((bread, i) => {
                    return (<tr>
                      <td>
                        <img src={(bread.image !== "") && (bread.image !== undefined) ? bread.image : DefaultBread} alt={bread.name} height="65px" width="65px" className={`rounded-2 border border-2 border-${(theme.text === 'white' ? 'light' : 'dark')}`} />
                      </td>
                      <td>{bread.name}</td>
                      <td>₹{bread.amount}</td>
                      <td className='w-25'>
                        <div align="center">
                          <div className='d-flex'>
                            <button className={`btn btn-${(theme.text === 'white' ? 'light' : 'dark')} px-3 m-1`} name={`${bread.name},plus,${bread.amount}`} onClick={handleQuantityBtn}>ADD</button>
                            <input type='number' className='form-control m-1' id={`${bread.name}-quantity`} name={`${bread.name}-quantity-${bread.amount}`} onChange={handleQuantityText}></input>
                            <button className={`btn btn-${(theme.text === 'white' ? 'light' : 'dark')} px-3 m-1`} name={`${bread.name},minus,${bread.amount}`} onClick={handleQuantityBtn}>REMOVE</button>
                          </div>
                        </div>
                      </td>
                      <td>
                        <input type='number' className='form-control' id={`${bread.name}-total`} disabled></input>
                      </td>
                      <td>
                        <button className={`btn btn-${(theme.text === 'white' ? 'light' : 'dark')} px-3 w-100`} onClick={() => navigate('/bread', { state: { bread: bread } })}>View {bread.name}</button>
                      </td>
                    </tr>)
                  })}
                </tbody>
              </table>
            </div>
            <div className="d-flex justify-content-center">
              <button type="submit" className={`btn btn-${(theme.text === 'white' ? 'light' : 'dark')} px-3 mb-3 fs-5`}>Generate Bill</button>
            </div>
          </form>
        </div>
      )
      }

      {
        (breads.length === 0) && (
          <div className="d-flex align-items-center justify-content-center" style={{ height: "50vh" }}>
            <h2>Breads Don't Exist</h2>
          </div>
        )
      }
    </div >
  )
}

export default Home
