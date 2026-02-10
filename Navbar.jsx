import React from "react";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          {props.title}
        </Link>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/">
                Home
              </Link>
              {/* <a className="nav-link" aria-current="page" href="#">
                Home
              </a> */}
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
          </ul>
          {/* Ensure the "My Button" code is NOT here */}
          <div className="d-flex">
            <div className="bg-primary rounded mx-2" onClick={() => props.toggleMode('primary')} style={{height: '30px', width: '30px', cursor: 'pointer'}}></div>
            <div className="bg-danger rounded mx-2" onClick={() => props.toggleMode('danger')} style={{height: '30px', width: '30px', cursor: 'pointer'}}></div>
            <div className="bg-success rounded mx-2" onClick={() => props.toggleMode('success')} style={{height: '30px', width: '30px', cursor: 'pointer'}}></div>
            <div className="bg-warning rounded mx-2" onClick={() => props.toggleMode('warning')} style={{height: '30px', width: '30px', cursor: 'pointer'}}></div>
            <div className="bg-light rounded mx-2" onClick={() => props.toggleMode('light')} style={{height: '30px', width: '30px', cursor: 'pointer'}}></div>
            <div className="bg-dark rounded mx-2" onClick={() => props.toggleMode('dark')} style={{height: '30px', width: '30px', cursor: 'pointer'}}></div>
          </div>
        </div>
      </div>
    </nav>
  );
}
