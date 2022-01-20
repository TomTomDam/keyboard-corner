import React, { useState } from "react";
import { Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ScrollToTop from "./ScrollToTop";

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

//Components
import Home from "./components/Home";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Navbar/Footer";
import About from "./components/Navbar/About";
import MyKeyboards from "./components/MyKeyboards/MyKeyboards";
import Keyboard from "./components/MyKeyboards/Keyboard";
import KeyboardEncyclopedia from "./components/KeyboardEncyclopedia/KeyboardEncyclopedia";
import Contact from "./components/Navbar/Contact";
import Login from "./components/User/Login";
import Register from "./components/User/Register";
import Users from "./components/User/Admin/Index";

const App = () => {
  return (
    <Container>
      <ScrollToTop />
      <GlobalBase />
      <GlobalLayout />
      <GlobalModules />
      <GlobalTheme />
      <Navbar />
      <Main>
        <Route exact path="/" component={Home} />
        <Route path="/keyboard-encyclopedia" component={KeyboardEncyclopedia} />
        <Route path="/my-keyboards" component={MyKeyboards} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/users" component={Users} />
        <Route path="/keyboard/:id" component={Keyboard} />
        <ToastContainer position="top-right" />
      </Main>
      <Footer />
    </Container>
  );
};

export default App;
