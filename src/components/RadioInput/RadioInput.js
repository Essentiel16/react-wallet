import React from 'react'
import "../../components/DashboardLayout/DashboardLayout.css";
import { useForm } from "react-hook-form";

function RadioInput() {
  const { register, handleSubmit } = useForm({
    criteriaMode: "all",
    mode: "all",
  });
  return (
    <>
      <div className="wallet-input">
            <input type="radio" id="naira" name="wallet-type" value="naira"/>
            <label htmlFor="naira">Naira</label>
            <br />
            <input type="radio" id="dollar" name="wallet-type" value="dollar"/>
            <label htmlFor="dollar">Dollar</label>
            <br />
          </div>
    </>
  )
}

export default RadioInput
