import { useEffect, useRef } from 'react';
import * as echarts from 'echarts';

function ProductActivityChart({ activityData }) {
  const chartRef = useRef(null);

  useEffect(() => {
    if (!chartRef.current) return;

    const chartDom = chartRef.current;
    const chartInstance = echarts.init(chartDom);

    chartInstance.setOption({
      title: {
        text: 'Product Activity by Day of Week',
      },
      tooltip: {
        trigger: 'axis',
      },
      legend: {
        data: ['Add', 'Update', 'Hide'],
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true,
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: activityData.days,
      },
      yAxis: {
        type: 'value',
        name: 'Quantity',
        axisLabel: {
          formatter: '{value}'
        }
      },
      series: [
        {
          name: 'Add',
          type: 'line',
          data: activityData.add,
        },
        {
          name: 'Update',
          type: 'line',
          data: activityData.update,
        },
        {
          name: 'Hide',
          type: 'line',
          data: activityData.hide,
        },
      ],
    });

    return () => {
      chartInstance.dispose();
    };
  }, [activityData]);

  return <div ref={chartRef} style={{ width: '900px', height: '400px' }}></div>;
}

export default ProductActivityChart;
