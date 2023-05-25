import React from 'react'

function Settings({ theme, setTheme }) {
    document.body.classList.remove(`text-${theme.text}`);

    const changeTheme = (e) => {
        if (e.target.name === 'blue') {
            setTheme({
                text: "white",
                color: "primary"
            })
            document.body.style.backgroundColor = e.target.name;
            document.body.style.color = "white";
        } else if (e.target.name === 'green') {
            setTheme({
                text: "white",
                color: "success"
            })
            document.body.style.backgroundColor = e.target.name;
            document.body.style.color = "white";
        } else if (e.target.name === 'red') {
            setTheme({
                text: "white",
                color: "danger"
            })
            document.body.style.backgroundColor = e.target.name;
            document.body.style.color = "white";
        } else if (e.target.name === 'yellow') {
            setTheme({
                text: "black",
                color: "warning"
            })
            document.body.style.backgroundColor = e.target.name;
            document.body.style.color = "black";
        } else if (e.target.name === 'cyan') {
            setTheme({
                text: "black",
                color: "info"
            })
            document.body.style.backgroundColor = e.target.name;
            document.body.style.color = "black";
        } else if (e.target.name === 'white') {
            setTheme({
                text: "black",
                color: "light"
            })
            document.body.style.backgroundColor = e.target.name;
            document.body.style.color = "black";
        } else if (e.target.name === 'black') {
            setTheme({
                text: "white",
                color: "dark"
            })
            document.body.style.backgroundColor = e.target.name;
            document.body.style.color = "white";
        }
    }
    return (
        <div>
            <button type="button" className="btn btn-primary" name="blue" onClick={changeTheme}>Blue</button>
            <button type="button" className="btn btn-success" name="green" onClick={changeTheme}>Green</button>
            <button type="button" className="btn btn-danger" name="red" onClick={changeTheme}>Red</button>
            <button type="button" className="btn btn-warning" name="yellow" onClick={changeTheme}>Yellow</button>
            <button type="button" className="btn btn-info" name="cyan" onClick={changeTheme}>Cyan</button>
            <button type="button" className="btn btn-light" name="white" onClick={changeTheme}>Light</button>
            <button type="button" className="btn btn-dark" name="black" onClick={changeTheme}>Dark</button>
        </div>
    )
}

export default Settings
