import React from "react";
import logo from "../../assets/white_logo.svg";
import home from "../../assets/home.svg";
import history from "../../assets/history.svg";
import profile from "../../assets/profile.svg";
import "./Sidebar.css";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="sidebar-container">
      <div className="sidebar">
        <div className="logo-div">
          {/* eslint-disable-next-line */}
          <Link to="/login">
            <div>
            <img src={logo} alt=""/>

            </div>
            <p className="logo-item">Wallet</p>
          </Link>
        </div>
        <div>
          <ul className="sidebar-menu">
            <Link to="/dashboard">
              <li className="sidebar-menu-list">
                <div className="menu-flex-item">
                  <img src={home} alt="" className="item-one"></img>
                </div>
                <div className="sidebar-item">Home</div>
              </li>
            </Link>
            <Link to="/history">
              <li className="sidebar-menu-list">
                <div className="menu-flex-item">
                  <img src={history} alt="" className="item-two"></img>
                </div>
                <div className="sidebar-item">History</div>
              </li>
            </Link>
            <Link to="">
              <li className="sidebar-menu-list">
                <div className="menu-flex-item">
                  <img src={profile} alt="" className="item-three"></img>
                </div>
                <div className="sidebar-item">Profile</div>
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;



