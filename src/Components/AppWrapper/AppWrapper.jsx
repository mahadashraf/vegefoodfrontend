import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Navbar from '../Navbar';
import Info from '../Info';
import { Main } from '../Main/Main.jsx';
import { ShopProducts } from '../ShopProducts/ShopProducts.jsx';
import { About } from '../About/About.jsx';
import { Contact } from '../Contact/Contact.jsx';
import { Blog } from '../Blog/Blog.jsx';
import { MyCart } from '../MyCart/MyCart.jsx';
import { Admin } from '../Admin/Admin.jsx';
// import AdminUpdate from '../AdminUpdate/AdminUpdate.jsx';
import { Footer } from '../Footer/Footer.jsx';

const AppWrapper = () => {
  const location = useLocation();

  // Define routes where Navbar, Info, and Footer should be visible
  const showNavAndFooter = !(
    location.pathname.startsWith('/admindashboard') ||
    location.pathname === '/adminupdate'
  );

  return (
    <div style={{ backgroundColor: location.pathname.startsWith('/admindashboard') ? 'white' : 'inherit' }}>
      {showNavAndFooter && <Info />}
      {showNavAndFooter && <Navbar />}
      
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/shop" element={<ShopProducts />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/cart" element={<MyCart />} />
        <Route path="/addform" element={<Admin />} />
        {/* <Route path="/adminupdate" element={<AdminUpdate />} /> */}
      </Routes>
      
      {showNavAndFooter && <Footer />}
    </div>
  );
}

export default AppWrapper;
