import React from 'react';
import { Card, Typography, Box } from '@mui/material';
import ReactApexChart from 'react-apexcharts';

const YearlySales = () => {
  const chartOptions = {
    chart: {
      type: 'area',
      height: 250, // Matches the height of Sales Overview and Revenue Updates
      toolbar: {
        show: false,
      },
    },
    stroke: {
      curve: 'smooth',
      width: 3,
    },
    colors: ['#1E88E5', '#4DB6AC'],
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'light',
        type: 'vertical',
        shadeIntensity: 0.3,
        gradientToColors: ['#90CAF9', '#A5D6A7'],
        inverseColors: false,
        opacityFrom: 0.6,
        opacityTo: 0.1,
        stops: [0, 90, 100],
      },
    },
    markers: {
      size: 5,
      colors: ['#fff'],
      strokeColors: ['#1E88E5', '#4DB6AC'],
      strokeWidth: 3,
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      labels: {
        style: {
          colors: '#666',
        },
      },
    },
    yaxis: {
      labels: {
        formatter: (value) => `$${value.toLocaleString()}`,
        style: {
          colors: '#666',
        },
      },
    },
    tooltip: {
      y: {
        formatter: (value) => `$${value.toLocaleString()}`,
      },
    },
    grid: {
      borderColor: '#f1f1f1',
    },
    legend: {
      position: 'top',
      horizontalAlign: 'right',
    },
  };

  const chartSeries = [
    {
      name: '2023 Sales',
      data: [30000, 40000, 35000, 50000, 45000, 60000, 70000, 65000, 60000, 80000, 75000, 90000],
    },
    {
      name: '2022 Sales',
      data: [25000, 35000, 30000, 45000, 40000, 55000, 65000, 60000, 55000, 75000, 70000, 85000],
    },
  ];

  return (
    <Card
      sx={{
        padding: '1.5rem',
        borderRadius: '1rem',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
      }}
    >
      <Typography variant="h6" fontWeight="bold" gutterBottom>
        Yearly Sales
      </Typography>
      <Box>
        <ReactApexChart options={chartOptions} series={chartSeries} type="area" height={233} />
      </Box>
    </Card>
  );
};

export default YearlySales;
