import React, {useState} from "react";
import Button from "../Button";
import "../SignupForm/SignupForm";
import "../OTP/Otp.css";
import ReactCodeInput from "react-verification-code-input";
import { useHistory } from "react-router-dom";
import API from '../../uttils/API'

function CreatePin() {
  const history = useHistory();
  const [pin, setPin] = useState('')

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
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
      history.push("/dashboard")
  };
  return (
    <div>
      <form className="form">
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
        <Button type="submit" onClick={createPin} disabled={pin.length < 4}>
          Create Pin
        </Button>
      </form>
    </div>
  );
}

export default CreatePin;
