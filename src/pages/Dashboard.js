import React, { useState, useEffect } from "react";
import {
  Box,
  Grid,
  Typography,
  Card,
  Drawer,
  IconButton,
  AppBar,
  Toolbar,
  useMediaQuery,
  Menu,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar"; // Fixed Navbar import
import SalesOverview from "../components/SalesOverview";
import RevenueUpdates from "../components/RevenueUpdates";
import YearlySales from "../components/YearlySales";
import ActiveUsers from "../components/ActiveUsers";
import PaymentGateways from "../components/PaymentGateways";
import axios from "axios";

const Dashboard = () => {
  const [salesData, setSalesData] = useState({});
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  useEffect(() => {
    // Mock Sales Distribution Data
    axios.get("https://jsonplaceholder.typicode.com/posts/1").then(() => {
      setSalesData({
        totalSales: 34343,
        website: 4500,
        mobile: 2800,
        market: 2200,
        agent: 1700,
      });
    });
  }, []);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <Box sx={{ display: "flex", backgroundColor: "#F9FAFB", minHeight: "100vh" }}>
      {/* Sidebar & Drawer */}
      {isSmallScreen ? (
        <>
          <AppBar
            position="fixed"
            sx={{
              backgroundColor: "#fff",
              boxShadow: "none",
              zIndex: 1201,
            }}
          >
            <Toolbar>
              <IconButton
                onClick={toggleDrawer}
                edge="start"
                sx={{ color: "#000", mr: 2 }}
              >
                <MenuIcon />
              </IconButton>
              <Typography
                variant="h6"
                color="textPrimary"
                sx={{ flexGrow: 1, fontWeight: "bold" }}
              >
                Dashboard
              </Typography>
            </Toolbar>
          </AppBar>
          <Drawer
            open={isDrawerOpen}
            onClose={toggleDrawer}
            sx={{
              "& .MuiDrawer-paper": {
                width: "250px",
              },
            }}
          >
            <Sidebar />
          </Drawer>
        </>
      ) : (
        <Box sx={{ width: "240px", height: "100vh", position: "fixed" }}>
          <Sidebar />
        </Box>
      )}

      {/* Main Content */}
      <Box
        sx={{
          flexGrow: 1,
          marginLeft: isSmallScreen ? 0 : "240px",
          padding: isSmallScreen ? "4rem 1rem 1rem" : "1.5rem",
        }}
      >
        {!isSmallScreen && <Navbar />}

        <Grid container spacing={2}>
          {/* Sales Distribution Section */}
          <Grid item xs={12}>
            <Card
              sx={{
                borderRadius: "1rem",
                backgroundImage: `url(${process.env.PUBLIC_URL}/background-chart.jpg)`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                padding: "1.5rem",
                color: "#2F2F2F",
              }}
            >
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                Sales Distribution
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: isSmallScreen ? "column" : "row",
                  justifyContent: "space-between",
                  gap: "1rem",
                }}
              >
                <Box>
                  <Typography variant="h4" fontWeight="bold">
                    ${salesData.totalSales?.toLocaleString()}
                  </Typography>
                  <Typography variant="body2" color="inherit">
                    Total Sales
                  </Typography>
                </Box>
                {[
                  { label: "By Website", value: salesData.website },
                  { label: "By Mobile", value: salesData.mobile },
                  { label: "By Market", value: salesData.market },
                  { label: "By Agent", value: salesData.agent },
                ].map((item, index) => (
                  <Box
                    key={index}
                    sx={{
                      backgroundColor: "#FFF3E0",
                      borderRadius: "1rem",
                      padding: "1rem",
                      textAlign: "center",
                      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                      minWidth: "200px",
                    }}
                  >
                    <Typography variant="h5" fontWeight="bold">
                      ${item.value?.toLocaleString()}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      {item.label}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Card>
          </Grid>

          {/* Other Components */}
          <Grid item xs={12} md={6} lg={4}>
            <SalesOverview />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <RevenueUpdates />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <YearlySales />
          </Grid>
          <Grid item xs={12} md={8} lg={6}>
            <ActiveUsers />
          </Grid>
          <Grid item xs={12} md={4} lg={6}>
            <PaymentGateways />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Dashboard;
