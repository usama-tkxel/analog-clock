import React, { Fragment } from "react";
// import Navbar from "./components/Menu/nav";
import "bootstrap/dist/css/bootstrap.min.css";
import { useSelector } from "react-redux";
import { Header } from "./components/Header/Header";
import AppRoutes from "./routes";

import "../styles/base/__globalStyles.scss";
import "../styles/base/_fonts.scss";
import "../styles/base/_typography.scss";
import "../styles/base/_variables.scss";
import "../styles/base/normalize.scss";
import AnalogClock from "./clock/main";

function App() {
  const currentUser = useSelector((state) =>
    state.auth ? state.auth.currentUser : null
  );
  const loggingStatus = useSelector((state) =>
    state.auth ? state.auth.loggedIn : false
  );

  return (
    <Fragment>
      {/* <Navbar currentUser={currentUser} loggingStatus={loggingStatus} /> */}
      <Header />
      <AnalogClock />
      {/* <AppRoutes
        currentUser={currentUser}
        loggingStatus={loggingStatus}
        role={currentUser?.role}
      /> */}
    </Fragment>
  );
}

export default App;
