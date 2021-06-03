import React, {useState, useEffect} from 'react'
import DashboardLayout from "../../components/DashboardLayout";
import Input from "../../components/Input"
import Modal from '../../components/Modal'
import Table from "../../components/Table";
import Filter from '../../components/Filter'
import "../../components/DashboardLayout/DashboardLayout.css"
import search from '../../assets/search-icon.svg'
import filter from '../../assets/filter-icon.svg'
import '../../components/Table/TableComponent.css'
import API from '../../uttils/API'

function TransactionHistory() {

  const [modal, setModal] = useState(false)
  const [history, setHistory] = useState({
    historyData: []
  })

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
  return (
    <>
      <DashboardLayout>
        <div className="transaction-header">
          <p className="transaction-text">Transactions</p>
          <div className="transaction-util">
            <div className="search">
            <Input type="text" placeholder="Search by name"/>
            <img className="search-icon" src={search} alt=""/>
            </div>
            <div className="filter" onClick={() => setModal(true)}><p>Filter</p>
            <img className="filter-icon" src={filter} alt=""/>
            </div>
          </div>
        </div>
        <Table item={history.historyData}/>
      </DashboardLayout>

      <Modal
        showModal={modal}
        closeModal={() => setModal(false)}
        header={"Filter"}
      >
        <Filter/>
      </Modal>
    </>
  )
}

export default TransactionHistory
