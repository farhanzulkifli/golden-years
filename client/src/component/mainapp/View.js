import React from "react";
import { BrowserRouter as Switch, Route } from "react-router-dom";
import MyPerformance from "./rightside/MyPerformance";
import FAQs from "./rightside/faqs";
import { useRouteMatch } from "react-router-dom";
import TestLibrary from "../fitnessTest/TestLibrary";
import MyProfile from "./rightside/myProfile";

const View = () => {
  let { path } = useRouteMatch();

  return (
    <div className="App">
      <h1>This is View</h1>
      {/* <TestLibrary /> */}
      <Switch>
        <Route exact path={`${path}`}>
          <MyPerformance />
        </Route>

        <Route path={`${path}/faqs`}>
          <FAQs />
        </Route>

        <Route path={`${path}/myprofile`}>
          <MyProfile />
        </Route>

        <Route path={`${path}/tests`}>
          <TestLibrary />
        </Route>
        {/* <Redirect to = "/404"/> */}
      </Switch>
    </div>
  );
};

export default View;
