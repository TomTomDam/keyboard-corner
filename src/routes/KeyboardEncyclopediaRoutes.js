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
import SolderingGuide from "../components/KeyboardEncyclopedia/BuildingAKeyboard/SolderingGuide";
import BuildServices from "../components/KeyboardEncyclopedia/BuildingAKeyboard/BuildServices";
import GroupBuys from "../components/KeyboardEncyclopedia/TheMechanicalKeyboardCommunity/GroupBuys";
import KeyboardMeetups from "../components/KeyboardEncyclopedia/TheMechanicalKeyboardCommunity/KeyboardMeetups";

const KeyboardEncyclopediaRoutes = (props) => {
  const path = props.path;
  const routes = [
    {
      name: "introduction",
      component: Introduction,
    },
    {
      name: "layouts-and-sizes",
      component: LayoutsAndSizes,
    },
    {
      name: "plates-and-pcbs",
      component: PlatesAndPCBs,
    },
    {
      name: "keycaps",
      component: Keycaps,
    },
    {
      name: "stabilizers",
      component: Stabilizers,
    },
    {
      name: "switches",
      component: Switches,
    },
    {
      name: "switches/cherry",
      component: Cherry,
    },
    {
      name: "switches/gateron",
      component: Gateron,
    },
    {
      name: "switches/kailh",
      component: Kailh,
    },
    {
      name: "switches/durock-jwk",
      component: DurockJWK,
    },
    {
      name: "switch-modfications",
      component: SwitchModifications,
    },
    {
      name: "soldering-guide",
      component: SolderingGuide,
    },
    {
      name: "build-services",
      component: BuildServices,
    },
    {
      name: "group-buys",
      component: GroupBuys,
    },
    {
      name: "keyboard-meetups",
      component: KeyboardMeetups,
    },
    {
      name: "custom-cables",
      component: CustomCables,
    },
  ];

  return (
    <>
      {routes.map((route, index) => (
        <Route path={`${path}/${route.name}`} key={index} component={route.component} />
      ))}
    </>
  );
}

export default KeyboardEncyclopediaRoutes;
