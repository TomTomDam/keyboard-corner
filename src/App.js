import React from "react";
import { BrowserRouter as Route, Switch } from "react-router-dom";

import "./App.css";

//JSX files
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./components/About";
import MyKeyboards from "./components/MyKeyboards";
import KeyboardEncyclopedia from "./components/KeyboardEncyclopedia/KeyboardEncyclopedia";
import KeyboardEncyclopediaRoutes from "./routes/KeyboardEncyclopediaRoutes";

class App extends React.Component {
  state = {
    keyboards: [
      {
        id: 1,
        title: "Space65 CV - Black Gold",
        switches: "Holy Panda - Krytox 203g0, 105 on springs",
        plate: "Carbon  fiber",
        keycaps: "ePBT Kuro Shiro",
        mods: "Case foam",
      },
      {
        id: 2,
        title: "Primus - White and Cyan",
        switches:
          "Original Aspiration - Krytox 205g0, 105 on springs, white Deskey switch films",
        plate: "Polycarbonate",
        keycaps: "KAT Mizu",
        mods: "N/A",
      },
    ],
  };

  render() {
    return (
      <div className="container-fluid text-center">
        <Navbar />
        <main className="main pb-2">
          <Switch>
            <Route
              exact
              path="/"
              render={(props) => (
                <React.Fragment>
                  <Home />
                </React.Fragment>
              )}
            />
            <Route
              exact
              path="/keyboard-encyclopedia"
              component={KeyboardEncyclopedia}
            />
            {KeyboardEncyclopediaRoutes}
            <Route path="/mykeyboards" component={MyKeyboards} />
            <Route path="/about" component={About} />
          </Switch>
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
