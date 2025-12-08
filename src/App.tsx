import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Container from "@mui/material/Container";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import useMediaQuery from "@mui/material/useMediaQuery";
import { BrowserRouter, Routes, Route, Link, useLocation } from "react-router-dom";
import { useState } from "react";
import "./styles/globals.css";
import { HomePage } from "./components/HomePage";
import { AboutPage } from "./components/AboutPage";
import { ServicesPage } from "./components/ServicesPage";
import { ExperiencePage } from "./components/ExperiencePage";
import { ContactPage } from "./components/ContactPage";
import { Footer } from "./components/Footer";
import React from "react";
import Cursor from "./components/cursor";

const theme = createTheme({
  palette: {
    primary: {
      main: "#0A1B4F",
    },
    secondary: {
      main: "#D4A017",
    },
    background: {
      default: "#FFFFFF",
      paper: "#F5F5F5",
    },
  },
  typography: {
    fontFamily: '"Roboto", "Inter", "Helvetica", "Arial", sans-serif',
  },
  spacing: 8,
});

const pages = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Experience", path: "/experience" },
  { name: "Contact", path: "/contact" },
];

function AppContent() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const location = useLocation();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleDrawerClose = () => {
    setMobileOpen(false);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2, color: "primary.main", display: "flex", alignItems: "center", justifyContent: "center", gap: 1, flexDirection: "column" }}>
        <img
          src="/assets/images/CSLogo.png"
          alt="Company Secratary Logo"
          className="CSLogo"
        />
        CS R. Thamizhvanan
      </Typography>
      <List>
        {pages.map((page) => (
          <ListItem key={page.name} disablePadding>
            <ListItemButton
              component={Link}
              to={page.path}
              sx={{ textAlign: "center" }}
              onClick={handleDrawerClose}
              selected={location.pathname === page.path}
            >
              <ListItemText primary={page.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <AppBar position="sticky" elevation={2}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component={Link}
              to="/"
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                fontWeight: 600,
                color: "white",
                textDecoration: "none",
              }}
            >
              <img
                src="/assets/images/CSLogo-white.png"
                alt="Company Secratary Logo"
                className="CSLogo"
              />
              R. Thamizhvanan ACA., ACS.
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="menu"
                onClick={handleDrawerToggle}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
            </Box>

            <Typography
              variant="h6"
              noWrap
              component={Link}
              to="/"
              sx={{
                flexGrow: 1,
                display: { xs: "flex", md: "none" },
                fontWeight: 600,
                color: "white",
                textDecoration: "none",
              }}
            >
              CS R. Thamizhvanan
            </Typography>

            <Box sx={{ display: { xs: "none", md: "flex" }, gap: 1 }}>
              {pages.map((page) => (
                <Button
                  key={page.name}
                  component={Link}
                  to={page.path}
                  sx={{
                    color: "white",
                    display: "block",
                    px: 2,
                    backgroundColor:
                      location.pathname === page.path
                        ? "rgba(255, 255, 255, 0.1)"
                        : "transparent",
                    "&:hover": {
                      backgroundColor: "rgba(255, 255, 255, 0.2)",
                    },
                  }}
                >
                  {page.name}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: 240 },
        }}
      >
        {drawer}
      </Drawer>

      <Box component="main" sx={{ flexGrow: 1 }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/experience" element={<ExperiencePage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Box>

      <Footer />
    </Box>
  );
}

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Cursor />
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </ThemeProvider>
  );
}
