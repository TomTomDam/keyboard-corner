import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch } from "react-router-dom";

//Imported JSX files
import App from "./App";
import { ThemeProvider } from "styled-components";
import { Theme } from "./assets/styles/Theme";

ReactDOM.render(
  <ThemeProvider theme={Theme}>
    <Router>
      <Switch>
        <App />
      </Switch>
    </Router>
  </ThemeProvider>,
  document.querySelector("#root")
);
