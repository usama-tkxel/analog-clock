import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import LogoImage from "../../assets/images/tkxel_logo.png";
import { logout } from "../../features/auth/slice/authSlice";
import NavAdmin from "./nav.admin";
import NavPublic from "./nav.public";

import { Link, useNavigate } from "react-router-dom";
import "./nav.css";

const Navbar = ({ currentUser, loggingStatus }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [role, setRole] = useState("user");

  const handeleLogout = () => {
    dispatch(logout());
  };

  useEffect(() => {
    if (!loggingStatus) {
      navigate("/");
    }
  }, [loggingStatus]);

  useEffect(() => {
    (async () => {
      if (currentUser) {
        setRole(currentUser.role);
      }
    })();
  }, []);
  return (
    <div className="header bg-primary text-white">
      <div className="container">
        <div className="header-content-wrapper">
          <div className="brand-logo">
            <Link to={`/`}>
              <img src={LogoImage} alt="" />
            </Link>
          </div>
          {currentUser?.role === "admin" ? (
            <NavAdmin
              currentUser={currentUser}
              loggingStatus={loggingStatus}
              handeleLogout={handeleLogout}
            />
          ) : (
            <NavPublic
              currentUser={currentUser}
              loggingStatus={loggingStatus}
              handeleLogout={handeleLogout}
            />
          )}

          {/* {loggingStatus === true && <button className='btn btn-success' onClick={handeleLogout}>
            logout
          </button>} */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
