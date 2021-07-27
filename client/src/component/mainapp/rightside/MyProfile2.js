import React from "react";
import ViewPatientProfile from "./ViewPatientProfile";
import EditPatientProfile from "./EditPatientProfile";
import { useRouteMatch, Switch, Route } from "react-router-dom";
import { useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import { dataContext } from "../../../App";

const MyProfile2 = () => {
  const { path } = useRouteMatch();
  const data = useContext(dataContext);
  const dispatch = data.dispatch;
  const userId = data.states.userId;
  const history = useHistory();
  useEffect(() => {
    if (Object.keys(data.states).length === 0) {
      console.log(Object.keys(data.states).length === 0);
      const getData = async () => {
        // Please change the localhose number according to your server port number
        const response = await fetch("/api/session", {
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        });
        const message = await response.json();
        if (message.error !== "Not Authenticated") {
          dispatch({ type: "PUSHPATIENTID", payload: message });
        } else {
          history.push("/");
        }
      };
      getData();
    }
  }, []);
  return (
    <div className="my-profile-2">
      <Switch>
        <Route path={`${path}/edit`}>
          <EditPatientProfile currentUser={userId} />
        </Route>
        <Route path={`${path}`}>
          <ViewPatientProfile currentUser={userId} />
        </Route>
      </Switch>
    </div>
  );
};

export default MyProfile2;
