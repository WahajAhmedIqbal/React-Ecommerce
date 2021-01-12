import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Checkout from "../components/layout/checkout";
import { HomeContainer, PageNotFound } from "../containers";

const index = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomeContainer} />
      <Route exact path="/home/checkout" component={Checkout} />
      <Route exact path="/404" component={PageNotFound} />
      <Route exact path="/*" component={() => <Redirect to="/404" />} />
    </Switch>
  );
};

export default index;
