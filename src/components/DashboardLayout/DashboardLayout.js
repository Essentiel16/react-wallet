import React from 'react'
import Sidebar from '../../components/Sidebar'
import Header from '../../components/Header'

function DashboardLayout({children}) {
  return (
    <div className="container">
        <Header/>
        <Sidebar/>
      {/* <div className="dashboard-main">
        {children}
      </div> */}
    </div>
  )
}

export default DashboardLayout
