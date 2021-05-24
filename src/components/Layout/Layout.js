import React from "react";
import "./Layout.css";
import Logo from '../../assets/Logo.svg'
import Message from '../Message'

function HomeStructure({title, subtitle, children}) {
  return (
    <div className="body">
      <div className="logo">
      <img src={Logo} alt="logo" />
      </div>
      <div className="content">
        <div className="contentLeft">
          <Message title={title} subtitle={subtitle}/>
        </div>
      <div className="contentRight">
        {children}
      </div> 
      </div>
    </div>
  );
}

export default HomeStructure;
