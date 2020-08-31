import React from "react";
import { Route, Switch } from "react-router-dom";
import SpaceAddressComponent from "../screens/space/views/spaceAddressComponent";
import SpaceHistoryComponent from "../screens/space/views/spaceHistoryComponent";
class RoutesComponent extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Switch>
          <Route
            path="/"
            exact
            render={props => {
              return (
                <React.Fragment>
                  <SpaceHistoryComponent {...props} />
                </React.Fragment>
              );
            }}
          />
        </Switch>
        <Switch>
          <Route
            path="/spaceAddress"
            exact
            render={props => {
              return (
                <React.Fragment>
                  <SpaceAddressComponent {...props} />
                </React.Fragment>
              );
            }}
          />
        </Switch>
      </React.Fragment>
    );
  }
}

export default RoutesComponent;
