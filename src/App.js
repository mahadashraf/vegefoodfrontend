import './App.css';
import { CartProvider } from './Components/Cart/CartContext.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import AppWrapper from './Components/AppWrapper/AppWrapper.jsx';
import { AdminDashboard } from './Components/AdminDashboard/AdminDashboard.jsx';
import SingleProduct from './Components/AdminDashboard/SingleProduct/SingleProduct.jsx';
import AdminUpdate from './Components/AdminDashboard/AdminUpdate/AdminUpdate.jsx';


function App() {
  return (
    <Router>
      <CartProvider>
        <div className="App">
          <Routes>
         
            <Route path="/*" element={<AppWrapper />} />
            <Route path="/admindashboard/*" element={<AdminDashboard />} />
            <Route path="/admindashboard/singleproduct/:id" element={<SingleProduct />} />
            <Route path="/admindashboard/adminupdate/:id" element={<AdminUpdate />} />

          </Routes>
        </div>
      </CartProvider>
    </Router>
  );
}

export default App;
