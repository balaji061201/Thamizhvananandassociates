import { useState } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Divider from "@mui/material/Divider";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import SendIcon from "@mui/icons-material/Send";
import BusinessIcon from "@mui/icons-material/Business";
import MapIcon from "@mui/icons-material/Map";
import React from "react";

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    alert("Thank you for your message. We will get back to you soon!");
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      message: "",
    });
  };

  return (
    <Box>
      {/* Page Header */}
      <Box
        sx={{ bgcolor: "primary.main", color: "white", py: { xs: 6, md: 8 } }}
      >
        <Container maxWidth="lg">
          <Typography
            variant="h2"
            component="h1"
            gutterBottom
            sx={{ fontWeight: 700, fontSize: { xs: "2rem", md: "3rem" } }}
          >
            Contact Us
          </Typography>
          <Typography variant="h6" sx={{ opacity: 0.9 }}>
            Get in Touch for Professional Company Secretarial Services
          </Typography>
        </Container>
      </Box>

      {/* Contact Info and Form */}
      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
        <Grid container spacing={4}>
          {/* Contact Information */}
          <Grid size={{ xs: 12, md: 5 }}>
            <Typography
              variant="h4"
              component="h2"
              gutterBottom
              sx={{ fontWeight: 700, color: "primary.main", mb: 4 }}
            >
              Contact Information
            </Typography>

            <Card elevation={3} sx={{ mb: 3 }}>
              <CardContent sx={{ p: 3 }}>
                <Box sx={{ display: "flex", gap: 2, mb: 3 }}>
                  <LocationOnIcon
                    sx={{ color: "secondary.main", fontSize: 32 }}
                  />
                  <Box>
                    <Typography
                      variant="h6"
                      gutterBottom
                      sx={{ fontWeight: 600, color: "primary.main" }}
                    >
                      Office Address
                    </Typography>
                    <Typography variant="body2" paragraph>
                      East Coast Chambers
                      <br />
                      Unit-C, Second Floor
                      <br />
                      New Door No.82/37
                      <br />
                      G.N. Chetty Road
                      <br />
                      T. Nagar, Chennai – 600017
                    </Typography>
                    <Divider sx={{ my: 2 }} />
                    <Typography
                      variant="subtitle2"
                      sx={{ fontWeight: 600, color: "primary.main" }}
                    >
                      Landmark:
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Courtallam Border Rahmath Kadai
                    </Typography>
                  </Box>
                </Box>
              </CardContent>
            </Card>

            <Card elevation={3} sx={{ mb: 3 }}>
              <CardContent sx={{ p: 3 }}>
                <Box
                  sx={{ display: "flex", gap: 2, alignItems: "center", mb: 2 }}
                >
                  <PhoneIcon sx={{ color: "secondary.main", fontSize: 28 }} />
                  <Box>
                    <Typography
                      variant="subtitle2"
                      sx={{ fontWeight: 600, color: "primary.main" }}
                    >
                      Phone
                    </Typography>
                    <Typography variant="body2">+91 9176645645</Typography>
                  </Box>
                </Box>
                <Divider sx={{ my: 2 }} />
                <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
                  <EmailIcon sx={{ color: "secondary.main", fontSize: 28 }} />
                  <Box>
                    <Typography
                      variant="subtitle2"
                      sx={{ fontWeight: 600, color: "primary.main" }}
                    >
                      Email
                    </Typography>
                    <Typography variant="body2">
                      info@csthamizhvanan.com
                    </Typography>
                  </Box>
                </Box>
              </CardContent>
            </Card>

            <Card elevation={3}>
              <CardContent sx={{ p: 3 }}>
                <Box sx={{ display: "flex", gap: 2, alignItems: "flex-start" }}>
                  <AccessTimeIcon
                    sx={{ color: "secondary.main", fontSize: 28 }}
                  />
                  <Box>
                    <Typography
                      variant="subtitle2"
                      sx={{ fontWeight: 600, color: "primary.main", mb: 1 }}
                    >
                      Office Hours
                    </Typography>
                    <Typography variant="body2" paragraph>
                      Monday - Friday: 9:30 AM - 6:30 PM
                    </Typography>
                    <Typography variant="body2">
                      Saturday: 9:30 AM - 1:00 PM
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Sunday: Closed
                    </Typography>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Grid>

          {/* Contact Form */}
          <Grid size={{ xs: 12, md: 7 }}>
            <Paper elevation={3} sx={{ p: { xs: 3, md: 4 } }}>
              <Typography
                variant="h5"
                component="h2"
                gutterBottom
                sx={{ fontWeight: 600, color: "primary.main", mb: 3 }}
              >
                Send Us a Message
              </Typography>
              <form onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                  <Grid size={{ xs: 12, md: 6 }}>
                    <TextField
                      fullWidth
                      label="Full Name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      variant="outlined"
                    />
                  </Grid>
                  <Grid size={{ xs: 12, md: 6 }}>
                    <TextField
                      fullWidth
                      label="Email Address"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      variant="outlined"
                    />
                  </Grid>
                  <Grid size={{ xs: 12, md: 6 }}>
                    <TextField
                      fullWidth
                      label="Phone Number"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      variant="outlined"
                    />
                  </Grid>
                  <Grid size={{ xs: 12, md: 6 }}>
                    <TextField
                      fullWidth
                      label="Company Name"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      variant="outlined"
                    />
                  </Grid>
                  <Grid size={{ xs: 12 }}>
                    <TextField
                      fullWidth
                      label="Your Message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      multiline
                      rows={6}
                      variant="outlined"
                    />
                  </Grid>
                  <Grid size={{ xs: 12 }}>
                    <Button
                      type="submit"
                      variant="contained"
                      size="large"
                      endIcon={<SendIcon />}
                      sx={{
                        bgcolor: "primary.main",
                        px: 4,
                        py: 1.5,
                        "&:hover": {
                          bgcolor: "#0A2055",
                        },
                      }}
                    >
                      Send Message
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Paper>
          </Grid>
        </Grid>
      </Container>

      {/* Map Section */}
      <Box sx={{ bgcolor: "background.paper", py: { xs: 6, md: 10 } }}>
        <Container maxWidth="lg">
          <Typography
            variant="h4"
            component="h2"
            gutterBottom
            sx={{ fontWeight: 700, color: "primary.main", mb: 4 }}
          >
            Find Us on Map
          </Typography>
          <Paper
            elevation={3}
            sx={{
              height: { xs: 300, md: 400 },
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              bgcolor: "#E8E8E8",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <Box sx={{ textAlign: "center", p: 4 }}>
              <MapIcon sx={{ fontSize: 80, color: "primary.main", mb: 2 }} />
              <Typography
                variant="h6"
                gutterBottom
                sx={{ color: "primary.main", fontWeight: 600 }}
              >
                Google Maps Integration
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                East Coast Chambers, G.N. Chetty Road, T. Nagar, Chennai
              </Typography>
              <Button
                variant="contained"
                href="https://maps.google.com"
                target="_blank"
                sx={{ bgcolor: "secondary.main", color: "primary.main" }}
              >
                Open in Google Maps
              </Button>
            </Box>
          </Paper>
        </Container>
      </Box>

      {/* Additional Info */}
      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
        <Card elevation={3} sx={{ bgcolor: "primary.main", color: "white" }}>
          <CardContent sx={{ p: { xs: 3, md: 5 }, textAlign: "center" }}>
            <BusinessIcon
              sx={{ fontSize: 64, color: "secondary.main", mb: 2 }}
            />
            <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
              Schedule a Consultation
            </Typography>
            <Typography variant="body1" sx={{ mb: 3, opacity: 0.9 }}>
              Contact us to schedule a consultation for your corporate
              compliance and secretarial needs. Our experienced team is ready to
              assist you with professional expertise.
            </Typography>
            <Button
              variant="contained"
              size="large"
              sx={{
                bgcolor: "secondary.main",
                color: "primary.main",
                px: 4,
                py: 1.5,
                "&:hover": {
                  bgcolor: "#E5B01F",
                },
              }}
            >
              Book Appointment
            </Button>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
}
