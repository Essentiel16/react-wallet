import React, { useState } from "react";
import eye from '../../assets/eye-off.svg'
import API from '../../uttils/API'
import Button from "../Button";
import Input from "../Input"
import "./SignupForm.css";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

function SignupForm() {
  let history = useHistory();
  const { register, handleSubmit,formState: { isDirty, isValid } } = useForm({
    criteriaMode: "all",
    mode: "all",
  });
  const [passwordtype, setPasswordType] = useState(false);

  const passwordVisibility = () => {
    setPasswordType(passwordtype ? "text" : "password");
    setPasswordType(!passwordtype);
  };

  const onSubmit = async (data) => {
    await API
      .post("/signup", data)
      .then((response) => {
        console.log(response.data);
        const { confirmation_token, email } = response.data.data;
        localStorage.setItem(
          "user-detail",
          JSON.stringify({ token: confirmation_token, email: email })
        );
      })
      .catch((error) => {
        console.log(error);
      });
    history.push("/otp");
  };

  return (
    <div>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <div className="nameGroup">
          <Input
            type="text"
            label="First Name"
            placeholder="Kingsley"
            name="firstname"
            {...register("firstName", {required: true})}
          />
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
        <Button disabled={!isDirty || !isValid}>Create Account</Button>
        <p className="desc">
          Already have an account? <span className="link">Sign in</span>
        </p>

      </form>
    </div>
  );
}

export default SignupForm;
