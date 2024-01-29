import React, { useEffect } from 'react';
import UmNavBar from './components/pages/UmNavBar';
import HomePage from './components/pages/HomePage';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
// import ProductsPage from './components/pages/ProductsPage';
import ViewAllProducts from './components/pages/ViewAllProducts';
import store from './redux/Store';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import ProductDetails from './components/pages/ProductDetails';
import CheckoutPage from './components/pages/CheckoutPage';


const App = () => {

  ReactDOM.render(
    <Provider store={store}>
      <Router>
        <div style={{ position: 'relative' }}>

          <UmNavBar />
        </div>
        <Routes>
          <Route path="/" element={<Navigate replace to="/home" />} />
          <Route path='/home' element={<HomePage />} />
          <Route path='/products' element={<ViewAllProducts />} />
          <Route path='/productDetails' element={<ProductDetails />} />
          <Route path='/checkout' element={<CheckoutPage />} />

        </Routes>
      </Router>
    </Provider>,
    document.getElementById('root')
  );
};

export default App;
