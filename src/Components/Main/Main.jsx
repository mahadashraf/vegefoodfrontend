import React from 'react';
import Category from '../Category';
import Deal from '../Deal';
import Packages from '../Packages';
import Partners from '../Partners';
import Products from '../Products';
import Subscribe from '../Subscribe';
import Testimony from '../Testtimony';
import Home from '../Home';

export const Main = () => {
  return (
    <div>
      <div>
        <Home />
        <Packages />
        <Products />
        <Category />
        <Deal />
        <Testimony />

        {/* Divider Line */}
        <div style={{
          width: '100%',
          height: '2px',
          backgroundColor: '#ccc', // Light grey color for the line
          margin: '20px 0' // Adjust the margin as needed
        }} />

        <Partners />
        <Subscribe background="bg-light" />
      </div>
    </div>
  );
};
