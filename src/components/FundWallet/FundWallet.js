import React, {useState} from 'react'
import Input from "../../components/Input";
import Button from "../../components/Button";
import "../../components/DashboardLayout/DashboardLayout.css";
import { useForm } from "react-hook-form";
import API from '../../uttils/API'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import RadioInput from '../RadioInput/RadioInput';


toast.configure()

function FundWallet() {
  const notify = () => toast.success("Deposit successful", {position: toast.POSITION.TOP_RIGHT})

  const { register, handleSubmit } = useForm({
    criteriaMode: "all",
    mode: "all",
  });
  const [isButtonLoading, setIsButtonLoading] = useState(false);
  
  const fundWallet = async(data) => {
    const token = localStorage.getItem("Logintoken");
    const amountInNumberType = parseFloat(data.amount)
 
    await API.post('/wallet/deposit', {
      amount: amountInNumberType
    }, {
      headers: {
        common: {
          Authorization: `Bearer ${token}`,
        },
      },
    })
    .then((response) => {
      if (response.data.status === 'Success') {
        notify()
        
      }
    })
    .catch((error) => {
      toast.error(error.response.data.message, {position: toast.POSITION.TOP_RIGHT})
    })
  }

  

  return (
    <>
      <form className="transfer-form" onSubmit={handleSubmit(fundWallet)}>
          <h6 className="title-header">Select wallet type</h6>
          <RadioInput/>
          <div className="input-field">
            <Input type="text" label="Amount" placeholder="₦ 00.00"  {...register("amount")}/>
            <Button children="Fund Wallet" onClick={() => {
        setIsButtonLoading(true)
        setTimeout(() => {
          setIsButtonLoading(false)
        }, 1700)}} isLoading={isButtonLoading}/>
          </div>
        </form>
    </>
  )
}

export default FundWallet
