import React from "react";
import Login from "../../Components/Login/Login";
import "./forgot.css";

const ForgotPasswordScreen = () => {
  return (
    <div className="container">
      <Login
        mainText="Forgot Password"
        subText="No worries, we’ll send you instructions."
        component={
          <>
            <div>
              <label htmlFor="email" className="email_label">
                Email
              </label>
            </div>
            <div>
              <input
                className="email_input"
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
              />
            </div>
          </>
        }
        btnText="Reset Password"
        isOTP={false}
        isAdmin={false}
        isForgotPassword={true}
        isNewPassword={false}
        isForm={true}
      />
    </div>
  );
};

export default ForgotPasswordScreen;
