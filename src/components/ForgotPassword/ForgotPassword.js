import React from 'react'
import Input from '../Input'
import Button from '../Button'
import './ForgotPassword.css'
import { useForm } from "react-hook-form";
import API from '../../uttils/API'
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";

function ForgotPassword() {
  let history = useHistory();
  const { register, handleSubmit,formState: { isDirty, isValid, errors } } = useForm({
    criteriaMode: "all",
    mode: "all",
  });
  const recoverPassword = async (data) => {
    console.log('hello')
    const {token} = localStorage.getItem('Logintoken')
    console.log('you', token)
    await API.post('/auth/forgot-password', data)
    .then((response) => {
      console.log('yea', response)
    })
    .catch((error) => {
      console.log(error)
    })
    history.push("/reset")
  }
  return (
    <div>
      <form className="form" onSubmit={handleSubmit(recoverPassword)}>
      <Input type="email" label="Email Address" placeholder="kingsleyomin@gmail.com" name="email" {...register("email")}/>
      <Button children="Recover Password" disabled={!isDirty || !isValid}/>
      <p className="returnLink"><Link to={'/login'}>Return to Log In</Link></p>

      </form>
    </div>
  )
}

export default ForgotPassword
