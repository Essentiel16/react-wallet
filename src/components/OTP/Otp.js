import React from 'react'
import '../SignupForm/SignupForm'
import './Otp.css'
import { useHistory } from "react-router-dom"
import API from '../../uttils/API'
import ReactCodeInput from 'react-verification-code-input';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


toast.configure()

function Otp() {
    let history = useHistory();
    const notify = () => toast.success("Account verified successfully", {position: toast.POSITION.TOP_RIGHT})

    const verify = async(data) => {
        const { token } = JSON.parse(localStorage.getItem('user-detail'))
        let otp = Object.entries(data)
        .map((arr) => arr[1])
        .join('');
        await API.post('/auth/confirm-email', {otp}, {
            headers: {
                common: {
                    Authorization: `Bearer ${token}`
                }
            }
        })
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

    const resendOtp = async(data) => {
        const { email } = JSON.parse(localStorage.getItem('user-detail'))
        await API.post('/auth/resend-email-otp', {email})
        .then((response) => {
            if(email != null && response.data.status === 'Success') {
                toast.success("OTP has been resent to your registered email ", {position: toast.POSITION.TOP_RIGHT});
            }
        })
        .catch((error) => {
            toast.error(error.response.data.message, {position: toast.POSITION.TOP_RIGHT});
        })
    }

    return (
        <div>
            <form className="form">
                <h3 className="otpTitle">
                    Kindly enter your OTP to <br></br>
                    verify account
                </h3>
                <div className="otpInput">
                    <ReactCodeInput fields={4} type="number" onComplete={verify}/>
                </div>
                <p className="desc-one">Didn't get the code? <span className="link" onClick={resendOtp}>Resend</span></p>
                <p className="time">00:59</p>
            </form>
        </div>
    )
}

export default Otp
