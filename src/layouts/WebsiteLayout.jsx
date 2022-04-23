import React, { useEffect, useState } from "react";
import { Outlet, NavLink, Link } from "react-router-dom";
import "./style.css";
function WebsiteLayout(props) {
  useEffect(() => {}, []);
  return (
    <>
      <nav className="nav">
        <header className="flex flex-row items-center">
          <div className="logo">
            <NavLink to="/">
              <img src="./assets/SS-logo.png" alt="logo" />
            </NavLink>
          </div>
          <div className="menu-container shrink">
            <div className="navbar">
              <NavLink className="active" to="/nft-collections">
                NFT collections
              </NavLink>
              <NavLink to="/onna">ONNA-BUGEISHA</NavLink>
              <NavLink to="/cyborg-samurai">CYBORG SAMURAI</NavLink>
              <NavLink to="/kaiju">KAIJU</NavLink>
              <NavLink to="/white-paper">WHITE PAPER</NavLink>
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
