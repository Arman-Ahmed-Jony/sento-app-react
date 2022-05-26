import React, { useEffect } from "react";
import { Outlet, NavLink } from "react-router-dom";
import "./style.css";
function WebsiteLayout(props) {
  useEffect(() => {}, []);
  const activeNavigationStyle = ({isActive}) => {
    return isActive ? {backgroundColor: 'rgba(181, 14, 42, 0.4)', color: '#B50E2A', fontWeight: 'bold'} : {backgroundColor: 'white'}
  }
  return (
    <>
      <nav className="nav">
        <header className="flex flex-row">
          <div className="logo">
            <NavLink to="/" >
              <img src="./assets/SS-logo.png" style={{'height': '100px', width: '200px', 'object-fit': 'cover'}} alt="logo" />
            </NavLink>
          </div>
          <div className="menu-container">
            <div className="navbar flex flex-row justify-around items-center">
              <NavLink className="active" to="/" style={activeNavigationStyle}>
                HOME
              </NavLink>
              <NavLink to="/roadmap" style={activeNavigationStyle}>ROADMAP</NavLink>
              <NavLink to="/white-paper" style={activeNavigationStyle}>WHITEPAPER</NavLink>
              <NavLink to="/gallery" style={activeNavigationStyle}>GALLERY</NavLink>
              <NavLink to="/contact-us" style={activeNavigationStyle}>CONTACT US</NavLink>
              
            </div>
          </div>
        </header>
      </nav>
      {/* <div style={{ paddingTop: "150px" }}> */}
      <Outlet />
      {/* </div> */}
    </>
  );
}

export default WebsiteLayout;
