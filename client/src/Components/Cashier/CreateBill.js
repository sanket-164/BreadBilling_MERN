import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import html2Pdf from 'html2pdf.js';
import { createBill } from '../../Actions/cashier.js';
function CreateBill() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const location = useLocation();
    const bill = location.state.bill;

    let breadsArr = Object.entries(bill.breads).filter((bread) => {
        return bread[1].quantity > 0;
    });

    let totalAmount = 0;

    const convertToPdf = () => {
        const element = document.getElementById('bill');
        html2Pdf().from(element).save(`₹${totalAmount}-bill`);
        navigate('/home')
    };

    for (let i = 0; i < breadsArr.length; i++) {
        totalAmount = totalAmount + (breadsArr[i][1].quantity * breadsArr[i][1].amount)
    }

    function submitBill() {
        dispatch(createBill({ bill: { ...bill, totalAmount: totalAmount } }))
        convertToPdf();
    };

    return (
        (bill && (
            <div className="mt-3 mb-3 d-flex justify-content-center">
                <div className={`card`}>
                    <div className="card-body text-dark" id='bill' align="center">
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
                                            {breadsArr.map((bread, i) => {
                                                return (<tr>
                                                    <th scope="row">{i + 1}</th>
                                                    <th>{bread[0]}</th>
                                                    <td>{bread[1].quantity}</td>
                                                    <td>₹{bread[1].amount}</td>
                                                    <td>₹{bread[1].quantity * bread[1].amount}</td>
                                                </tr>)
                                            })
                                            }
                                            <tr>
                                                <td colSpan={3}></td>
                                                <th>Total Amount</th>
                                                <th>₹{totalAmount}</th>
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
                    <button className="btn btn-primary btn-lg" id="bill-submit-btn" onClick={() => submitBill()}>SUBMIT</button>
                    <button className="btn btn-dark m-2 fs-5" onClick={() => navigate('/home')}>Back</button>
                </div>
            </div>
        ))
    )
}

export default CreateBill