import React, {useState} from 'react'
import Input from '../Input'
import Button from '../Button'
import './ForgotPassword.css'
import { useForm } from "react-hook-form";
import API from '../../uttils/API'
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure()

function ForgotPassword() {
  let history = useHistory();
  const notify = () => toast.success("Successful!", {position: toast.POSITION.TOP_RIGHT});
  const [isButtonLoading, setIsButtonLoading] = useState(false);
  const { register, handleSubmit,formState: { isDirty, isValid, errors } } = useForm({
    criteriaMode: "all",
    mode: "all",
  });
  const recoverPassword = async (data) => {
    const {token} = localStorage.getItem('Logintoken')
    await API.post('/auth/forgot-password', data)
    .then((response) => {
      console.log('yea', response)
      if(response.data.status === 'Success') {
        notify()
        setTimeout(() => {
          history.push("/reset")
        }, 2000);
      }
    })
    .catch((error) => {
      toast.error(error.response.data.message, {position: toast.POSITION.TOP_RIGHT})
    })
  }
  return (
    <div>
      <form className="form" onSubmit={handleSubmit(recoverPassword)}>
      <Input type="email" label="Email Address" placeholder="kingsleyomin@gmail.com" name="email" {...register("email")}/>
      <Button children="Recover Password" disabled={!isDirty || !isValid} onClick={() => {
        setIsButtonLoading(true)
        setTimeout(() => {
          setIsButtonLoading(false)
        }, 1700)}} isLoading={isButtonLoading}/>
      <p className="returnLink"><Link to={'/login'}>Return to Log In</Link></p>

      </form>
    </div>
  )
}

export default ForgotPassword
