import React, {useState} from "react";
import Button from "../Button";
import "../SignupForm/SignupForm";
import "../OTP/Otp.css";
import ReactCodeInput from "react-verification-code-input";
import { useHistory } from "react-router-dom";
import API from '../../uttils/API'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


toast.configure()

function CreatePin() {
  const history = useHistory();
  const notify = () => toast.success("Pin created Successfully", {position: toast.POSITION.TOP_RIGHT})
  const [pin, setPin] = useState('')
  const [isButtonLoading, setIsButtonLoading] = useState(false);

  const createPin = async (event) => {
    event.preventDefault()
    const token = localStorage.getItem("Logintoken");
    await API
      .post(
        "/wallet/create-pin",
        { pin },
        {
          headers: {
            common: {
              Authorization: `Bearer ${token}`,
            },
          },
        }
      )
      .then((response) => {
        const userPin = response.data.data
        console.log(userPin)
        if(response.data.status === "Success") {
          notify()
                setTimeout(() => {
                  history.push("/dashboard")
                  }, 2000);
        }
      })
      .catch((error) => {
        toast.error(error.response.data.message, {position: toast.POSITION.TOP_RIGHT})
      });
  };
  return (
    <div>
      <form className="form" onSubmit={createPin}>
        <h3 className="otpTitle">
          Kindly create your <br></br>
          transaction Pin
        </h3>
        <div className="otpInput">
          <ReactCodeInput
            fields={4}
            type="number"
            autoFocus= {true}
            onChange={setPin}
            value={pin}
            />

        </div>
        <Button children="Create Pin" type="submit"  disabled={pin.length < 4} onClick={() => {
        setIsButtonLoading(true)
        setTimeout(() => {
          setIsButtonLoading(false)
        }, 1700)}} isLoading={isButtonLoading}/>
        
      </form>
    </div>
  );
}

export default CreatePin;
