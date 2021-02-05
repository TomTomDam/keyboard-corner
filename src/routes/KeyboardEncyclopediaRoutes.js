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
import Foam from "../components/KeyboardEncyclopedia/KeyboardModifications/Foam";
import SolderingGuide from "../components/KeyboardEncyclopedia/BuildingAKeyboard/SolderingGuide";
import BuildServices from "../components/KeyboardEncyclopedia/BuildingAKeyboard/BuildServices";
import GroupBuys from "../components/KeyboardEncyclopedia/TheMechanicalKeyboardCommunity/GroupBuys";
import KeyboardMeetups from "../components/KeyboardEncyclopedia/TheMechanicalKeyboardCommunity/KeyboardMeetups";

const KeyboardEncyclopediaRoutes = (props) => {
  const path = props.path;
  const routes = [
    {
      id: 1,
      path: "/introduction",
      component: Introduction,
    },
    {
      id: 2,
      path: "/layouts-and-sizes",
      component: LayoutsAndSizes,
    },
    {
      id: 3,
      path: "/plates-and-pcbs",
      component: PlatesAndPCBs,
    },
    {
      id: 4,
      path: "/keycaps",
      component: Keycaps,
    },
    {
      id: 5,
      path: "/case",
      component: Case,
    },
    {
      id: 6,
      path: "/stabilizers",
      component: Stabilizers,
    },
    {
      id: 7,
      path: "/switches",
      exact: true,
      component: Switches,
      routes: [
        {
          id: 8,
          path: "/cherry",
          component: Cherry,
        },
        {
          id: 9,
          path: "/gateron",
          component: Gateron,
        },
        {
          id: 10,
          path: "/kailh",
          component: Kailh,
        },
        {
          id: 11,
          path: "/durock-jwk",
          component: DurockJWK,
        },
      ],
    },
    {
      id: 12,
      path: "/switch-modifications",
      component: SwitchModifications,
    },
    {
      id: 13,
      path: "/foam",
      component: Foam,
    },
    {
      id: 14,
      path: "/soldering-guide",
      component: SolderingGuide,
    },
    {
      id: 15,
      path: "/build-services",
      component: BuildServices,
    },
    {
      id: 16,
      path: "/group-buys",
      component: GroupBuys,
    },
    {
      id: 17,
      path: "/keyboard-meetups",
      component: KeyboardMeetups,
    },
    {
      id: 18,
      path: "/custom-cables",
      component: CustomCables,
    },
  ];

  // var switchesRoute;
  // var allRoutes;
  // routes.map((route) => {
  //   if (route.path === "/switches" || route.id === 7) {
  //     switchesRoute = (
  //       <Route
  //         exact={route.exact}
  //         path={`${path}${routes.find((x) => x.path === "/switches").path}`}
  //         key={route.id}
  //         component={routes.find((x) => x.path === "/switches").component}
  //       />
  //     );
  //   allRoutes = (
  //     <Route
  //       path={`${path}${route.path}`}
  //       key={route.id}
  //       component={route.component}
  //     />
  //   );
  // }});

  return (
    <>
      <Route
        path={`${path}/introduction`}
        component={() => <Introduction path={path} />}
      />
      <Route path={`${path}/layouts-and-sizes`} component={LayoutsAndSizes} />
      <Route path={`${path}/plates-and-pcbs`} component={() => <PlatesAndPCBs path={path} />} />
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
      <Route path={`${path}/foam`} component={Foam} />
      <Route path={`${path}/soldering-guide`} component={SolderingGuide} />
      <Route path={`${path}/build-services`} component={BuildServices} />
      <Route path={`${path}/group-buys`} component={GroupBuys} />
      <Route path={`${path}/keyboard-meetups`} component={KeyboardMeetups} />
      <Route path={`${path}/custom-cables`} component={CustomCables} />
    </>
  );
};

export default KeyboardEncyclopediaRoutes;
