import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch } from "react-router-dom";

//Imported JSX files
import App from "./App";
import { ThemeProvider } from "styled-components";
import { Theme } from "./assets/styles/Theme";
import { UserProvider } from "./UserContext";

ReactDOM.render(
  <ThemeProvider theme={Theme}>
    <UserProvider>
      <Router>
        <Switch>
          <App />
        </Switch>
      </Router>
    </UserProvider>
  </ThemeProvider>,
  document.querySelector("#root")
);
