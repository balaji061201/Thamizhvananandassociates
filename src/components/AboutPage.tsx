import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import BusinessIcon from '@mui/icons-material/Business';
import PeopleIcon from '@mui/icons-material/People';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import PersonIcon from '@mui/icons-material/Person';
import React from 'react';

export function AboutPage() {
  return (
    <Box>
      {/* Page Header */}
      <Box sx={{ bgcolor: 'primary.main', color: 'white', py: { xs: 6, md: 8 } }}>
        <Container maxWidth="lg">
          <Typography
            variant="h2"
            component="h1"
            gutterBottom
            sx={{ fontWeight: 700, fontSize: { xs: '2rem', md: '3rem' } }}
          >
            About Us
          </Typography>
          <Typography variant="h6" sx={{ opacity: 0.9 }}>
            Professional Excellence in Company Secretarial Practice
          </Typography>
        </Container>
      </Box>

      {/* Profile Section */}
      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
        <Grid container spacing={6}>
          <Grid size={{ xs: 12, md: 8 }}>
            <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 700, color: 'primary.main' }}>
              CS R. Thamizhvanan ACA., ACS.
            </Typography>
            <Typography variant="h6" gutterBottom sx={{ color: 'secondary.main', fontWeight: 600 }}>
              Company Secretary in Practice
            </Typography>
            <Divider sx={{ my: 3 }} />
            <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
              With over 24 years of dedicated practice in the field of corporate law and compliance, CS R. Thamizhvanan
              brings extensive expertise in handling complex corporate governance matters, regulatory compliance, and
              strategic corporate advisory services.
            </Typography>
            <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
              As a qualified Associate Company Secretary (ACS) and Associate Chartered Accountant (ACA), the practice
              offers comprehensive solutions covering Companies Act compliance, SEBI regulations, ROC filings, RBI
              guidelines, and stock exchange requirements.
            </Typography>
            <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
              Operating as a Sole Proprietorship practice, we maintain the highest standards of professional ethics,
              confidentiality, and client service excellence. Our team is committed to providing timely, accurate, and
              reliable corporate secretarial services to businesses across various sectors.
            </Typography>

            <Box sx={{ mt: 4 }}>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, color: 'primary.main' }}>
                Qualifications
              </Typography>
              <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mt: 2 }}>
                <Chip
                  icon={<WorkspacePremiumIcon />}
                  label="ACS - Associate Company Secretary"
                  color="primary"
                  sx={{ fontWeight: 500 }}
                />
                <Chip
                  icon={<WorkspacePremiumIcon />}
                  label="ACA - Associate Chartered Accountant"
                  color="secondary"
                  sx={{ fontWeight: 500 }}
                />
              </Box>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <Card elevation={3}>
              <CardContent sx={{ p: 3 }}>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, color: 'primary.main' }}>
                  Quick Facts
                </Typography>
                <Divider sx={{ mb: 3 }} />
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                  <Box sx={{ display: 'flex', gap: 2 }}>
                    <BusinessIcon sx={{ color: 'secondary.main' }} />
                    <Box>
                      <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                        Experience
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        24+ Years
                      </Typography>
                    </Box>
                  </Box>
                  <Box sx={{ display: 'flex', gap: 2 }}>
                    <PeopleIcon sx={{ color: 'secondary.main' }} />
                    <Box>
                      <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                        Team Strength
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        8 Staff + 1 Qualified Consultant
                      </Typography>
                    </Box>
                  </Box>
                  <Box sx={{ display: 'flex', gap: 2 }}>
                    <AccountBalanceIcon sx={{ color: 'secondary.main' }} />
                    <Box>
                      <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                        Practice Type
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Sole Proprietorship
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>

      {/* Office Address */}
      <Box sx={{ bgcolor: 'background.paper', py: { xs: 6, md: 8 } }}>
        <Container maxWidth="lg">
          <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 700, color: 'primary.main', mb: 4 }}>
            Our Office
          </Typography>
          <Grid container spacing={4}>
            <Grid size={{ xs: 12, md: 6 }}>
              <Paper elevation={2} sx={{ p: 4, height: '100%' }}>
                <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
                  <LocationOnIcon sx={{ color: 'secondary.main', fontSize: 32 }} />
                  <Typography variant="h6" sx={{ fontWeight: 600, color: 'primary.main' }}>
                    East Coast Chambers
                  </Typography>
                </Box>
                <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
                  Unit-C, Second Floor
                  <br />
                  New Door No.82/37
                  <br />
                  G.N. Chetty Road
                  <br />
                  T. Nagar, Chennai – 600017
                </Typography>
                <Divider sx={{ my: 2 }} />
                <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1 }}>
                  Landmark:
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Courtallam Border Rahmath Kadai
                </Typography>
              </Paper>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Paper
                elevation={2}
                sx={{
                  p: 4,
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  bgcolor: 'primary.main',
                  color: 'white',
                }}
              >
                <BusinessIcon sx={{ fontSize: 64, color: 'secondary.main', mb: 3 }} />
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                  Professional Office Space
                </Typography>
                <Typography variant="body1" sx={{ opacity: 0.9 }}>
                  Conveniently located in the heart of T. Nagar, Chennai, our office is easily accessible and equipped
                  to serve clients with the highest standards of professionalism.
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Team Section */}
      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
        <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 700, color: 'primary.main', mb: 4 }}>
          Our Team
        </Typography>
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Card elevation={3} sx={{ height: '100%' }}>
              <CardContent sx={{ p: 4 }}>
                <Box
                  sx={{
                    width: 80,
                    height: 80,
                    borderRadius: '50%',
                    bgcolor: 'primary.main',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mb: 3,
                  }}
                >
                  <PersonIcon sx={{ fontSize: 40, color: 'white' }} />
                </Box>
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, color: 'primary.main' }}>
                  CS R. Thamizhvanan
                </Typography>
                <Typography variant="subtitle1" gutterBottom sx={{ color: 'secondary.main', fontWeight: 600 }}>
                  ACA., ACS.
                </Typography>
                <Divider sx={{ my: 2 }} />
                <Typography variant="body2" color="text.secondary">
                  Principal - Company Secretary in Practice
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Card elevation={3} sx={{ height: '100%' }}>
              <CardContent sx={{ p: 4 }}>
                <Box
                  sx={{
                    width: 80,
                    height: 80,
                    borderRadius: '50%',
                    bgcolor: 'secondary.main',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mb: 3,
                  }}
                >
                  <PersonIcon sx={{ fontSize: 40, color: 'white' }} />
                </Box>
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, color: 'primary.main' }}>
                  CS Vijayalakshmi Kandaswamy
                </Typography>
                <Typography variant="subtitle1" gutterBottom sx={{ color: 'secondary.main', fontWeight: 600 }}>
                  Qualified Consultant
                </Typography>
                <Divider sx={{ my: 2 }} />
                <Typography variant="body2" color="text.secondary">
                  Senior Consultant - Corporate Compliance & Advisory
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        <Paper elevation={1} sx={{ p: 3, mt: 4, bgcolor: 'background.paper' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <PeopleIcon sx={{ color: 'secondary.main', fontSize: 32 }} />
            <Box>
              <Typography variant="h6" sx={{ fontWeight: 600, color: 'primary.main' }}>
                Support Staff
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Our dedicated team of 8 professional staff members ensures efficient service delivery and client support
              </Typography>
            </Box>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
}
