import React from "react";

//props   --It passes the values to another page to use (example at <a>{props.title}</a>)
import PropTypes from "prop-types";

export default function NavbarA(props) {
  return (
    <nav
      className={`navbar sticky-top navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
    >
      <div className="container-fluid font-light">
        <a className="navbar-brand title-font" href="http://google.com/">
          {props.title}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" href="/">Home</a>
            </li>
            <li className="nav-item">
              
            </li>
            <li className="nav-item dropdown">
            
              {/* <a
                className="nav-Link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown Link
              </a> */}
              <ul className="dropdown-menu">
              
              </ul>
              
            </li>
          </ul>
          <div className="collapse navbar-collapse form-check form-switch">
          <input
            className="form-check-input"
            type="checkbox"
            onClick={props.toggleMode}
            id="flexSwitchCheckDefault"
          />
        </div>
        </div>
      </div>
    </nav>
    
  );
}

//set propsType
NavbarA.propTypes = {
  title: PropTypes.string,
};
