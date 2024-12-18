import React from 'react';
import { Card, Typography, Box } from '@mui/material';
import ReactApexChart from 'react-apexcharts';

const SalesOverview = () => {
  // ApexCharts Configuration
  const chartOptions = {
    chart: {
      type: 'donut',
    },
    labels: ['Profit', 'Expense'],
    colors: ['#1E88E5', '#4DB6AC'], // Blue and Sky Green colors
    legend: {
      show: false, // Hide default legend
    },
    dataLabels: {
      enabled: false, // Disable default data labels
    },
    tooltip: {
      y: {
        formatter: (val) => `$${val.toLocaleString()}`,
      },
    },
    plotOptions: {
      pie: {
        donut: {
          labels: {
            show: true,
            name: {
              show: false, // Hides label name (e.g., Profit, Expense)
            },
            value: {
              show: true,
              fontSize: '24px',
              fontWeight: 700,
              color: '#333',
              formatter: (val) => `$${val}`, // Dynamic value display
            },
            total: {
              show: true,
              label: 'Total',
              fontSize: '16px',
              fontWeight: 500,
              color: '#666',
              formatter: () =>
                `$${chartSeries.reduce((acc, cur) => acc + cur, 0)}`, // Total sales amount
            },
          },
        },
      },
    },
  };

  const chartSeries = [500, 450]; // Values for Profit and Expense

  return (
    <Card
      sx={{
        padding: '1.5rem',
        borderRadius: '1rem',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
      }}
    >
      {/* Heading */}
      <Typography
        variant="h6"
        fontWeight="bold"
        color="text.primary"
        gutterBottom
      >
        Sales Overview
      </Typography>

      {/* Content Section */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        {/* Chart Section */}
        <Box sx={{ width: '60%' }}>
          <ReactApexChart
            options={chartOptions}
            series={chartSeries}
            type="donut"
            height={250}
          />
        </Box>

        {/* Data Points Section */}
        <Box sx={{ width: '35%' }}>
          <Box sx={{ marginBottom: '1rem' }}>
            <Typography
              variant="body1"
              color="text.primary"
              sx={{ display: 'flex', alignItems: 'center' }}
            >
              <Box
                sx={{
                  width: '12px',
                  height: '12px',
                  backgroundColor: '#1E88E5', // Blue for Profit
                  borderRadius: '50%',
                  marginRight: '0.5rem',
                }}
              />
              Profit
            </Typography>
            <Typography variant="h6" fontWeight="bold" color="text.primary">
              $500
            </Typography>
          </Box>

          <Box>
            <Typography
              variant="body1"
              color="text.primary"
              sx={{ display: 'flex', alignItems: 'center' }}
            >
              <Box
                sx={{
                  width: '12px',
                  height: '12px',
                  backgroundColor: '#4DB6AC', // Sky Green for Expense
                  borderRadius: '50%',
                  marginRight: '0.5rem',
                }}
              />
              Expense
            </Typography>
            <Typography variant="h6" fontWeight="bold" color="text.primary">
              $450
            </Typography>
          </Box>
        </Box>
      </Box>
    </Card>
  );
};

export default SalesOverview;
