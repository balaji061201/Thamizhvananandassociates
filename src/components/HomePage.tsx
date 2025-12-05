import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Paper from "@mui/material/Paper";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import GavelIcon from "@mui/icons-material/Gavel";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import AssignmentIcon from "@mui/icons-material/Assignment";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import React from "react";

export function HomePage({ onNavigate }) {
  return (
    <Box>
      {/* Hero Section */}
      <Box className="hero-section">
        <img
          src="/assets/images/hero-background.jpg"
          alt="banner-background"
          className="banner-img"
        />
        <Container maxWidth="lg">
          <Grid
            container
            spacing={4}
            alignItems="center"
            justifyContent={"center"}
            height={"100vh"}
          >
            <Grid size={{ xs: 12, md: 8 }}>
              <Typography
                variant="h2"
                component="h1"
                gutterBottom
                sx={{
                  fontWeight: 700,
                  fontSize: { xs: "2rem", sm: "2.5rem", md: "3.5rem" },
                  textAlign: "center",
                }}
              >
                CS R. Thamizhvanan ACA., ACS.
              </Typography>
              <Typography
                variant="h5"
                component="h2"
                gutterBottom
                sx={{
                  fontWeight: 500,
                  fontSize: { xs: "1.25rem", md: "1.5rem" },
                  mb: 3,
                  textAlign: "center",
                }}
              >
                Company Secretary in Practice
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 400,
                  opacity: 0.95,
                  mb: 4,
                  fontSize: { xs: "1rem", md: "1.25rem" },
                  textAlign: "center",
                }}
              >
                24+ Years of Expertise in Corporate Law, SEBI, ROC, RBI &
                Governance Compliance
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  gap: 2,
                  flexWrap: "wrap",
                  justifyContent: "center",
                }}
              >
                <Button
                  variant="contained"
                  size="large"
                  endIcon={<ArrowForwardIcon />}
                  sx={{
                    bgcolor: "background.default",
                    color: "primary.main",
                    px: 4,
                    py: 1.5,
                    "&:hover": {
                      bgcolor: "#E5B01F",
                    },
                  }}
                >
                  Our Services
                </Button>
                {/* <Button
                  variant="outlined"
                  size="large"
                  endIcon={<ContactMailIcon />}
                  sx={{
                    borderColor: "white",
                    color: "white",
                    px: 4,
                    py: 1.5,
                    "&:hover": {
                      borderColor: "white",
                      bgcolor: "rgba(255, 255, 255, 0.1)",
                    },
                  }}
                >
                  Get in Touch
                </Button> */}

                <Button
                  variant="outlined"
                  size="large"
                  endIcon={<ContactMailIcon />}
                  sx={{
                    borderColor: "white",
                    color: "white",
                    px: 4,
                    py: 1.5,
                    "&:hover": {
                      borderColor: "white",
                      bgcolor: "rgba(255, 255, 255, 0.1)",
                    },
                  }}
                  onClick={() => onNavigate("Contact")}
                >
                  Get in Touch
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Key Highlights */}
      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
        <Typography
          variant="h3"
          component="h2"
          align="center"
          gutterBottom
          sx={{
            fontWeight: 700,
            color: "primary.main",
            mb: 6,
            fontSize: { xs: "1.75rem", md: "3rem" },
          }}
        >
          Why Choose Us
        </Typography>
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 4 }}>
            <Card
              elevation={3}
              sx={{
                height: "100%",
                transition: "transform 0.3s, box-shadow 0.3s",
                borderRadius: 4,
                background: "transparent",
                boxShadow: "none",
                "&:hover": {
                  transform: "translateY(-8px)",
                  boxShadow: "0px 4px 8px 1px rgba(144, 136, 246, 0.20)",
                },
              }}
            >
              <CardContent sx={{ textAlign: "center", p: 4 }}>
                <Box
                  sx={{
                    width: 80,
                    height: 80,
                    borderRadius: "50%",
                    bgcolor: "secondary.main",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mx: "auto",
                    mb: 3,
                  }}
                >
                  <BusinessCenterIcon sx={{ fontSize: 40, color: "white" }} />
                </Box>
                <Typography
                  variant="h5"
                  component="h3"
                  gutterBottom
                  sx={{ fontWeight: 600, color: "primary.main" }}
                >
                  24+ Years Experience
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Over two decades of professional expertise in corporate law,
                  compliance, and governance matters.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <Card
              elevation={3}
              sx={{
                height: "100%",
                transition: "transform 0.3s, box-shadow 0.3s",
                borderRadius: 4,
                background: "transparent",
                boxShadow: "none",
                "&:hover": {
                  transform: "translateY(-8px)",
                  boxShadow: "0px 4px 8px 1px rgba(144, 136, 246, 0.20)",
                },
              }}
            >
              <CardContent sx={{ textAlign: "center", p: 4 }}>
                <Box
                  sx={{
                    width: 80,
                    height: 80,
                    borderRadius: "50%",
                    bgcolor: "secondary.main",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mx: "auto",
                    mb: 3,
                  }}
                >
                  <VerifiedUserIcon sx={{ fontSize: 40, color: "white" }} />
                </Box>
                <Typography
                  variant="h5"
                  component="h3"
                  gutterBottom
                  sx={{ fontWeight: 600, color: "primary.main" }}
                >
                  Governance Expertise
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Comprehensive knowledge of SEBI, ROC, RBI regulations and
                  corporate governance best practices.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <Card
              elevation={3}
              sx={{
                height: "100%",
                transition: "transform 0.3s, box-shadow 0.3s",
                borderRadius: 4,
                background: "transparent",
                boxShadow: "none",
                "&:hover": {
                  transform: "translateY(-8px)",
                  boxShadow: "0px 4px 8px 1px rgba(144, 136, 246, 0.20)",
                },
              }}
            >
              <CardContent sx={{ textAlign: "center", p: 4 }}>
                <Box
                  sx={{
                    width: 80,
                    height: 80,
                    borderRadius: "50%",
                    bgcolor: "secondary.main",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mx: "auto",
                    mb: 3,
                  }}
                >
                  <TrendingUpIcon sx={{ fontSize: 40, color: "white" }} />
                </Box>
                <Typography
                  variant="h5"
                  component="h3"
                  gutterBottom
                  sx={{ fontWeight: 600, color: "primary.main" }}
                >
                  Compliance Support
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  End-to-end compliance solutions for routine and special
                  corporate assignments.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>

      {/* Quick Services */}
      <Box sx={{ bgcolor: "background.paper", py: { xs: 6, md: 10 } }}>
        <Container maxWidth="lg">
          <Typography
            variant="h3"
            component="h2"
            align="center"
            gutterBottom
            sx={{
              fontWeight: 700,
              color: "primary.main",
              mb: 6,
              fontSize: { xs: "1.75rem", md: "3rem" },
            }}
          >
            Quick Services Overview
          </Typography>
          <Grid container spacing={3}>
            <Grid size={{ xs: 12, sm: 6, md: 3 }}>
              <Paper
                elevation={2}
                sx={{
                  p: 3,
                  textAlign: "center",
                  height: "100%",
                  transition: "all 0.3s",
                  borderRadius: 4,
                  background: "transparent",
                  boxShadow: "none",
                  "&:hover": {
                    bgcolor: "primary.main",
                    color: "white",
                    "& .MuiSvgIcon-root": {
                      color: "secondary.main",
                    },
                  },
                }}
              >
                <AccountBalanceIcon
                  sx={{ fontSize: 48, color: "primary.main", mb: 2 }}
                />
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                  ROC Compliance
                </Typography>
                <Typography variant="body2">
                  Complete ROC filings and regulatory compliance
                </Typography>
              </Paper>
            </Grid>

            <Grid size={{ xs: 12, sm: 6, md: 3 }}>
              <Paper
                elevation={2}
                sx={{
                  p: 3,
                  textAlign: "center",
                  height: "100%",
                  transition: "all 0.3s",
                  borderRadius: 4,
                  background: "transparent",
                  boxShadow: "none",
                  "&:hover": {
                    bgcolor: "primary.main",
                    color: "white",
                    "& .MuiSvgIcon-root": {
                      color: "secondary.main",
                    },
                  },
                }}
              >
                <GavelIcon
                  sx={{ fontSize: 48, color: "primary.main", mb: 2 }}
                />
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                  SEBI Compliance
                </Typography>
                <Typography variant="body2">
                  Listed company compliance and SEBI regulations
                </Typography>
              </Paper>
            </Grid>

            <Grid size={{ xs: 12, sm: 6, md: 3 }}>
              <Paper
                elevation={2}
                sx={{
                  p: 3,
                  textAlign: "center",
                  height: "100%",
                  transition: "all 0.3s",
                  borderRadius: 4,
                  background: "transparent",
                  boxShadow: "none",
                  "&:hover": {
                    bgcolor: "primary.main",
                    color: "white",
                    "& .MuiSvgIcon-root": {
                      color: "secondary.main",
                    },
                  },
                }}
              >
                <AssignmentIcon
                  sx={{ fontSize: 48, color: "primary.main", mb: 2 }}
                />
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                  Board Support
                </Typography>
                <Typography variant="body2">
                  Board meetings, resolutions, and secretarial support
                </Typography>
              </Paper>
            </Grid>

            <Grid size={{ xs: 12, sm: 6, md: 3 }}>
              <Paper
                elevation={2}
                sx={{
                  p: 3,
                  textAlign: "center",
                  height: "100%",
                  transition: "all 0.3s",
                  borderRadius: 4,
                  background: "transparent",
                  boxShadow: "none",
                  "&:hover": {
                    bgcolor: "primary.main",
                    color: "white",
                    "& .MuiSvgIcon-root": {
                      color: "secondary.main",
                    },
                  },
                }}
              >
                <BusinessCenterIcon
                  sx={{ fontSize: 48, color: "primary.main", mb: 2 }}
                />
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                  Corporate Advisory
                </Typography>
                <Typography variant="body2">
                  M&A, restructuring, and corporate advisory services
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Call to Action */}
      <Container maxWidth="md" sx={{ py: { xs: 6, md: 10 } }}>
        <Paper
          elevation={4}
          sx={{
            p: { xs: 4, md: 6 },
            textAlign: "center",
            bgcolor: "primary.main",
            color: "white",
          }}
        >
          <Typography
            variant="h4"
            component="h2"
            gutterBottom
            sx={{ fontWeight: 700 }}
          >
            Ready to Ensure Compliance?
          </Typography>
          <Typography variant="body1" sx={{ mb: 4, opacity: 0.95 }}>
            Contact us today for professional company secretarial and corporate
            law services
          </Typography>
          <Button
            variant="contained"
            size="large"
            endIcon={<ContactMailIcon />}
            sx={{
              bgcolor: "secondary.main",
              color: "primary.main",
              px: 5,
              py: 1.5,
              "&:hover": {
                bgcolor: "#E5B01F",
              },
            }}
          >
            Schedule Consultation
          </Button>
        </Paper>
      </Container>
    </Box>
  );
}
