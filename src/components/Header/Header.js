import React from "react";
import "./Header.css";
import popup from "../../assets/popup.svg";
import bell from "../../assets/bell.svg";
import arrow from "../../assets/arrow-down.svg";

function Header() {
  return (
    <div className="nav-header">
      <div className="notification">
        <img src={bell} alt="" />
        <img src={popup} alt="" className="popup" />
      </div>
      <p>
        Kingsley <span>Omin</span>
      </p>
      <div className="initials">KO</div>
      <img src={arrow} alt="" />
    </div>
  )
}

export default Header;
