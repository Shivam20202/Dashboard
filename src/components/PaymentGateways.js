import React from 'react';
import { Card, Box, Typography, Grid, Button } from '@mui/material';
import { ReactComponent as PayPalLogo } from '../assets/paypal-logo.svg'; 
import CreditCardIcon from '@mui/icons-material/CreditCard';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';

const PaymentGateways = () => {
  // Payment gateway data
  const gateways = [
    {
      name: 'PayPal',
      description: 'Fast and secure payments',
      color: '#0070BA',
      icon: <PayPalLogo style={{ width: '50px', height: '50px' }} />, // SVG for PayPal logo
    },
    {
      name: 'Credit Card',
      description: 'Widely accepted globally',
      color: '#F57C00',
      icon: <CreditCardIcon style={{ fontSize: '3rem', color: '#F57C00' }} />,
    },
    {
      name: 'Wallet',
      description: 'Easy mobile payments',
      color: '#43A047',
      icon: <AccountBalanceWalletIcon style={{ fontSize: '3rem', color: '#43A047' }} />,
    },
  ];

  return (
    <Card
      sx={{
        padding: '2rem 1.5rem',
        borderRadius: '1rem',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between', // Distributes space between content and button
        position: 'relative',
      }}
    >
      <Typography
        variant="h6"
        fontWeight="bold"
        gutterBottom
        textAlign="center"
        sx={{ marginBottom: '1.5rem' }}
      >
        Payment Gateways
      </Typography>
      <Grid
        container
        spacing={3}
        sx={{
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {gateways.map((gateway, index) => (
          <Grid
            item
            xs={12}
            sm={4}
            key={index}
            sx={{
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <Box
              sx={{
                textAlign: 'center',
                padding: '1.5rem',
                border: '1px solid #ddd',
                borderRadius: '1rem',
                backgroundColor: '#f9f9f9',
                '&:hover': {
                  backgroundColor: '#f0f0f0',
                  transform: 'scale(1.05)',
                  transition: '0.3s ease-in-out',
                },
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                minWidth: '150px',
              }}
            >
              <Box
                sx={{
                  marginBottom: '0.8rem',
                }}
              >
                {gateway.icon}
              </Box>
              <Typography
                variant="body1"
                fontWeight="bold"
                gutterBottom
                color="text.primary"
              >
                {gateway.name}
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                textAlign="center"
              >
                {gateway.description}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
      <Box
        sx={{
          marginTop: '2rem',
          textAlign: 'center',
        }}
      >
        <Button
          variant="contained"
          color="primary"
          sx={{
            padding: '0.75rem 1.5rem',
            fontWeight: 'bold',
            borderRadius: '2rem',
            backgroundColor: '#007BFF',
            '&:hover': {
              backgroundColor: '#0056b3',
            },
          }}
        >
          View All Transactions
        </Button>
      </Box>
    </Card>
  );
};

export default PaymentGateways;
