import { FC } from "react";
import { Route, Switch, Redirect } from "react-router";
import { HomeContainer } from "./pages/Home/HomeContainer";

export const Routes: FC = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomeContainer} />
      <Redirect to="/" />
    </Switch>
  );
};
