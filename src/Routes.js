import React from "react";
import { Route, Switch } from "react-router-dom";
import MoviesPage from "./app/pages/MoviesPage";
import RegisterPage from "./app/pages/RegisterPage";

export default function Routes() {
  return (
    <Switch>
      <Route path="/register">
        <RegisterPage />
      </Route>

      <Route exact path="/movies">
        <MoviesPage />
      </Route>
    </Switch>
  );
}
