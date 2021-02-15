import React from "react";
import { Route } from "react-router-dom";

//Stylesheets
import "./App.css";
import "./assets/styles/Base";
import "./assets/styles/Layout";
import "./assets/styles/Modules";
import "./assets/styles/Theme";
import { GlobalBase } from "./assets/styles/Base";
import { GlobalLayout, Main, Container } from "./assets/styles/Layout";
import { GlobalModules } from "./assets/styles/Modules";
import { GlobalTheme } from "./assets/styles/Theme";

//JSX files
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./components/About";
import MyKeyboards from "./components/MyKeyboards/MyKeyboards";
import KeyboardEncyclopedia from "./components/KeyboardEncyclopedia/KeyboardEncyclopedia";
import Contact from "./components/Contact";
import Login from "./components/User/Login";
import Register from "./components/User/Register";

export default class App extends React.Component {
  state = {};

  render() {
    return (
      <Container>
        <GlobalBase />
        <GlobalLayout />
        <GlobalModules />
        <GlobalTheme />
        <Navbar />
        <Main>
          <Route exact path="/" component={Home} />
          <Route
            path="/keyboard-encyclopedia"
            component={KeyboardEncyclopedia}
          />
          <Route path="/my-keyboards" component={MyKeyboards}></Route>
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/login" component={Login}></Route>
          <Route path="/register" component={Register}></Route>
        </Main>
        <Footer />
      </Container>
    );
  }
}
