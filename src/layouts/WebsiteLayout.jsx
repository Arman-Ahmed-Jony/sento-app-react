import React, { useEffect, useRef } from "react";
import { Outlet, NavLink } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import TelegramIcon from "@mui/icons-material/Telegram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import "./style.scss";
function WebsiteLayout(props) {
  useEffect(() => {
    setPlayBack()
  }, []);
  const videoRef = useRef();
  const setPlayBack = () => {
    videoRef.current.playbackRate = 0.5;
  };
  const activeNavigationStyle = ({ isActive }) => {
    return isActive
      ? {
          backgroundColor: "rgba(181, 14, 42, 0.4)",
          color: "#B50E2A",
          fontWeight: "bold",
        }
      : { backgroundColor: "black", color: "white" };
  };
  return (
    <div style={{ backgroundColor: "#E5E5E5" }}>
      <nav className="nav">
        <header className="flex flex-row">
          <div className="logo">
            <NavLink to="/">
              <img
                src="./assets/SS-logo.png"
                style={{ height: "100px", width: "200px", objectFit: "cover" }}
                alt="logo"
              />
            </NavLink>
          </div>
          <div className="menu-container">
            <div className="navbar flex flex-row justify-around items-center">
              <NavLink className="active" to="/" style={activeNavigationStyle}>
                HOME
              </NavLink>
              <NavLink to="/roadmap" style={activeNavigationStyle}>
                ROADMAP
              </NavLink>
              <NavLink to="/white-paper" style={activeNavigationStyle}>
                WHITEPAPER
              </NavLink>
              <NavLink to="/gallery" style={activeNavigationStyle}>
                GALLERY
              </NavLink>
              <NavLink to="/contact-us" style={activeNavigationStyle}>
                CONTACT US
              </NavLink>
            </div>
          </div>
        </header>
      </nav>

      {/* <video style={{position: 'absolute'}} autoPlay muted loop src={"/assets/moon_-_109148 (Original).mp4"}></video> */}
      <div style={{ paddingTop: "100px" }}>
        <header>
          <video
            ref={videoRef}
            // onCanPlay={() => setPlayBack()}>
            style={{
              position: "absolute",
              right: 0,
              top: 0,
              width: "100%",
              objectFit: "cover",
              height: "1000px",
            }}
            autoPlay
            muted
            loop
            id="myPoster"
          >
            <source
              src={"/assets/moon_-_109148 (Original).mp4"}
              type="video/mp4"
            />
            Your browser does not support HTML5 video.
          </video>
          
        </header>
        <Outlet />
      </div>
      <footer className="">
        <div className="footer-top">
          <div className="social-media-icons">
            <FacebookIcon />
            <TwitterIcon />
            <TelegramIcon />
            <YouTubeIcon />
          </div>
          <div className="footer-text">
            <h3 className="text-red-700">
              don’t miss out, join now for early access
            </h3>
            <p>
              Maecenas sit pretium, cras in. In quisque sem id eget. In vel
              gravida ut{" "}
            </p>
          </div>
          <div className="footer-email-us">
            <input
              type="email"
              placeholder="Enter your email address"
              name=""
              id=""
            />
            <button>SUBSCRIBE</button>
          </div>
        </div>
        <div className="footer-bottom flex justify-around items-center">
          <p> 2022- ALL rights reserved</p>
          <p>Privacy Policy Cookies Terms & Conditions Contact Us</p>
        </div>
      </footer>
    </div>
  );
}

export default WebsiteLayout;
