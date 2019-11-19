import React, { Fragment } from "react";
import ReactDOM from "react-dom";

import Header from "./layout/header";
import Dashboard from "./dashboard/dashboard";

import { Provider } from "react-redux";
import store from "../store";
import registerForm, { RegisterForm } from "./forms/registerForm";

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Fragment>
          <div className=".container-fluid">
            <RegisterForm />
          </div>
        </Fragment>
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
