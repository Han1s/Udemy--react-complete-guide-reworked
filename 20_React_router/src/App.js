import {Route, Switch}  from 'react-router-dom';
import Welcome from './pages/Welcome';
import Products from './pages/Products';
import MainHeader from './components/MainHeader';
import ProductDetail from './pages/ProductDetail';
import { Fragment } from 'react';

function App() {
  return (
    <Fragment>
      <MainHeader />
      <main>
        <Switch>
          <Route path="/welcome">
            <Welcome />
          </Route>
          <Route path="/products" exact>
            <Products />
          </Route>
          <Route path="/products/:productId">
            <ProductDetail />
          </Route>
        </Switch>
      </main>
    </Fragment>
  );
}

export default App;
