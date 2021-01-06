import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

//JSX files
import Home from "./components/Home";
import Header from "./components/Header";
import About from "./components/About";
import Keyboards from "./components/Keyboards";

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
      <Router>
        <div className="container">
          <Header />
          <Route
            exact
            path="/"
            render={(props) => (
              <React.Fragment>
                <Home />
              </React.Fragment>
            )}
          />
          <Route path="/keyboards" component={Keyboards} />
          <Route path="/about" component={About} />
        </div>
      </Router>
    );
  }
}

export default App;
