import React from "react";
import "./App.css";
// import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router } from "react-router-dom";
import RoutesComponent from "./helper/routes";
import { Provider } from "react-redux";
import { store } from "./store/store";
import HeaderComponent from "../src/screens/header/views/headerComponent";
class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <HeaderComponent />
          <RoutesComponent />
        </Router>
      </Provider>
    );
  }
}

export default App;
