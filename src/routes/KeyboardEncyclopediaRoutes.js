import React from "react";
import { Route } from "react-router-dom";
import Introduction from "../components/KeyboardEncyclopedia/GettingStarted/Introduction";
import LayoutsAndSizes from "../components/KeyboardEncyclopedia/GettingStarted/LayoutsAndSizes";
import Switches from "../components/KeyboardEncyclopedia/GettingStarted/Switches";
import PlatesAndPCBs from "../components/KeyboardEncyclopedia/GettingStarted/PlatesAndPCBs";
import Keycaps from "../components/KeyboardEncyclopedia/GettingStarted/Keycaps";
import Case from "../components/KeyboardEncyclopedia/GettingStarted/Case";
import Stabilizers from "../components/KeyboardEncyclopedia/GettingStarted/Stabilizers";
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
      path: "/introduction",
      component: Introduction,
    },
    {
      path: "/layouts-and-sizes",
      component: LayoutsAndSizes,
    },
    {
      path: "/plates-and-pcbs",
      component: PlatesAndPCBs,
    },
    {
      path: "/keycaps",
      component: Keycaps,
    },
    {
      path: "/case",
      component: Case,
    },
    {
      path: "/stabilizers",
      component: Stabilizers,
    },
    {
      path: "/switches",
      exact: true,
      component: Switches,
      routes: [
        {
          path: "/cherry",
          component: Cherry,
        },
        {
          path: "/gateron",
          component: Gateron,
        },
        {
          path: "/kailh",
          component: Kailh,
        },
        {
          path: "/durock-jwk",
          component: DurockJWK,
        },
      ],
    },
    {
      path: "/switch-modifications",
      component: SwitchModifications,
    },
    {
      path: "/soldering-guide",
      component: SolderingGuide,
    },
    {
      path: "/build-services",
      component: BuildServices,
    },
    {
      path: "/group-buys",
      component: GroupBuys,
    },
    {
      path: "/keyboard-meetups",
      component: KeyboardMeetups,
    },
    {
      path: "/custom-cables",
      component: CustomCables,
    },
  ];

  // var switchesRoute;
  // var allRoutes;
  // routes.map((route, index) => {
  //   if (route.path === "/switches") {
  //     switchesRoute = (
  //       <Route
  //         exact={route.exact}
  //         path={`${path}${routes.find((x) => x.path === "/switches").path}`}
  //         key={index}
  //         component={routes.find((x) => x.path === "/switches").component}
  //       />
  //     );
  //   allRoutes = (
  //     <Route
  //       path={`${path}${route.path}`}
  //       key={index}
  //       component={route.component}
  //     />
  //   );
  // }});

  return (
    <>
      <Route path={`${path}/introduction`} component={() => <Introduction path={path}/>} />
      <Route path={`${path}/layouts-and-sizes`} component={LayoutsAndSizes} />
      <Route path={`${path}/plates-and-pcbs`} component={PlatesAndPCBs} />
      <Route path={`${path}/keycaps`} component={Keycaps} />
      <Route path={`${path}/case`} component={Case} />
      <Route path={`${path}/stabilizers`} component={Stabilizers} />
      <Route path={`${path}/switches/cherry`} component={Cherry} />
      <Route path={`${path}/switches/gateron`} component={Gateron} />
      <Route path={`${path}/switches/kailh`} component={Kailh} />
      <Route path={`${path}/switches/durock-jwk`} component={DurockJWK} />
      <Route exact path={`${path}/switches`} component={Switches} />
      <Route
        path={`${path}/switch-modifications`}
        component={SwitchModifications}
      />
      <Route path={`${path}/soldering-guide`} component={SolderingGuide} />
      <Route path={`${path}/build-services`} component={BuildServices} />
      <Route path={`${path}/group-buys`} component={GroupBuys} />
      <Route path={`${path}/keyboard-meetups`} component={KeyboardMeetups} />
      <Route path={`${path}/custom-cables`} component={CustomCables} />
    </>
  );
};

export default KeyboardEncyclopediaRoutes;
