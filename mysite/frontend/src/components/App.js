import React from "react";
import ReactDOM from "react-dom";

import Header from "./layout/header";

import { Provider } from "react-redux";
import store from "../store";

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Header />;
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
