import React from 'react'
import SanketImg from '../Images/Sanket.png'

function Sanket({ theme }) {
    return (
        <div>
            <div className="container mt-3 d-flex justify-content-center">
                <div>
                    <div className="my-3">
                        <table>
                            <tr>
                                <td rowspan="4"><img className="m-2" src={SanketImg} alt="logo" />
                                </td>
                            </tr>
                            <tr>
                                <td className="px-3">
                                    <h3>Sanket Sadadiya</h3>
                                </td>
                            </tr>
                            <tr>
                                <td align="center">sanketsadadiya53@gmail.com</td>
                            </tr>
                            <tr>
                                <td align="center">
                                    <a href="https://www.linkedin.com/in/sanket-sadadiya-9a0150222/" target="_blank" rel='noreferrer' className="fa fa-linkedin"><i className="fa fa-brands fa-github"></i></a>
                                    <a href="https://www.instagram.com/sanket_164/" target="_blank" rel='noreferrer' className="fa fa-instagram"><i className="fa fa-brands fa-github"></i></a>
                                    <a href="https://github.com/sanket-164" target="_blank" rel='noreferrer'> <i className="fa fa-brands fa-github"></i></a>
                                </td>
                            </tr>
                        </table>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default Sanket
