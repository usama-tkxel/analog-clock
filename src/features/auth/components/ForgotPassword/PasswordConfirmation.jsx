import React from "react";
import Login from "../../Components/Login/Login";
import "./forgot.css";

const PasswordConfirmation = () => {
  return (
    <div className="container">
      <Login
        mainText=" Password Rest"
        subText="Your password has been successfully reset. Click below to login. "
        btnText="Continue"
        isOTP={false}
        isAdmin={false}
        isForgotPassword={true}
        isNewPassword={true}
        isForm={true}
      />
    </div>
  );
};

export default PasswordConfirmation;
