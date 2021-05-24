import React from 'react'
import Input from '../Input'
import Button from '../Button'
import { useForm } from 'react-hook-form'
import {useParams, useLocation} from 'react-router-dom';
import { useHistory } from "react-router-dom";

import API from '../../uttils/API';

function ResetPassword() {
  let history = useHistory();
  const useQuery = () => {
    return new URLSearchParams(useLocation().search);
  }
  
  const { register, handleSubmit } = useForm({
    criteriaMode: "all",
    mode: "all",
  }); 
  
  const location = useLocation()
  const token = location.search.split("=")[1]
  console.log(token)

  const ResetPassword = async(data) => {
    //const {token} = useParams()
    // const token = useQuery()
    await API.post('/auth/reset-password', { password: data.password }, {
      headers: {
        Authorization: `Bearer ${token}`
    }
    } )
    .then((response) => {
      console.log(response)
    })
    .catch((error) => {
      console.log(error)
    })
    history.push("/login")

  }
  return (
    <div>
      <form className="form" onSubmit={handleSubmit(ResetPassword)}>
      <Input
            type="password"
            label="New Password"
            placeholder="•••••••••"
            name="password"
            {...register("password")}
          />
          <Input
            type= "password"
            label="Confirm Password"
            placeholder="•••••••••"
            name="password"
            {...register('confirm_password')}
          />
          <Button children="Reset Password"/>
      </form>
    </div>
  )
}

export default ResetPassword
