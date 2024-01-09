import React from "react";
import Login from "../../Components/Login/Login";
import "./forgot.css";

const EmailConfirmation = () => {
  return (
    <div className="container">
      <Login
        mainText="Check Your Email"
        subText="We have sent a password reset link to your email"
        isOTP={false}
        isAdmin={false}
        isForgotPassword={false}
        isNewPassword={false}
        isForm={false}
      />
    </div>
  );
};

export default EmailConfirmation;
