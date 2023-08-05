import React from 'react'
import PropTypes from 'prop-types'
// import { a } from 'react-router-dom'


export default function Navbar(props) {

  return (
            <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}> 
            <div className="container-fluid">
            <a className="navbar-brand" href="#">{props.title}</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
            <a className="navbar-brand" aria-current="page" href="#" >{props.mainpage}</a>
            {/* <a className="nav-a active" aria-current="page" href="#" ></a> */}

            </li>
            {/* <li className="nav-item">
            </li> */}
            {/* <li className="nav-item">
            <a className="nav-a active" aria-current="page" href="/about">{props.aboutText}</a>
            </li> */}
            </ul>
            <div className={`form-check form-switch mx-3 text-${props.mode==='light'?'dark':'light'}`}>
                <input className="form-check-input" onClick={props.tm} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                <label className="form-check-label" htmlFor="flexSwitchCheckDefault"        >enable dark mode</label>
            </div>
            </div>
            </div>
            </nav>
  )
}
Navbar.defaultProps={
  title:"title req",
  aboutText:"text reqired"
  
}
Navbar.propTypes={
  title:PropTypes.string.isRequired,
  aboutText:PropTypes.string.isRequired
}