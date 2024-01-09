import React from "react"

import LoginForm from "../../features/auth/components/Login/LoginForm"
import "./admin.css"
import "./login.module.scss"
const Login = () => {
  return (
    <>
      <div className="container">
        <LoginForm
          mainText="Login to your account"
          subText="Welcome back! Please enter your details."
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
                  placeholder="******"
                />
              </div>
            </>
          }
          btnText="Login"
          isOTP={false}
          isForgotPassword={false}
          isNewPassword={false}
          isAdmin={true}
          isForm={true}
        />
      </div>
    </>
  )
}

export default Login
