import React from 'react'
import WhiteTheme from '../Images/WhiteTheme.png';
import BlackTheme from '../Images/BlackTheme.png';
import RedTheme from '../Images/RedTheme.png';
import GreenTheme from '../Images/GreenTheme.png';
import BlueTheme from '../Images/BlueTheme.png';
import YellowTheme from '../Images/YellowTheme.png';

function Settings({ theme, setTheme }) {
    document.body.classList.remove(`text-${theme.text}`);

    const changeTheme = (e) => {
        if (e.target.name === 'blue') {
            setTheme({
                text: "white",
                color: "primary",
                background: e.target.name
            })
            localStorage.setItem('breadBillingTheme', JSON.stringify({
                text: "white",
                color: "primary",
                background: e.target.name
            }));
        } else if (e.target.name === 'green') {
            setTheme({
                text: "white",
                color: "success",
                background: e.target.name
            })
            localStorage.setItem('breadBillingTheme', JSON.stringify({
                text: "white",
                color: "success",
                background: e.target.name
            }));
        } else if (e.target.name === 'red') {
            setTheme({
                text: "white",
                color: "danger",
                background: e.target.name
            })
            localStorage.setItem('breadBillingTheme', JSON.stringify({
                text: "white",
                color: "danger",
                background: e.target.name
            }));
        } else if (e.target.name === 'yellow') {
            setTheme({
                text: "black",
                color: "warning",
                background: e.target.name
            })
            localStorage.setItem('breadBillingTheme', JSON.stringify({
                text: "black",
                color: "warning",
                background: e.target.name
            }));
        } else if (e.target.name === 'white') {
            setTheme({
                text: "black",
                color: "light",
                background: e.target.name
            })
            localStorage.setItem('breadBillingTheme', JSON.stringify({
                text: "black",
                color: "light",
                background: e.target.name
            }));
        } else if (e.target.name === 'black') {
            setTheme({
                text: "white",
                color: "dark",
                background: e.target.name
            })
            localStorage.setItem('breadBillingTheme', JSON.stringify({
                text: "white",
                color: "dark",
                background: e.target.name
            }));
        }
    }

    return (
        <div className="container">

            <div className="d-flex justify-content-center mt-3">
                <div className='row'>
                    <h3>Themes</h3>
                    <div className='col-md-4 py-2'>
                        <img role="button" className={`border border-2 border-${theme.text === 'white' ? 'light' : 'dark'} w-100`} src={WhiteTheme} alt="White Theme" name="white" onClick={changeTheme}></img>
                    </div>
                    <div className='col-md-4 py-2'>
                        <img role="button" className={`border border-2 border-${theme.text === 'white' ? 'light' : 'dark'} w-100`} src={BlackTheme} alt="Black Theme" name="black" onClick={changeTheme}></img>
                    </div>
                    <div className='col-md-4 py-2'>
                        <img role="button" className={`border border-2 border-${theme.text === 'white' ? 'light' : 'dark'} w-100`} src={RedTheme} alt="Red Theme" name="red" onClick={changeTheme}></img>
                    </div>
                    <div className='col-md-4 py-2'>
                        <img role="button" className={`border border-2 border-${theme.text === 'white' ? 'light' : 'dark'} w-100`} src={GreenTheme} alt="Green Theme" name="green" onClick={changeTheme}></img>
                    </div>
                    <div className='col-md-4 py-2'>
                        <img role="button" className={`border border-2 border-${theme.text === 'white' ? 'light' : 'dark'} w-100`} src={BlueTheme} alt="Blue Theme" name="blue" onClick={changeTheme}></img>
                    </div>
                    <div className='col-md-4 py-2'>
                        <img role="button" className={`border border-2 border-${theme.text === 'white' ? 'light' : 'dark'} w-100`} src={YellowTheme} alt="Yellow Theme" name="yellow" onClick={changeTheme}></img>
                    </div>
                </div>

            </div>
            <div className="d-flex justify-content-center mt-3">
                <a href="https://github.com/sanket-164/BreadBilling_MERN/issues/new" target='_blank' rel="noreferrer" className={`btn btn-${(theme.text === 'white' ? 'light' : 'dark')} px-4 fs-5`}>Report an issue</a>
            </div>
        </div>
    )
}

export default Settings
