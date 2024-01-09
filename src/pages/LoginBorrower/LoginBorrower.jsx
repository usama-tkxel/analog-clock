import React from "react";
import { Input } from "../../Components/Input/Input";
import { Header } from "../../components/Header/Header";
// import styles from './LoginBorrower.module.scss';

export const LoginBorrower = () => {
  return (
    <div>
      <Header />
      <section>
        <div className="d-flex justify-content-center align-items-center loginBox_wrapper">
          <div className="loginBox">
            <div className="text-center">
              <h1 className="mb-12">Login to your account</h1>
              <p className="mb-32 text-sm-600 color-gray500">
                Welcome back! Please enter your details.
              </p>
            </div>
            <Input
              label="Email"
              inputClass="Input mb-3"
              name="Email"
              type="Email"
              placeholder="Enter your email"
            />
            <button className="btn_w100 b-dark mb-2 text-sm-600">
              Continue
            </button>
            <div className="text-center text-sm mb-2 color-gray500">OR</div>
            <button className="btn_w100 b-white text-sm-500">
              Login as Admin
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

// import React from "react";
// import Login from "../../Components/Login/Login";
// import "./login.css";

// const LoginScreen = () => {
//   return (
//     <>
//       <div className="container">
//         <Login
//           mainText="Login to your account"
//           subText="Welcome back! Please enter your details."
//           component={
//             <>
//               <div>
//                 <label htmlFor="email" className="email_label">
//                   Email
//                 </label>
//               </div>
//               <div>
//                 <input
//                   className="email_input"
//                   type="email"
//                   id="email"
//                   name="email"
//                   placeholder="Enter your email"
//                 />
//               </div>
//             </>
//           }
//           btnText="Continue"
//           isOTP={false}
//           isAdmin={false}
//           isForgotPassword={false}
//           isNewPassword={false}
//           isForm={true}
//         />
//       </div>
//     </>
//   );
// };

// export default LoginScreen;
