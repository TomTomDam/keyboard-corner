import React from "react";
import { BrowserRouter as Route } from "react-router-dom";
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

function KeyboardEncyclopediaRoutes() {
  return (
    <React.Fragment>
      <Route
        path="/keyboard-encyclopedia/introduction"
        component={Introduction}
      />
      <Route
        path="/keyboard-encyclopedia/layouts-and-sizes"
        component={LayoutsAndSizes}
      />
      <Route path="/keyboard-encyclopedia/switches" component={Switches} />
      <Route
        path="/keyboard-encyclopedia/plates-and-pcbs"
        component={PlatesAndPCBs}
      />
      <Route path="/keyboard-encyclopedia/keycaps" component={Keycaps} />
      <Route
        path="/keyboard-encyclopedia/stabilizers"
        component={Stabilizers}
      />
      <Route path="/keyboard-encyclopedia/switches/cherry" component={Cherry} />
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
    </React.Fragment>
  );
}

export default KeyboardEncyclopediaRoutes;
