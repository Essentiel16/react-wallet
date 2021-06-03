import React, { useState, useEffect } from "react";
import DashboardLayout from "../../components/DashboardLayout";
import Button from "../../components/Button";
import FundWallet from "../../components/FundWallet";
import Balance from "../../components/Balance";
import Modal from "../../components/Modal";
import Table from "../../components/Table";
import Transfer from '../../components/Transfer'
import "../../components/DashboardLayout/DashboardLayout.css";
import '../../components/Table/TableComponent.css'
import "../../App.css";
import emptyState from "../../assets/Emptystate.svg";
import API from '../../uttils/API'

function UserDashboard() {
  const [showModal, setShowModal] = useState(false);
  const [modal, setModalTwo] = useState(false);
  const [history, setHistory] = useState({
    historyData: []
  })
  // const [loading, setLoading] = useState(false)
  // const [currentPage, setCurrentPage] = useState(1)
  // const [limit, setLimit] = useState(5)


    // const transactionHistory = async(payload = {}) => {
    //     let url = 'https://wallet-app-jupyter.herokuapp.com/api/v1/wallet/transaction-history?'
    //     if(Object.keys(payload).length) {
    //       Object.keys(payload).forEach(key => {
    //         url +=`${key}=${payload[key]}&`
    //       })
    //     }
    //     const response = await axios.get(url)
    //     return response.data.data;
    // }

  useEffect(() => {

    const getHistory = async() => {
      const token = localStorage.getItem("Logintoken");
      // setLoading(true)
     const response = await API.get('https://wallet-app-jupyter.herokuapp.com/api/v1/wallet/transaction-history?', {
      headers: {
        common: {
          Authorization: `Bearer ${token}`,
        },
      },
    })
    const historyData = response.data.data
     setHistory({historyData})
    //  setLoading(false)
    }
    getHistory()
  }, [])

  const username = localStorage.getItem("userProfile");

  // const indexOfLastHistory = currentPage * limit
  // const indexOfFirstHistory = indexOfLastHistory - limit
  // const currentpage = history.slice(indexOfFirstHistory, indexOfLastHistory)


  // const paginate = pageNumber => setCurrentPage(pageNumber)
  return (
    <>
      <DashboardLayout>
        <div className="sub-header">
          <div className="sub-header-text">
            <p>
              {username} <span> &#128075;&#127999;</span>
            </p>
          </div>
          <div className="sub-header-button">
            <div className="modal-button">
              <Button
                children="Transfer Funds"
                type="button"
                buttonStyle="btn--primary-outline"
                onClick={() => setShowModal(true)}
              />
            </div>
            <div className="modal-button">
              <Button
                children="+ Fund Wallet"
                type="button"
                buttonStyle="btn--primary-outline"
                onClick={() => setModalTwo(true)}
              />
            </div>
          </div>
        </div>
        <Balance />
        <div className="transaction">
          <h5>Transaction History</h5>
        </div>
        <div className="empty-state">
          {history.historyData.length === 0 ? (
            <img src={emptyState} alt="No transaction" />
          ) : (
            <Table item={history.historyData}/>
            )}
            {/* <Pagination limit={limit} totalPost={history.length} paginate={paginate}/> */}
        </div>
      </DashboardLayout>

      <Modal
        showModal={showModal}
        closeModal={() => setShowModal(false)}
        header={"Transfer"}
      >
        <Transfer/>
      </Modal>

      <Modal
        showModal={modal}
        closeModal={() => setModalTwo(false)}
        header={"Fund wallet"}
      >
        <FundWallet/>
      </Modal>
    </>
  );
}

export default UserDashboard;
