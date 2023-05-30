import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import html2Pdf from 'html2pdf.js';
function BillReceipt() {
    const navigate = useNavigate();
    const location = useLocation();
    const bill = location.state.bill;

    let breadsArr = Object.entries(bill.breads).filter((bread) => {
        return bread[1].quantity > 0;
    });

    const convertToPdf = () => {
        const element = document.getElementById('bill');
        html2Pdf().from(element).save(`${bill.customer_name}-bill`);
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
                                                <th>₹{bill.totalAmount}</th>
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
                    <button className="btn btn-primary btn-lg" id="bill-submit-btn" onClick={() => convertToPdf()}>DOWNLOAD</button>
                    <button className="btn btn-dark m-2 fs-5" onClick={() => {
                        if (location.state.URL === '/cashier/bills') {
                            navigate(location.state.URL, { state: { cashierId: location.state.cashierId, cashierName: location.state.cashierName } });
                        } else {
                            navigate(location.state.URL);
                        }
                    }
                    }>Back</button>
                </div>
            </div>
        ))
    )
}

export default BillReceipt
