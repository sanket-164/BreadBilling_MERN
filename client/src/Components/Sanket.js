import React from 'react'
import SanketImg from '../Images/Sanket.png'

function Sanket({ theme }) {
    return (
        <>
            <div className="container mt-3 d-flex justify-content-center">
                <div className={`row d-flex justify-content-center`}>
                    <div className={`col-lg-3 col-md-11 bg-${theme.color} text-${theme.text}`}>
                        <img src={SanketImg} className={`img-fluid mt-3 w-100 m-2`} alt="logo" />
                    </div>
                    <div className={`col-lg-5 col-md-11 bg-${theme.color} text-${theme.text}`}>
                        <table className="card-title w-100 mt-2" cellPadding={3}>
                            <tr>
                                <td>
                                    <h4>Sanket Sadadiya</h4>
                                </td>
                            </tr>
                            <tr>
                                <td>sanketsadadiya53@gmail.com</td>
                            </tr>
                        </table>
                        <div className='mb-3'>
                            <a href="https://www.linkedin.com/in/sanket-sadadiya-9a0150222/" target="_blank" rel='noreferrer' className='btn fs-5 px-3 m-1' style={{color: theme.text, border: theme.text, borderStyle: 'solid'}}><i className="fa fa-linkedin"></i></a>
                            <a href="https://www.instagram.com/sanket_164/" target="_blank" rel='noreferrer' className="btn fs-5 px-3 m-1" style={{color: theme.text, border: theme.text, borderStyle: 'solid'}}><i className="fa fa-instagram"></i></a>
                            <a href="https://github.com/sanket-164" target="_blank" rel='noreferrer' className="btn fs-5 px-3 m-1" style={{color: theme.text, border: theme.text, borderStyle: 'solid'}}><i className="fa fa-brands fa-github"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-3">
                <div className='d-flex justify-content-center'>
                    <div className={`col-lg-6 col-md-11 bg-${theme.color} text-${theme.text}`}>
                        <div className='card-body'>
                            <p className='fs-5'>
                                I am delighted to introduce to you this website that I have personally developed with the purpose of expanding my knowledge and skills in programming. I am excited to share this platform with you as it provides me with an opportunity to further explore more.
                                <br /><br />
                                This project has allowed me to dive deep into various concepts of React JS, REST API, Express JS, MongoDB, and Authentication of course. Please keep in mind that this website is a work in progress, and I will be continually updating and enhancing it based on my evolving knowledge and feedback from users like you.
                                <br /><br />
                                While this website serves as a learning platform for me, I also want it to be a valuable resource for fellow students who share a passion for programming. I am grateful for this opportunity to expand my programming skills and to be able to share this journey with you.
                                <br /><br />
                                Happy coding!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sanket
