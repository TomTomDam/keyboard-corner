import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";

//JSX files
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./components/About";
import MyKeyboards from "./components/MyKeyboards";
import KeyboardEncyclopedia from "./components/KeyboardEncyclopedia/KeyboardEncyclopedia";
import Introduction from "./components/KeyboardEncyclopedia/Index/Introduction";
import LayoutsAndSizes from "./components/KeyboardEncyclopedia/Index/LayoutsAndSizes";
import Switches from "./components/KeyboardEncyclopedia/Index/Switches";
import PlatesAndPCBs from "./components/KeyboardEncyclopedia/Index/PlatesAndPCBs";
import Keycaps from "./components/KeyboardEncyclopedia/Index/Keycaps";
import Stabilizers from "./components/KeyboardEncyclopedia/Index/Stabilizers";
import CustomCables from "./components/KeyboardEncyclopedia/Accessories/CustomCables";
import Cherry from "./components/KeyboardEncyclopedia/ListOfSwitches/Cherry";
import Gateron from "./components/KeyboardEncyclopedia/ListOfSwitches/Gateron";
import Kailh from "./components/KeyboardEncyclopedia/ListOfSwitches/Kailh";
import Durock from "./components/KeyboardEncyclopedia/ListOfSwitches/Durock";
import SwitchModifications from "./components/KeyboardEncyclopedia/KeyboardModifications/SwitchModifications";

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
        <Router>
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
              <Route
                path="/keyboard-encyclopedia/introduction"
                component={Introduction}
              />
              <Route
                path="/keyboard-encyclopedia/layouts-and-sizes"
                component={LayoutsAndSizes}
              />
              <Route
                path="/keyboard-encyclopedia/switches"
                component={Switches}
              />
              <Route
                path="/keyboard-encyclopedia/plates-and-pcbs"
                component={PlatesAndPCBs}
              />
              <Route
                path="/keyboard-encyclopedia/keycaps"
                component={Keycaps}
              />
              <Route
                path="/keyboard-encyclopedia/stabilizers"
                component={Stabilizers}
              />
              <Route
                path="/keyboard-encyclopedia/switches/cherry"
                component={Cherry}
              />
              <Route
                path="/keyboard-encyclopedia/switches/gateron"
                component={Gateron}
              />
              <Route path="/keyboard-encyclopedia/kailh" component={Kailh} />
              <Route path="/keyboard-encyclopedia/durock" component={Durock} />
              <Route
                path="/keyboard-encyclopedia/switch-modifications"
                component={SwitchModifications}
              />
              <Route
                path="/keyboard-encyclopedia/custom-cables"
                component={CustomCables}
              />
              <Route path="/mykeyboards" component={MyKeyboards} />
              <Route path="/about" component={About} />
            </Switch>
          </main>
          <Footer />
        </Router>
      </div>
    );
  }
}

export default App;
