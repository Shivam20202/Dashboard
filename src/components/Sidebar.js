import React from 'react';
import { Box, List, ListItem, ListItemIcon, ListItemText, Typography, Avatar, Divider } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import EmailIcon from '@mui/icons-material/Email';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import ChatIcon from '@mui/icons-material/Chat';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';

const Sidebar = () => {
  return (
    <Box
      sx={{
        width: 240,
        bgcolor: '#F9FAFB',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '1rem',
      }}
    >
      {/* Top Section */}
      <Box>
        {/* Logo with Catalog Name */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '1.5rem',
          }}
        >
          <Box
            sx={{
              width: '3rem',
              height: '3rem',
              bgcolor: '#1565C0',
              color: '#fff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '50%',
              fontSize: '1.5rem',
              fontWeight: 'bold',
            }}
          >
            C
          </Box>
          <Typography
            variant="h6"
            fontWeight="bold"
            sx={{ marginLeft: '0.75rem', color: '#333' }}
          >
            Catalog
          </Typography>
        </Box>

        {/* Home Section */}
        <Typography variant="h6" fontWeight="bold" gutterBottom>
          Home
        </Typography>
        <List>
          <ListItem
            button
            sx={{
              '&:hover': {
                cursor: 'pointer',
                bgcolor: 'rgba(0, 0, 0, 0.04)',
              },
            }}
          >
            <ListItemIcon>
              <ShoppingCartIcon />
            </ListItemIcon>
            <ListItemText primary="eCommerce" />
          </ListItem>
        </List>

        {/* App Section */}
        <Typography variant="h6" fontWeight="bold" gutterBottom>
          App
        </Typography>
        <List>
          {[
            { text: 'Contacts', icon: <ContactMailIcon /> },
            { text: 'Chats', icon: <ChatIcon /> },
            { text: 'Calendar', icon: <CalendarTodayIcon /> },
            { text: 'Email', icon: <EmailIcon /> },
            { text: 'Tickets', icon: <ConfirmationNumberIcon /> },
          ].map(({ text, icon }) => (
            <ListItem
              key={text}
              button
              sx={{
                '&:hover': {
                  cursor: 'pointer',
                  bgcolor: 'rgba(0, 0, 0, 0.04)',
                },
              }}
            >
              <ListItemIcon>{icon}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>

        {/* Page Section */}
        <Typography variant="h6" fontWeight="bold" gutterBottom>
          Page
        </Typography>
        <List>
          {[
            { text: 'Tree View', icon: <AccountTreeIcon /> },
            { text: 'Pricing', icon: <MonetizationOnIcon /> },
          ].map(({ text, icon }) => (
            <ListItem
              key={text}
              button
              sx={{
                '&:hover': {
                  cursor: 'pointer',
                  bgcolor: 'rgba(0, 0, 0, 0.04)',
                },
              }}
            >
              <ListItemIcon>{icon}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Box>

      {/* Bottom Section */}
      <Box>
        <Divider />
        <Box sx={{ display: 'flex', alignItems: 'center', marginTop: '1rem' }}>
          <Avatar alt="Shivam Pandey" src="/avatar.jpg" sx={{ marginRight: '0.5rem' }} />
          <Box>
            <Typography variant="body1">Shivam Pandey</Typography>
            <Typography variant="body2" color="textSecondary">
              Admin
            </Typography>
          </Box>
        </Box>
        <List>
          {[
            { text: 'Settings', icon: <SettingsIcon /> },
            { text: 'Log out', icon: <LogoutIcon /> },
          ].map(({ text, icon }) => (
            <ListItem
              key={text}
              button
              sx={{
                display: 'flex',
                alignItems: 'center',
                cursor: 'pointer',
                '&:hover': { bgcolor: 'rgba(0, 0, 0, 0.04)' },
                padding: '0.5rem',
                borderRadius: '0.5rem',
                flexDirection:'row'
              }}
            >
              <ListItemIcon>{icon}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
};

export default Sidebar;
