import React from 'react';
import { AppBar, Toolbar, Box, IconButton, InputBase, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SettingsIcon from '@mui/icons-material/Settings';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

const Navbar = () => {
  return (
    <AppBar
      position="static"
      sx={{
        bgcolor: '#fff',
        color: '#000',
        boxShadow: 'none',
        padding: '0.5rem 1rem',
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        {/* Left Section: Title and Search */}
        <Box display="flex" alignItems="center" gap="1rem">
          <Typography
            variant="h6"
            sx={{
              fontWeight: 'bold',
              color: '#2F2F2F',
            }}
          >
            Dashboard
          </Typography>
          <Box display="flex" alignItems="center" gap="0.5rem" sx={{ bgcolor: '#f1f3f5', padding: '0.25rem 1rem', borderRadius: '8px' }}>
            <SearchIcon sx={{ color: '#757575' }} />
            <InputBase placeholder="Search..." fullWidth />
          </Box>
        </Box>

        {/* Right Section: Icons */}
        <Box display="flex" alignItems="center" gap="1rem">
          <IconButton>
            <MailOutlineIcon sx={{ color: '#2F2F2F' }} />
          </IconButton>
          <IconButton>
            <NotificationsNoneIcon sx={{ color: '#2F2F2F' }} />
          </IconButton>
          <IconButton>
            <SettingsIcon sx={{ color: '#2F2F2F' }} />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

