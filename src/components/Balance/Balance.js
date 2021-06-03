import React, {useState, useEffect} from 'react'
import './Balance.css'
import userProfile from '../Header/Header'
import API from "../../uttils/API";

function Balance() {

  const [balance, setBalance] = useState('') 

  useEffect(() => {
    getBalance();
  }, []);

  const getBalance = async () => {
    const token = localStorage.getItem("Logintoken");
    await API.get("/wallet/balance", {
      headers: {
        common: {
          Authorization: `Bearer ${token}`,
        },
      },
    })
      .then((response) => {
        console.log(response)
        setBalance(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  
  return (
    <div className="welcome-flex m-bottom">
      <div className="funds">
        <h2>₦{balance.balance}</h2>
        <p>Naira Balance</p>
      </div>
      <div className="funds">
        <h2>$00.00</h2>
        <p>Dollar Balance</p>
      </div>
    </div>
  )
}

export default Balance
