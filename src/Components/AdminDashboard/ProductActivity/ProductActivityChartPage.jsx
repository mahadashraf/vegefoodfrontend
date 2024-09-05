// src/Components/AdminDashboard/ProductActivityChartPage.jsx

import React, { useState, useEffect } from 'react';

import ProductActivityChart from './ProductActivityChart';




function ProductActivityChartPage() {
  const [activityData, setActivityData] = useState(() => {
    const savedData = localStorage.getItem('activityData');
    return savedData ? JSON.parse(savedData) : {
      add: Array(7).fill(0),
      update: Array(7).fill(0),
      hide: Array(7).fill(0),
     
    };
  });

 



  useEffect(() => {
    localStorage.setItem('activityData', JSON.stringify(activityData));
  }, [activityData]);



 
  
  return (
    <div>
   
     
     
      <ProductActivityChart activityData={activityData} />
    </div>
  );
}

export default ProductActivityChartPage;
