import React from 'react';
import { BrowserRouter as Router, Route,Routes} from 'react-router-dom';
import { GlobalStyle } from './globalStyles';
import Homepage from './components/Homepage/Homepage';
import Products from './components/Products';
import { productData , productDataTwo} from './components/Products/data';
import LoginForm from './components/Login/LoginForm';

function App() {
  return (
    <Router>
      <GlobalStyle/>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<LoginForm />} />

        <Route path="/pizza" element={<Products data={productData}/>} />
        <Route path="/desserts" element={<Products data={productDataTwo}/>} />
        <Route path="/fullmenu" element={<Products data={ productData}/>} />      
      </Routes>
    </Router>

  );
}

export default App;
