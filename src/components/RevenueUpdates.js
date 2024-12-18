import React from 'react';
import { Card, Typography } from '@mui/material';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', revenue: 30 },
  { name: 'Feb', revenue: 45 },
  { name: 'Mar', revenue: 80 },
  { name: 'Apr', revenue: 50 },
];

const RevenueUpdates = () => {
  return (
    <Card
      sx={{
        padding: '1.5rem',
        borderRadius: '1rem',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
      }}
    >
      <Typography
        variant="h6"
        fontWeight="bold"
        color="text.primary"
        gutterBottom
      >
        Revenue Updates
      </Typography>

      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={data}>
          <XAxis
            dataKey="name"
            axisLine={false}
            tickLine={false}
            stroke="#9E9E9E"
          />
          <YAxis axisLine={false} tickLine={false} stroke="#9E9E9E" />
          <Tooltip
            contentStyle={{
              borderRadius: '10px',
              backgroundColor: '#fff',
              border: '1px solid #ddd',
            }}
          />
          <Bar
            dataKey="revenue"
            fill="#3F51B5"
            radius={[10, 10, 0, 0]} // Rounded top corners
            barSize={20} // Increase bar thickness
          />
        </BarChart>
      </ResponsiveContainer>
    </Card>
  );
};

export default RevenueUpdates;
