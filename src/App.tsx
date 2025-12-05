import { useState } from "react";
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

const pages = ["Home", "About", "Services", "Experience", "Contact"];

export default function App() {
  const [currentPage, setCurrentPage] = useState("Home");
  const [mobileOpen, setMobileOpen] = useState(false);
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handlePageChange = (page: string) => {
    setCurrentPage(page);
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
          <ListItem key={page} disablePadding>
            <ListItemButton
              sx={{ textAlign: "center" }}
              onClick={() => handlePageChange(page)}
              selected={currentPage === page}
            >
              <ListItemText primary={page} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const renderPage = () => {
    switch (currentPage) {
      case "Home":
        return <HomePage onNavigate={handlePageChange} />;
      case "About":
        return <AboutPage />;
      case "Services":
        return <ServicesPage />;
      case "Experience":
        return <ExperiencePage />;
      case "Contact":
        return <ContactPage />;
      default:
        return <HomePage onNavigate={handlePageChange}/>;
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Cursor />
      <Box
        sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
      >
        <AppBar position="sticky" elevation={2}>
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{
                  flexGrow: 1,
                  display: { xs: "none", md: "flex" },
                  fontWeight: 600,
                  color: "white",
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
                component="div"
                sx={{
                  flexGrow: 1,
                  display: { xs: "flex", md: "none" },
                  fontWeight: 600,
                }}
              >
                CS R. Thamizhvanan
              </Typography>

              <Box sx={{ display: { xs: "none", md: "flex" }, gap: 1 }}>
                {pages.map((page) => (
                  <Button
                    key={page}
                    onClick={() => handlePageChange(page)}
                    sx={{
                      color: "white",
                      display: "block",
                      px: 2,
                      backgroundColor:
                        currentPage === page
                          ? "rgba(255, 255, 255, 0.1)"
                          : "transparent",
                      "&:hover": {
                        backgroundColor: "rgba(255, 255, 255, 0.2)",
                      },
                    }}
                  >
                    {page}
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
          {renderPage()}
        </Box>

        <Footer />
      </Box>
    </ThemeProvider>
  );
}
