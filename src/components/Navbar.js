import React, {useState} from 'react'
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";

export default function Navbar(props) {
  const [modeType, setModeType] = useState("dark");

  let ToggleMode = ()=>
  {
    if (modeType === "light")
    {
      setModeType('dark');
    }

    else if (modeType === "dark")
    {
      setModeType("light");
    }
  }

  let setMode = function()
  {
    ToggleMode();
    let body = document.getElementsByTagName('body');
    let dmlabel = document.getElementById('dmlabel');
    if(modeType === 'dark')
    {
      body[0].style.backgroundColor = "#181a19";
      body[0].style.color = "#edededee";
      dmlabel.style.color = "#edededee";

    }

    else if (modeType === "light")
    {
      body[0].style.backgroundColor = "#ededef";
      body[0].style.color = "#181a19ee";
      dmlabel.style.color = "#181a19ee";
    }
  }

  let repHome = function()
  {
    document.title = 'TextUtils - Home';
  }

  return (
    <>
      <nav className={`navbar navbar-expand-lg navbar-${modeType === 'light'?'dark':'light'} bg-${modeType === 'light'?'dark':'light'} navvy`}>
        <Link className="navbar-brand mx-2" to="/textutils" style = {{marginLeft: "5px"}} onClick = {repHome}>
          {props.title}
        </Link>

        <div>
          <ul className="navbar-nav mr-auto" style = {{width: "100%"}}>
            <li className = "nav-item mx-3 my-2">
              <div className="form-check form-switch">
                <input className="form-check-input" type="checkbox" role="switch" onClick = {setMode} id="mode" />
                <label id = "dmlabel" className={`form-check-label`} htmlFor="flexSwitchCheckDefault">Dark Mode</label>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

Navbar.defaultProps = 
{
    title: "Navbar"
}

Navbar.propTypes = 
{
    title: PropTypes.string
};