import React, {useState} from 'react'
import Input from '../Input'
import Button from '../Button'
import { useForm } from 'react-hook-form'
import { useLocation} from 'react-router-dom';
import { useHistory } from "react-router-dom";
import API from '../../uttils/API';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
toast.configure()

function ResetPassword() {
  let history = useHistory();
  const notify = () => toast.success("Password reset successful", {position: toast.POSITION.TOP_RIGHT});

  const [isButtonLoading, setIsButtonLoading] = useState(false);

 
  
  const { register, handleSubmit } = useForm({
    criteriaMode: "all",
    mode: "all",
  }); 
  
  const location = useLocation()
  const token = location.search.split("=")[1]

  const ResetPassword = async(data) => {
    await API.post('/auth/reset-password', { password: data.password }, {
      headers: {
        Authorization: `Bearer ${token}`
    }
    } )
    .then((response) => {
      if(response.data.status === 'Success') {
        notify()
        setTimeout(() => {
          history.push("/login")
        }, 2000);
      }
    })
    .catch((error) => {
      toast.error(error.response.data.message, {position: toast.POSITION.TOP_RIGHT});
    })

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
          <Button children="Reset Password" onClick={() => {
        setIsButtonLoading(true)
        setTimeout(() => {
          setIsButtonLoading(false)
        }, 1700)}} isLoading={isButtonLoading}/>
      </form>
    </div>
  )
}

export default ResetPassword
