import React from "react";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import './DashboardLayout.css'

function DashboardLayout({ children }) {
  return (
    <div className="container">
      <Sidebar />
      <div className="main">
          <Header/>
          {children}
     </div>
    </div>
  );
}

export default DashboardLayout;
