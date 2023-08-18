import { Route, BrowserRouter, Switch } from "react-router-dom";
import Category from "./routes/Setting";
import CashBook from "./routes/CashBook";

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/:setting">
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
