import React from 'react';
import { Card, Typography, Box, Button, Chip } from '@mui/material';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Custom Icon
const markerIcon = new L.Icon({
  iconUrl: 'https://cdn-icons-png.flaticon.com/512/684/684908.png',
  iconSize: [30, 30],
  iconAnchor: [15, 30],
  popupAnchor: [0, -30],
});

const ActiveUsers = () => {
  const activeUserCount = 7680; // Example number of active users
  const growthRate = 8.06; // Growth percentage
  const locations = [
    { lat: 37.7749, lng: -122.4194, city: 'San Francisco' },
    { lat: 40.7128, lng: -74.006, city: 'New York' },
    { lat: 51.5074, lng: -0.1278, city: 'London' },
  ];

  return (
    <Card
      sx={{
        padding: '1.5rem',
        borderRadius: '1rem',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
        display: 'flex',
        flexDirection: 'column',
        height: '430px',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '1rem',
        }}
      >
        <Typography
          variant="h6"
          fontWeight="bold"
          color="text.primary"
        >
          Active Users
        </Typography>
        <Button
          variant="outlined"
          size="small"
          sx={{
            textTransform: 'none',
            borderColor: '#1E88E5',
            color: '#1E88E5',
          }}
        >
          Export
        </Button>
      </Box>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexGrow: 1,
        }}
      >
        {/* Left Section: User Count */}
        <Box sx={{ textAlign: 'center' }}>
          <Typography
            variant="h3"
            fontWeight="bold"
            color="text.primary"
            sx={{ marginBottom: '0.5rem' }}
          >
            {activeUserCount.toLocaleString()}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Total Active User
          </Typography>
          <Chip
            label={`+${growthRate}% Vs Previous Month`}
            sx={{
              marginTop: '0.5rem',
              backgroundColor: '#E8F5E9',
              color: '#43A047',
              fontWeight: 'bold',
              fontSize: '0.85rem',
            }}
          />
        </Box>

        {/* Right Section: Map */}
        <Box
          sx={{
            width: '60%',
            height: '100%',
            borderRadius: '1rem',
            overflow: 'hidden',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          }}
        >
          <MapContainer
            center={[20, 0]}
            zoom={2}
            style={{
              width: '100%',
              height: '100%',
            }}
          >
            <TileLayer
              url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
             
            />
            {locations.map((location, index) => (
              <Marker
                key={index}
                position={[location.lat, location.lng]}
                icon={markerIcon}
              >
                <Popup>{location.city}</Popup>
              </Marker>
            ))}
          </MapContainer>
        </Box>
      </Box>
    </Card>
  );
};

export default ActiveUsers;
