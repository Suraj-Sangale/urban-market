import React from 'react';
import UmNavBar from './components/pages/UmNavBar';
import HomePage from './components/pages/HomePage';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import ProductsPage from './components/pages/ProductsPage';


const App = () => {
  return (
    <Router>
        <UmNavBar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/products' element={<ProductsPage />} />

      </Routes>
    </Router>
  );
};

export default App;
