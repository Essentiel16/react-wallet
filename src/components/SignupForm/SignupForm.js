import React, { useState, useEffect } from "react";
import eye from '../../assets/eye-off.svg'
import API from '../../uttils/API'
import Button from "../Button";
import Input from "../Input"
import "./SignupForm.css";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
toast.configure()
function SignupForm() {
  let router = useHistory();
  const notify = () => toast.success("Account Successfully signed up", {position: toast.POSITION.TOP_RIGHT});

  const { register, handleSubmit,formState: { isDirty, isValid, errors } } = useForm({
    criteriaMode: "all",
    mode: "all",
  });
  const [passwordtype, setPasswordType] = useState(false);
  const [isButtonLoading, setIsButtonLoading] = useState(false);
  const [userDetail, setUserDetail] = useState('')

  const passwordVisibility = () => {
    setPasswordType(passwordtype ? "text" : "password");
    setPasswordType(!passwordtype);
  };


  useEffect(() => {
    signUp();
}, []);

  const signUp = async (data) => {
    await API
      .post("/signup", data)
      .then((response) => {
        const userRes = response.data.data
        console.log(userRes)
        setUserDetail(userRes)
        if(response.data.status === 'Success') {
          notify()
          setTimeout(() => {
            router.push("/otp");
          }, 2000);
        }
        else {
          router.push("/")
        }
        const { confirmation_token, email, first_name, last_name } = response.data.data;
        localStorage.setItem(
          "user-detail",
          JSON.stringify({ token: confirmation_token, email: email, firstName: first_name, lastName: last_name })
        );
      })
      .catch((error) => {
        toast.error(error.response.data.message, {position: toast.POSITION.TOP_RIGHT});
      });
    
  };

  return (
    <>
      <form className="form" onSubmit={handleSubmit(signUp)}>
        <div className="nameGroup">
          <Input
            type="text"
            label="First Name"
            placeholder="Kingsley"
            name="firstname"
            {...register("firstName", {required: true})}
          />
          <p>{userDetail.first_name}</p>
          <Input
            type="text"
            label="Last Name"
            placeholder="Omin"
            name="lastname"
            {...register("lastName",{required: true})}
          />
        </div>
        <div className="nameGroup">
          <Input
            type="email"
            label="Email Address"
            placeholder="kingsleyomin@gmail.com"
            name="email"
            {...register("email", {required: true})}
          />
          <Input
            type="tel"
            label="Phone Number"
            placeholder="08089928991"
            name="phone"
            {...register("phoneNumber", {required: true})}
          />
        </div>
        <div className="nameGroup">
          <Input
            type="text"
            label="Username"
            placeholder="Perish11"
            name="username"
            {...register("username", {required: true})}
          />
          <Input
            type="date"
            label="Date of Birth"
            name="dob"
            {...register("dob", {required: true})}
          />
        </div>
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
        <Button disabled={!isDirty || !isValid} onClick={() => {
        setIsButtonLoading(true)
        setTimeout(() => {
          setIsButtonLoading(false)
        }, 1700)}} isLoading={isButtonLoading}>Create Account</Button>
        <p className="desc">
          Already have an account? <span className="link">Sign in</span>
        </p>
        <ToastContainer />
      </form>
    </>
  );
}

export default SignupForm;
