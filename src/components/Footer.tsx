import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import Divider from '@mui/material/Divider';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import React from 'react';

export function Footer() {
  return (
    <Box component="footer" sx={{ bgcolor: 'primary.main', color: 'white', mt: 'auto' }}>
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Grid container spacing={4}>
          {/* About Section */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
              <BusinessCenterIcon sx={{ fontSize: 32, color: 'secondary.main' }} />
              <Typography variant="h6" sx={{ fontWeight: 700 }}>
                CS R. Thamizhvanan
              </Typography>
            </Box>
            <Typography variant="body2" paragraph sx={{ opacity: 0.9 }}>
              ACA., ACS. - Company Secretary in Practice
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.85, lineHeight: 1.6 }}>
              24+ years of expertise in corporate law, SEBI, ROC, RBI & governance compliance. Providing professional
              company secretarial services with dedication and excellence.
            </Typography>
          </Grid>

          {/* Quick Links */}
          <Grid size={{ xs: 12, sm: 6 ,md: 2 }}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
              Quick Links
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Typography variant="body2" sx={{ opacity: 0.9, cursor: 'pointer', '&:hover': { color: 'secondary.main' } }}>
                Home
              </Typography>
              <Typography variant="body2" sx={{ opacity: 0.9, cursor: 'pointer', '&:hover': { color: 'secondary.main' } }}>
                About
              </Typography>
              <Typography variant="body2" sx={{ opacity: 0.9, cursor: 'pointer', '&:hover': { color: 'secondary.main' } }}>
                Services
              </Typography>
              <Typography variant="body2" sx={{ opacity: 0.9, cursor: 'pointer', '&:hover': { color: 'secondary.main' } }}>
                Experience
              </Typography>
              <Typography variant="body2" sx={{ opacity: 0.9, cursor: 'pointer', '&:hover': { color: 'secondary.main' } }}>
                Contact
              </Typography>
            </Box>
          </Grid>

          {/* Services */}
          <Grid size={{ xs: 12, sm: 6 ,md: 3 }}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
              Our Services
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Typography variant="body2" sx={{ opacity: 0.9 }}>
                ROC Compliance
              </Typography>
              <Typography variant="body2" sx={{ opacity: 0.9 }}>
                SEBI Compliance
              </Typography>
              <Typography variant="body2" sx={{ opacity: 0.9 }}>
                Board Support
              </Typography>
              <Typography variant="body2" sx={{ opacity: 0.9 }}>
                Secretarial Audit
              </Typography>
              <Typography variant="body2" sx={{ opacity: 0.9 }}>
                Corporate Advisory
              </Typography>
            </Box>
          </Grid>

          {/* Contact Info */}
          <Grid size={{ xs: 12, md: 3 }}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
              Contact Us
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <Box sx={{ display: 'flex', gap: 1, alignItems: 'flex-start' }}>
                <LocationOnIcon sx={{ fontSize: 20, color: 'secondary.main', mt: 0.3 }} />
                <Typography variant="body2" sx={{ opacity: 0.9 }}>
                  East Coast Chambers, Unit-C, Second Floor, G.N. Chetty Road, T. Nagar, Chennai - 600017
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
                <PhoneIcon sx={{ fontSize: 20, color: 'secondary.main' }} />
                <Typography variant="body2" sx={{ opacity: 0.9 }}>
                  +91 9176645645
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
                <EmailIcon sx={{ fontSize: 20, color: 'secondary.main' }} />
                <Typography variant="body2" sx={{ opacity: 0.9 }}>
                  info@csthamizhvanan.com
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4, borderColor: 'rgba(255, 255, 255, 0.2)' }} />

        {/* Bottom Section */}
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'space-between', alignItems: 'center', gap: 2 }}>
          <Typography variant="body2" sx={{ opacity: 0.8 }}>
            © 2024 CS R. Thamizhvanan ACA., ACS. All rights reserved.
          </Typography>
          
          <Box sx={{ display: 'flex', gap: 1 }}>
            <IconButton
              sx={{
                color: 'white',
                '&:hover': { bgcolor: 'secondary.main', color: 'primary.main' },
              }}
              aria-label="LinkedIn"
            >
              <LinkedInIcon />
            </IconButton>
            <IconButton
              sx={{
                color: 'white',
                '&:hover': { bgcolor: 'secondary.main', color: 'primary.main' },
              }}
              aria-label="Twitter"
            >
              <TwitterIcon />
            </IconButton>
            <IconButton
              sx={{
                color: 'white',
                '&:hover': { bgcolor: 'secondary.main', color: 'primary.main' },
              }}
              aria-label="Facebook"
            >
              <FacebookIcon />
            </IconButton>
            <IconButton
              sx={{
                color: 'white',
                '&:hover': { bgcolor: 'secondary.main', color: 'primary.main' },
              }}
              aria-label="Email"
            >
              <EmailIcon />
            </IconButton>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
