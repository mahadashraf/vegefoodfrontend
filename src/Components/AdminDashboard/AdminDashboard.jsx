import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import './AdminDashboard.css';
import AdminSidePanel from './AdminSidePanel/AdminSidePanel';

import UserComponent from './UserComponent/UserComponent';
import AdminRightSide from './AdminRight/AdminRightSide';
import ProductAdmin from './ProductAdmin/ProductAdmin';
import BlogAdmin from './BlogAdmin/BlogAdmin';
import AdminLogin from './AdminLogin/AdminLogin';
import SingleProduct from './SingleProduct/SingleProduct';
import AdminUpdate from './AdminUpdate/AdminUpdate';
import ProductActivityChartPage from './ProductActivity/ProductActivityChartPage';
import AdminAddForm from './AdminAddForm';
import AdminSignUp from './AdminSignUp/AdminSignUp';

export const AdminDashboard = () => {
  const location = useLocation();
  
  // Routes where the side panel should not be displayed
  const hideSidePanelRoutes = ['/admindashboard/adminlogin', '/admindashboard/singleproduct' , '/admindashboard/adminupdate', '/admindashboard/signup'];

  // Check if the current route is one of those where the side panel should be hidden
  const shouldHideSidePanel = hideSidePanelRoutes.some(route => location.pathname.includes(route));

  return (
    <div className='admindashboard'>
      {/* Conditionally render the side panel based on the current route */}
      {!shouldHideSidePanel && <AdminSidePanel />}
      <div className={`admin-right-side ${shouldHideSidePanel ? 'full-width' : ''}`}>
        <Routes>
          <Route path="/" element={<AdminRightSide />} />
          <Route path="useradmin" element={<UserComponent />} />
          <Route path="productadmin" element={<ProductAdmin />} />
          <Route path="blogadmin" element={<BlogAdmin />} />
          <Route path="adminlogin" element={<AdminLogin />} />
          <Route path="singleproduct/:id" element={<SingleProduct />} /> {/* Updated path to include product ID */}
          <Route path="addproduct" element={<AdminAddForm />} /> {/* Updated path to include product ID */}
          <Route path="adminupdate/:id" element={<AdminUpdate/>} /> {/* Updated path to include product ID */}
          <Route path="signup" element={<AdminSignUp/>} /> {/* Updated path to include product ID */}
          <Route path="productactivity" element={<ProductActivityChartPage />} /> Route for the chart page
          {/* Add other routes here */}
        </Routes>
      </div>
    </div>
  );
};

export default AdminDashboard;
