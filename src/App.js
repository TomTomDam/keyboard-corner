import React from "react";
import { Route } from "react-router-dom";

//Stylesheets
import "./App.css";
import "./assets/styles/Base.css";
import "./assets/styles/Layout.css";
import "./assets/styles/Modules.css";
import "./assets/styles/Theme.css";

//JSX files
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./components/About";
import MyKeyboards from "./components/MyKeyboards/MyKeyboards";
import KeyboardEncyclopedia from "./components/KeyboardEncyclopedia/KeyboardEncyclopedia";
import KeyboardEncyclopediaRoutes from "./routes/KeyboardEncyclopediaRoutes";
import Contact from "./components/Contact";

export default class App extends React.Component {
  state = {
    keyboards: [
      {
        id: 1,
        image:
          "src\\assets\\images\\MyKeyboards\\Space65 ePBT Kuro Shiro 1.jpg",
        title: "Space65 CV - Black Gold",
        switches: "Massdrop Holy Panda - Krytox 203g0, 105 on springs",
        plate: "Carbon  fiber",
        keycaps: "ePBT Kuro Shiro",
        case: "Black and Gold",
        mods: "Case foam",
        layout: "65%",
        stabilizers: "Durock Clear",
        description: "",
      },
      {
        id: 2,
        image: "src\\assets\\images\\MyKeyboards\\FirstCustomKeyboard2.jpg",
        title: "KBDFans 5 Degree",
        switches: "Gateron Yellow - Krytox 205g0, 105 on springs",
        plate: "Aluminium",
        keycaps: "ePBT 9009",
        case: "Grey",
        mods: "Case foam",
        layout: "60%",
        stabilizers: "Cherry",
        description: "",
      },
      {
        id: 3,
        image:
          "src\\assets\\images\\MyKeyboards\\primus_keyboard_render_whitecyan.png",
        title: "Primus",
        switches:
          "Original Aspiration - Krytox 205g0, 105 on springs, white Deskey switch films",
        plate: "Polycarbonate",
        keycaps: "KAT Mizu",
        case: "White and Cyan, Stainless steel weight",
        mods: "N/A",
        layout: "75%",
        stabilizers: "c3Equalz Tiffany Blue",
        description: "",
      },
    ],
  };

  render() {
    return (
      <div className="container-fluid text-center">
        <Navbar />
        <main className="main pb-2">
          <Route exact path="/" component={Home} />
          <Route
            exact
            path="/keyboard-encyclopedia"
            component={KeyboardEncyclopedia}
          />
          {KeyboardEncyclopediaRoutes}
          <Route
            path="/mykeyboards"
            render={(props) => (
              <>
                <MyKeyboards keyboards={this.state.keyboards} />
              </>
            )}
          />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </main>
        <Footer />
      </div>
    );
  }
}
