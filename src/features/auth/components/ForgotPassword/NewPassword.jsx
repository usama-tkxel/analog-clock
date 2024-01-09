import React from "react";
import Login from "../../Components/Login/Login";
import "./forgot.css";

const NewPassword = () => {
  return (
    <div className="container">
      <Login
        mainText="Set New Password"
        subText="Please set your new password here "
        component={
          <>
            <div>
              <label htmlFor="password" className="password_label">
                Password
              </label>
            </div>
            <div>
              <input
                className="password_input"
                type="password"
                id="password"
                name="password"
                placeholder="JM@123"
              />
            </div>
            <div>
              <label htmlFor="confirm-password" className="password_label">
                Confirm Password
              </label>
            </div>
            <div>
              <input
                className="password_input"
                type="password"
                id="confirm-password"
                name="confirm-password"
                placeholder="********"
              />
            </div>
          </>
        }
        btnText="Reset Password"
        isOTP={false}
        isAdmin={false}
        isForgotPassword={true}
        isForm={true}
        isNewPassword={true}
      />
    </div>
  );
};

export default NewPassword;
