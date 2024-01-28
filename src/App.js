import React from 'react';
import UmNavBar from './components/pages/UmNavBar';
import HomePage from './components/pages/HomePage';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
// import ProductsPage from './components/pages/ProductsPage';
import ViewAllProducts from './components/pages/ViewAllProducts';


const App = () => {
  return (
    <Router>
      <div style={{ position: 'relative' }}>

        <UmNavBar />
      </div>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/products' element={<ViewAllProducts />} />
        {/* <Route path='/products' element={<ProductsPage />} /> */}

      </Routes>
    </Router>
  );
};

export default App;
