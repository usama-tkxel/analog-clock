import React from "react"
import "./login.css"
const LoginForm = (props) => {
  return (
    <>
      <div>
        <div className="container-item">
          <p className="login-text">{props.mainText}</p>
          <p className="login-sub-text">{props.subText}</p>
        </div>
        {props.isForm && props.component}
        {props.isForm && props.isAdmin && (
          <p className="forgot-password">Forgot password</p>
        )}
        <div className="login-btns">
          {props.isForm && (
            <button className="btn_w100 b-dark mb-32">{props.btnText}</button>
          )}
          {!props.isOTP && !props.isForgotPassword && props.isForm && (
            <>
              <p className="login-sub-text">OR</p>
              <button className="btn-admin">
                Login as {props.isAdmin ? "Borrower" : "Admin"}
              </button>
            </>
          )}
          {props.isOTP || !props.isForm ? (
            <p className="login-sub-text">
              Didn’t the receive the {props.isOTP ? "OTP" : "Email"} ?{" "}
              <span className="sub-text">Click to resend.</span>
            </p>
          ) : (
            props.isForgotPassword &&
            !props.isNewPassword && (
              <p className="login-sub-text sub-text">Back to log in</p>
            )
          )}
        </div>
      </div>
    </>
  )
}

export default LoginForm
