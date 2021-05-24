import React from 'react'
import '../SignupForm/SignupForm'
import './Otp.css'
import { useHistory } from "react-router-dom"
import axios from 'axios'
import ReactCodeInput from 'react-verification-code-input';

function Otp() {
    let history = useHistory();
   
    const verify = async(data) => {
        const {token} = JSON.parse(localStorage.getItem('user-detail'))
        let otp = Object.entries(data)
        .map((arr) => arr[1])
        .join('');
        await axios.post('/auth/confirm-email', {otp}, {
            headers: {
                common: {
                    Authorization: `Bearer ${token}`
                }
            }
        })
        .then((response) => {
            console.log(response.data)
            history.push("/login")
        })
        .catch((error) => {
            console.log(error)
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
                <p className="desc-one">Didn't get the code? <span className="link">Resend</span></p>
                <p className="time">00:59</p>
            </form>
        </div>
    )
}

export default Otp
