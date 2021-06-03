import React, { useEffect, useState } from "react";
import "./Header.css";
import popup from "../../assets/popup.svg";
import bell from "../../assets/bell.svg";
import arrow from "../../assets/arrow-down.svg";
import API from "../../uttils/API";

function Header() {
  const [user, setUser] = useState("");
  const firstInitial = user.first_name && user.first_name.charAt(0).toUpperCase()
  const secondInitial = user.last_name && user.last_name.charAt(0).toUpperCase()

  useEffect(() => {
    userProfile();
  }, []);

  const userProfile = async () => {
    const token = localStorage.getItem("Logintoken");
    await API.get("/auth/user", {
      headers: {
        common: {
          Authorization: `Bearer ${token}`,
        },
      },
    })
      .then((response) => {
        setUser(response.data.data);
        const { username } = response.data.data;
        localStorage.setItem("userProfile", username);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="nav-header">
      <div className="notification">
        <img src={bell} alt="" />
        <img src={popup} alt="" className="popup" />
      </div>
      <p>
        {user.first_name} <span> {user.last_name}</span>
      </p>
      <div className="initials">
        {firstInitial}
        {secondInitial}
      </div>
      <img src={arrow} alt="" />
    </div>
  );
}

export default Header;
