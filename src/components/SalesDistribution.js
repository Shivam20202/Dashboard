import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Card, Typography, Grid, Box } from '@mui/material';

const theme = createTheme({
  typography: {
    h6: {
      color: '#333', // Dark gray for headings
    },
    body2: {
      color: '#555', // Medium gray for body text
    },
  },
});

const SalesDistribution = () => {
  return (
    <ThemeProvider theme={theme}>
      <Card
        sx={{
          padding: '1.5rem',
          borderRadius: '1rem',
          position: 'relative',
          overflow: 'hidden',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          '&:hover': {
            transform: 'scale(1.03)',
            boxShadow: '0 8px 20px rgba(0, 0, 0, 0.2)',
          },
        }}
      >
        <Typography
          variant="h6"
          gutterBottom
          sx={{
            fontWeight: 'bold',
            '&:hover': { color: '#1E88E5' }, // Blue on hover
          }}
        >
          Sales Distribution
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={6} sm={3}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 'bold',
                '&:hover': { color: '#FF5722' }, // Orange on hover
              }}
            >
              $34,343
            </Typography>
            <Typography
              variant="body2"
              sx={{
                '&:hover': { color: '#388E3C' }, // Dark green on hover
              }}
            >
              Total Sales
            </Typography>
          </Grid>
        </Grid>
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '100%',
            background: 'linear-gradient(270deg, #eceff1, #e0f7fa)', // Softer gradient for readability
            animation: 'moveBackground 6s linear infinite',
            opacity: 0.2,
            zIndex: -1,
          }}
        />
        <style>
          {`
          @keyframes moveBackground {
            0% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
            100% {
              background-position: 0% 50%;
            }
          }
          `}
        </style>
      </Card>
    </ThemeProvider>
  );
};

export default SalesDistribution;
