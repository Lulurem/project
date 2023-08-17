import { Route, BrowserRouter, Switch } from "react-router-dom";
import Category from "./routes/Category";
import CashBook from "./routes/CashBook";

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/:setting_category">
          <Category />
        </Route>
        <Route path="/">
          <CashBook />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
