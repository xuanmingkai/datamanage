import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import { connect } from "react-redux";

import { alertActions } from "./Pages/AlertAction";
import { HomePage } from "./Component/HomePage";
import { LoginPage } from "./Component/LoginPage";
import { RegisterPage } from "./Component/RegisterPage";
import { PrivateRoute } from "./Pages/PrivateRoute";
import { Dashboard } from "./Component/Dashboard";

class App extends Component {
  render() {
    // const { alert } = this.props;
    return (
      // <div className="jumbotron">
      // <div>
        // <div className="container">
        //     {alert.message && (
        //       <div className={`alert ${alert.type}`}>{alert.message}</div>
        //     )}
            <Routes>
              <Route exact path="/" element={<LoginPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route element={<PrivateRoute />}>
                <Route path="/home" element={<HomePage />} />
                <Route path="/dashboard" element={<Dashboard />} />
              </Route>
            </Routes>
          // </div>
        // </div>
      // </div>
    );
  }
}

function mapState(state) {
  const { alert } = state;
  return { alert };
}

const actionCreators = {
  clearAlerts: alertActions.clear,
};

const connectedApp = connect(mapState, actionCreators)(App);
export default connectedApp;
