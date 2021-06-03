import React, { useState } from "react";
import Input from "../Input";
import Button from "../Button";
import eye from '../../assets/eye-off.svg'
import "../SignupForm/SignupForm";
import "./Login.css";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import API from '../../uttils/API'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


toast.configure()

function Login() {
  let history = useHistory();
  const notify = () => toast.success("Login successful", {position: toast.POSITION.TOP_RIGHT})
  const { register, handleSubmit } = useForm({
    criteriaMode: "all",
    mode: "all",
  });
  const [passwordtype, setPasswordType] = useState(false);
  const [isButtonLoading, setIsButtonLoading] = useState(false);

  const passwordVisibility = () => {
    setPasswordType(passwordtype ? "text" : "password");
    setPasswordType(!passwordtype);
  };
  const login = async (data) => {

    await API
      .post("/auth/login", data)
      .then((response) => {
        if(response.data.status === "Success") {
          notify()
                setTimeout(() => {
                  history.push("/createPin");
                  }, 2000);
        }
        const { loginToken } = response.data.data;
        localStorage.setItem("Logintoken", loginToken);
      })
      .catch((error) => {
        toast.error(error.response.data.message, {position: toast.POSITION.TOP_RIGHT})
      });
  };
  return (
    <div>
      <form className="form" onSubmit={handleSubmit(login)}>
        <Input
          type="email"
          label="Email Address"
          placeholder="kingsleyomin@gmail.com"
          name="email"
          {...register("email")}
        />
              <div className="password">
          <Input
            type={passwordtype ? "text" : "password"}
            label="Password"
            placeholder="•••••••••"
            name="password"
            {...register("password", {required: true})}
          />
          <span className="passwordIcon">
          <img onClick={passwordVisibility} src={eye} alt="eye-off" />
          </span>
        </div>
        <p className="forgotLink">Forgot Password?</p>
        <Button onClick={() => {
        setIsButtonLoading(true)
        setTimeout(() => {
          setIsButtonLoading(false)
        }, 1700)}} isLoading={isButtonLoading}>Log In</Button>
        <p className="desc">
          Don't have an account? <span className="link">Register now</span>
        </p>
      </form>
    </div>
  );
}

export default Login;
