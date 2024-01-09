import { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { createNotification } from "../../helpers/createNotifications";
import { setCurrentUser } from "../../features/auth/slice/authSlice";
import LoginForm from "../../features/auth/login.form";
import "./login.css";
import { login } from "../../services/apis/authService";
import {
  signInWithFacebook,
  signInWithGoogle,
} from "../../utils/firebase.utils";
import { ReactComponent as GoogleSvg } from "../../assets/svg/google.svg";
import { ReactComponent as FacebookSvg } from "../../assets/svg/facebook.svg";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const assignRole = (user) => {
    if (user.toLowerCase() == "admin") {
      return "admin";
    } else {
      return "user";
    }
  };

  const loginSuccess = (username) => {
    dispatch(
      setCurrentUser({
        name: username,
        role: assignRole(username),
        token: "112324gg12444&&&&##",
      })
    );
    createNotification("success", `Welcome ${username}!`);
    navigate(`/`);
  };

  const handleSubmit = async ({ username, password }) => {
    const loggedUser = await login({ username, password });
    if (loggedUser.username && loggedUser.password) {
      loginSuccess(loggedUser.username);
    } else {
      createNotification("error", "invalid credentials");
    }
  };

  const handleSocialLogin = async (username) => {
    if (username) {
      loginSuccess(username);
    } else {
      createNotification("error", "invalid credentials");
    }
  };

  return (
    <Fragment>
      <div className="p-5 d-flex justify-content-center align-items-center">
        <div className="w-50">
          <LoginForm onSubmit={handleSubmit} />
          <h6>Or Sign In With</h6>
          {/* <button className="bi bi-google" onClick={signInWithGoogle}>Sign In With</button> */}
          <div>
            <GoogleSvg
              className="m-2"
              onClick={async () => {
                const user = await signInWithGoogle();
                handleSocialLogin(user.additionalUserInfo.profile.name);
              }}
            />
            <FacebookSvg
              className="mt-0"
              onClick={async () => {
                // const user = await signInWithFacebook();
                // console.log('usser: ', user)
                // handleSocialLogin(user.additionalUserInfo.profile.name);
              }}
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Login;
