import React, { useState, useEffect } from "react";
import Input from "../Input";
import Button from "../Button";
import { useForm } from "react-hook-form";
import API from "../../uttils/API";

function Filter() {
  const { register, handleSubmit } = useForm({
    criteriaMode: "all",
    mode: "all",
  });
  const [isButtonLoading, setIsButtonLoading] = useState(false);
  const [history, setHistory] = useState({
    historyData: []
  })

  // useEffect(() => {
  //   filterWallet();
  // }, []);
  const filterWallet = async (data) => {
    const token = localStorage.getItem("Logintoken");
    await API.post("/wallet/filtered-transaction-history", data, {
      headers: { common: { Authorization: `Bearer ${token}` } },
    })
      .then((response) => {
        const historyData = response.data.data;
        setHistory({ historyData });
        console.log(setHistory({ historyData }));
        if (response.data.status === "Success") {
          history = historyData;
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <form className="transfer-form" onSubmit={handleSubmit(filterWallet)}>
        <div className="select">
          <label for="account">Transaction Type</label>
          <br />
          <select
            name="transactionType"
            className="select-transaction"
            {...register("transactionType")}
          >
            <option value="transfer">Wallet Transfer</option>
            <option value="deposit">Deposit Fund</option>
          </select>
        </div>

        <div className="date-input">
          <Input
            style={{ width: "170px" }}
            type="date"
            label="Start Date"
            {...register("startDate")}
          />
          <Input
            style={{ width: "170px" }}
            type="date"
            label="End Date"
            {...register("endDate")}
          />
        </div>
        <h6 className="status-header">Transaction Status</h6>
        <div className="wallet-input">
          <input
            type="radio"
            name="transactionStatus"
            value="successful"
            {...register("transactionStatus")}
          />
          <label htmlFor="successful">Successful</label>
          <br />
          <input
            type="radio"
            name="transactionStatus"
            value="failed"
            {...register("transactionStatus")}
          />
          <label htmlFor="failed">Failed</label>
          <br />
        </div>
        <div style={{ marginTop: "32px" }}>
          <Button
            children="Apply Search"
            onClick={() => {
              setIsButtonLoading(true);
              setTimeout(() => {
                setIsButtonLoading(false);
              }, 1700);
            }}
            isLoading={isButtonLoading}
          />
        </div>
      </form>
    </>
  );
}

export default Filter;
