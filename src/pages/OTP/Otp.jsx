import React, { useState } from "react";
import Login from "../../Components/Login/Login";
import Otp from "../../Components/OTP/Otp";
import { Header } from "../../components/Header/Header";

const OtpScreen = () => {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  return (
    <>
      <Header />
      <section>
        <div className="d-flex justify-content-center align-items-center loginBox_wrapper">
          <div className="loginBox">
            <div className="text-center">
              <h1 className="mb-12">Enter OTP</h1>
              <p className="mb-32 text-sm-600 color-gray500">
                A 6 digit code has been to your email.
              </p>
            </div>
            <Login
              component={
                <>
                  <Otp otp={otp} setOtp={setOtp} />
                </>
              }
              btnText="Login"
              isOTP={true}
              isForgotPassword={false}
              isNewPassword={false}
              isAdmin={false}
              isForm={true}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default OtpScreen;

{
  /* <div className="container">
  <Login
    mainText="Enter OTP"
    subText="A 6 digit code has been to your email."
    component={
      <>
        <Otp otp={otp} setOtp={setOtp} />
      </>
    }
    btnText="Login"
    isOTP={true}
    isForgotPassword={false}
    isNewPassword={false}
    isAdmin={false}
    isForm={true}
  />
</div> */
}
