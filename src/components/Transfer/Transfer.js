import React, { useState } from "react";
import Button from "../../components/Button";
import Input from "../../components/Input";
import Loader from '../../components/ButtonLoader'
import "../../components/DashboardLayout/DashboardLayout.css";
import { useForm } from "react-hook-form";
import API from "../../uttils/API";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import RadioInput from "../RadioInput/RadioInput";

toast.configure();

function Transfer({closeModal}) {

  const [showModal, setShowModal] = useState(false);

  const notify = () =>
    toast.success("Deposit successful", { position: toast.POSITION.TOP_RIGHT });

  const { register, handleSubmit } = useForm({
    criteriaMode: "all",
    mode: "all",
  });
  const [isButtonLoading, setIsButtonLoading] = useState(false);
  const token = localStorage.getItem("Logintoken");

  const recepientValidate =  async(data) => {
    await API.post('/wallet/validate-receiver', data.recipientUsername, {headers: {
      common: {
        Authorization: `Bearer ${token}`,
      },
    },
  })
}
  // amountValidate() {
  //   let balance = this.currentUser.balance;
  //   if (data.amount > balance) {
  //     this.error = 'You do not have sufficient amount!';
  //   }
  // }

  const assignDataType = (data) => {
    const payload = {
      amount: data && data.amount && Number(data.amount),
      pin: data && data.pin && Number(data.pin),
      recipientUsername: data && data.recipientUsername
    }
    transferFunds(payload)
    
  }

  const transferFunds = async(data) => {
    await API.post("/wallet/transfer", data, {
      headers: {
        common: {
          Authorization: `Bearer ${token}`,
        },
      },
    })
      .then((response) => {
        if (response.data.status === "Success") {
          notify();
        }
        closeModal=() => setShowModal(false)
        // setShowModal(true)
      })
      .catch((error) => {
        toast.error(error.response.data.message, {
          position: toast.POSITION.TOP_RIGHT,
        });
      });
  };
  return (
    <>
      <form className="transfer-form" onSubmit={handleSubmit(assignDataType)}>
        <h6 className="title-header">Select wallet type to transfer from</h6>
        <RadioInput />
        <div className="input-field">
          <Input
            type="text"
            label="Recepient Username"
            name="recipientUsername"
            placeholder="King234"
            {...register("recipientUsername")}
            />
          <Input
            type="text"
            label="Amount"
            name="amount"
            placeholder="₦ 00.00"
            {...register("amount")}
            />
            {/* onKeyup={amountValidate} */}
          <Input
            type="text"
            label="Transaction Pin"
            placeholder="0000"
            name="pin"
            {...register("pin")}
          />
        </div>
        <Button
          type="submit"
          children="Transfer"
          onClick={() => {
            setIsButtonLoading(true);
            setTimeout(() => {
              setIsButtonLoading(false);
            }, 1700);
          }}
          isLoading={isButtonLoading}
        />
      </form>
    </>
  );
}

export default Transfer;
