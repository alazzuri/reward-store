import React from "react";
import { Route, Switch } from "react-router-dom";
import NotFoundPage from "../pages/404";
import HistoryPage from "../pages/HistoryPage";
import ProductsPage from "../pages/ProductsPage";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <ProductsPage />
      </Route>
      <Route path="/history">
        <HistoryPage />
      </Route>
      <Route path="/">
        <NotFoundPage />
      </Route>
    </Switch>
  );
};

export default Routes;
