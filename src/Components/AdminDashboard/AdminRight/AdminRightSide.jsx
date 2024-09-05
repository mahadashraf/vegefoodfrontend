import React, { useEffect, useState } from 'react';
import ReactECharts from 'echarts-for-react';
import axios from 'axios';
import ProductActivityChartPage from '../ProductActivity/ProductActivityChartPage';
import "./AdminRight.css"




const AdminRightSide = () => {
  const [stackedBarData, setStackedBarData] = useState({
    days: [],
    categories: {
      Fruits: [],
      Vegetables: [],
      Juice: []
    }
  });

  const [pieData, setPieData] = useState([]);

  useEffect(() => {
    // Fetch products by category and day for the bar chart
    axios.get('http://localhost:5100/getProductsByCategoryAndDay')
      .then(response => {
        console.log('Fetched Bar Chart Data:', response.data); // Log the response data
        const days = response.data.map(item => item.day);
        const categories = {
          Fruits: response.data.map(item => item.categories.Fruits || 0),
          Vegetables: response.data.map(item => item.categories.Vegetables || 0),
          Juice: response.data.map(item => item.categories.Juice || 0)
        };
        setStackedBarData({ days, categories });
      })
      .catch(error => {
        console.error('Error fetching category and day data:', error);
      });

    // Fetch data for the pie chart
    axios.get('http://localhost:5100/getCategoryCounts')
      .then(response => {
        console.log('Fetched Pie Chart Data:', response.data); // Log the response data
        setPieData(response.data);
      })
      .catch(error => {
        console.error('Error fetching pie chart data:', error);
      });
  }, []);

  const optionBarChart = {
    title: {
      text: 'Products Added by Day of the Week and Category',
      left: 'center'
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    legend: {
      top: 'bottom',
      data: ['Fruits', 'Vegetables', 'Juice']
    },
    xAxis: {
      type: 'category',
      data: stackedBarData.days
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        name: 'Fruits',
        type: 'bar',
        stack: 'total',
        data: stackedBarData.categories.Fruits
      },
      {
        name: 'Vegetables',
        type: 'bar',
        stack: 'total',
        data: stackedBarData.categories.Vegetables
      },
      {
        name: 'Juice',
        type: 'bar',
        stack: 'total',
        data: stackedBarData.categories.Juice
      }
    ]
  };

  const optionPieChart = {
    title: {
      text: 'Product Categories',
      left: 'center'
    },
    tooltip: {
      trigger: 'item'
    },
    legend: {
      top: 'bottom'
    },
    series: [
      {
        name: 'Category',
        type: 'pie',
        radius: '50%',
        data: pieData,
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  };

  return (
    <div className='admin-blog-container'>
      <div className="adminblogg-content">
      <div className='long-containerr'>
        <ReactECharts option={optionBarChart} style={{ height: '500px', width: '600px' }} />
      </div>
      <div className='long-containerr'>
        <ReactECharts option={optionPieChart} style={{ height: '400px', width:"600px" }} />
      </div>
      <div className='long-containerr'>
        <ProductActivityChartPage />
      </div>
      </div>
    </div>
  );
};

export default AdminRightSide;
