import React from 'react';
import 'components/App/App.css';
import PageProducts from "components/pages/PageProducts/PageProducts";
import MainLayout from "components/MainLayout/MainLayout";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import PageProductForm from "components/pages/PageProductForm/PageProductForm";
import PageCart from "components/pages/PageCart/PageCart";
import PageOrders from "components/pages/PageOrders/PageOrders";
import PageOrder from "components/pages/PageOrder/PageOrder";
import PageProductImport from "components/pages/admin/PageProductImport/PageProductImport";
import {PageNotFound} from "components/pages/PageNotFound/PageNotFound";

function App() {

  return (
    <Router>
      <Switch>
        <Route path="/">
          <MainLayout>
            <Switch>
              <Route exact path="/">
                <PageProducts/>
              </Route>
              <Route exact path={["/admin/product-form/:id", '/admin/product-form']}>
                <PageProductForm/>
              </Route>
              <Route exact path="/cart">
                <PageCart />
              </Route>
              <Route exact path="/admin/orders">
                <PageOrders />
              </Route>
              <Route exact path="/admin/order/:id">
                <PageOrder />
              </Route>
              <Route exact path="/admin/products">
                <PageProductImport />
              </Route>
              <Route path="*">
                <PageNotFound />
              </Route>
            </Switch>
          </MainLayout>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
