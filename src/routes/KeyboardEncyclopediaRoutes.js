import React from "react";
import { Route } from "react-router-dom";
import Introduction from "../components/KeyboardEncyclopedia/Index/Introduction";
import LayoutsAndSizes from "../components/KeyboardEncyclopedia/Index/LayoutsAndSizes";
import Switches from "../components/KeyboardEncyclopedia/Index/Switches";
import PlatesAndPCBs from "../components/KeyboardEncyclopedia/Index/PlatesAndPCBs";
import Keycaps from "../components/KeyboardEncyclopedia/Index/Keycaps";
import Stabilizers from "../components/KeyboardEncyclopedia/Index/Stabilizers";
import CustomCables from "../components/KeyboardEncyclopedia/Accessories/CustomCables";
import Cherry from "../components/KeyboardEncyclopedia/ListOfSwitches/Cherry";
import Gateron from "../components/KeyboardEncyclopedia/ListOfSwitches/Gateron";
import Kailh from "../components/KeyboardEncyclopedia/ListOfSwitches/Kailh";
import DurockJWK from "../components/KeyboardEncyclopedia/ListOfSwitches/DurockJWK";
import SwitchModifications from "../components/KeyboardEncyclopedia/KeyboardModifications/SwitchModifications";

function KeyboardEncyclopediaRoutes(props) {
  const path = props.path;

  return (
  <>
    <Route
      path={`${path}/introduction`}
      component={Introduction}
    />
    <Route
      path={`${path}/layouts-and-sizes`}
      component={LayoutsAndSizes}
    />
    <Route
      path={`${path}/plates-and-pcbs`}
      component={PlatesAndPCBs}
    />
    <Route path={`${path}/keycaps`} component={Keycaps} />
    <Route path={`${path}/stabilizers`} component={Stabilizers} />
    <Route exact path={`${path}/switches`} component={Switches} />
    <Route path={`${path}/switches/cherry`} component={Cherry} />
    <Route path={`${path}/switches/gateron`} component={Gateron} />
    <Route path={`${path}/switches/kailh`} component={Kailh} />
    <Route path={`${path}/switches/durock-jwk`} component={DurockJWK} />
    <Route
      path={`${path}/switch-modifications`}
      component={SwitchModifications}
    />
    <Route
      path={`${path}/custom-cables`}
      component={CustomCables}
    />
  </>
  );
}

export default KeyboardEncyclopediaRoutes;
