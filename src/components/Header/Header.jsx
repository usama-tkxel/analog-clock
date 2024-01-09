import { Button } from "../general/Button/Button";
import styles from "./Header.module.scss";

export const Header = () => {
  return (
    <header>
      <div className="main-container">
        <div className={styles.header_wrapper}>
          <div className="d-flex align-items-center">
            <div className={styles.jm_logo}>
              <img src="../../src/assets/images/JMLogo.svg" alt="" />
            </div>
            <span className={styles.jm_text}>Header</span>
          </div>
          <div className={styles.header_menu}>
            <ul className="d-flex">
              <li>Option 1</li>
              <li>Option 2</li>
              <li>Option 3</li>
              {/* <li><HeaderDropdown /></li> */}
              {/* <li><HeaderDropdown /></li> */}
              <li>Option 4</li>
            </ul>
            <div className="header_btn">
              Right menu
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

// import React from "react";
// import JmLogo from "../../assets/JMLogo.svg";
// import "./header.css";
// const Header = () => {
//   return (
//     <>
//       <div className="grid-container">
//         <div className="nav-item">
//           <div className="logo-pos">
//             <img src={JmLogo} alt="juno montera logo" />
//             <p className="jm-txt">JM</p>
//           </div>
//           <div className="nav-option">
//             <button className="nav-btn">Option 1</button>
//             <button className="nav-btn">Option 2</button>
//             <button className="nav-btn">Option 3</button>
//             <button className="nav-btn">Option 4</button>
//           </div>
//         </div>
//         <div className="login-btn-pos">
//           <button className="login-btn">Login</button>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Header;
