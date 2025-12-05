import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import SchoolIcon from '@mui/icons-material/School';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import VerifiedIcon from '@mui/icons-material/Verified';
import StarIcon from '@mui/icons-material/Star';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import React from 'react';

export function ExperiencePage() {
  const timelineData = [
    {
      year: '2000',
      title: 'Practice Established',
      description:
        'Commenced independent practice as Company Secretary, establishing a sole proprietorship firm.',
      icon: <BusinessCenterIcon />,
    },
    {
      year: '2005',
      title: 'SEBI Expertise Development',
      description:
        'Developed specialized expertise in SEBI compliance and listed company requirements.',
      icon: <TrendingUpIcon />,
    },
    {
      year: '2010',
      title: 'Team Expansion',
      description:
        'Expanded practice with dedicated team members to handle growing client requirements.',
      icon: <StarIcon />,
    },
    {
      year: '2015',
      title: 'Corporate Restructuring Focus',
      description:
        'Enhanced services to include complex corporate restructuring and M&A transactions.',
      icon: <VerifiedIcon />,
    },
    {
      year: '2020',
      title: 'Digital Transformation',
      description:
        'Adopted digital tools and platforms for efficient compliance management and client service.',
      icon: <EmojiEventsIcon />,
    },
    {
      year: '2024',
      title: '24+ Years of Excellence',
      description:
        'Continuing to serve clients with dedication, expertise, and professional excellence.',
      icon: <WorkspacePremiumIcon />,
    },
  ];

  const expertiseAreas = [
    { area: 'Companies Act Compliance', years: '24+' },
    { area: 'SEBI & Stock Exchange Regulations', years: '20+' },
    { area: 'Corporate Governance', years: '24+' },
    { area: 'Mergers & Acquisitions', years: '18+' },
    { area: 'FEMA & RBI Compliance', years: '15+' },
    { area: 'Secretarial Audit', years: '20+' },
  ];

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
            Experience & Journey
          </Typography>
          <Typography variant="h6" sx={{ opacity: 0.9 }}>
            Over Two Decades of Professional Excellence
          </Typography>
        </Container>
      </Box>

      {/* Professional Summary */}
      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 8 }}>
            <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 700, color: 'primary.main' }}>
              Professional Background
            </Typography>
            <Divider sx={{ mb: 3, borderColor: 'secondary.main', borderWidth: 2 }} />
            <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
              With over 24 years of dedicated practice in the field of company secretarial services, CS R. Thamizhvanan
              has established himself as a trusted professional in corporate law, compliance, and governance.
            </Typography>
            <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
              The practice has evolved from handling basic ROC compliance to managing complex corporate restructuring,
              SEBI regulations, and strategic corporate advisory services. Throughout this journey, the commitment to
              professional excellence, ethical practice, and client satisfaction has remained unwavering.
            </Typography>
            <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
              As both an Associate Company Secretary (ACS) and Associate Chartered Accountant (ACA), the dual
              qualification enables a comprehensive understanding of corporate legal and financial matters, providing
              clients with holistic solutions.
            </Typography>
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <Card elevation={3} sx={{ bgcolor: 'secondary.main', color: 'white' }}>
              <CardContent sx={{ p: 4, textAlign: 'center' }}>
                <BusinessCenterIcon sx={{ fontSize: 64, mb: 2 }} />
                <Typography variant="h2" sx={{ fontWeight: 700, mb: 1 }}>
                  24+
                </Typography>
                <Typography variant="h6" sx={{ fontWeight: 600 }}>
                  Years of Practice
                </Typography>
                <Divider sx={{ my: 2, borderColor: 'white' }} />
                <Typography variant="body2" sx={{ opacity: 0.9 }}>
                  Serving diverse clients across industries with dedication and expertise
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>

      {/* Timeline */}
      <Box sx={{ bgcolor: 'background.paper', py: { xs: 6, md: 10 } }}>
        <Container maxWidth="lg">
          <Typography
            variant="h4"
            component="h2"
            align="center"
            gutterBottom
            sx={{ fontWeight: 700, color: 'primary.main', mb: 6 }}
          >
            Professional Journey Timeline
          </Typography>
          <Timeline position="alternate">
            {timelineData.map((item, index) => (
              <TimelineItem key={index}>
                <TimelineOppositeContent sx={{ m: 'auto 0' }} variant="body2" color="text.secondary">
                  <Typography variant="h6" sx={{ fontWeight: 600, color: 'secondary.main' }}>
                    {item.year}
                  </Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineConnector sx={{ bgcolor: index === 0 ? 'transparent' : 'secondary.main' }} />
                  <TimelineDot sx={{ bgcolor: 'primary.main', p: 1.5 }}>{item.icon}</TimelineDot>
                  <TimelineConnector
                    sx={{ bgcolor: index === timelineData.length - 1 ? 'transparent' : 'secondary.main' }}
                  />
                </TimelineSeparator>
                <TimelineContent sx={{ py: 3, px: 2 }}>
                  <Paper elevation={3} sx={{ p: 3 }}>
                    <Typography variant="h6" component="h3" sx={{ fontWeight: 600, color: 'primary.main', mb: 1 }}>
                      {item.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {item.description}
                    </Typography>
                  </Paper>
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </Container>
      </Box>

      {/* Expertise Areas */}
      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
        <Typography
          variant="h4"
          component="h2"
          align="center"
          gutterBottom
          sx={{ fontWeight: 700, color: 'primary.main', mb: 6 }}
        >
          Areas of Expertise
        </Typography>
        <Grid container spacing={3}>
          {expertiseAreas.map((item, index) => (
            <Grid size={{ xs: 12, sm: 6 ,md: 4 }} key={index}>
              <Card
                elevation={3}
                sx={{
                  height: '100%',
                  transition: 'all 0.3s',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: 6,
                    bgcolor: 'primary.main',
                    color: 'white',
                  },
                }}
              >
                <CardContent sx={{ p: 3, textAlign: 'center' }}>
                  <SchoolIcon sx={{ fontSize: 48, color: 'secondary.main', mb: 2 }} />
                  <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                    {item.area}
                  </Typography>
                  <Divider sx={{ my: 2 }} />
                  <Typography variant="h5" sx={{ fontWeight: 700, color: 'secondary.main' }}>
                    {item.years}
                  </Typography>
                  <Typography variant="body2">Years Experience</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Key Achievements */}
      <Box sx={{ bgcolor: 'primary.main', color: 'white', py: { xs: 6, md: 10 } }}>
        <Container maxWidth="lg">
          <Typography variant="h4" component="h2" align="center" gutterBottom sx={{ fontWeight: 700, mb: 6 }}>
            Key Highlights
          </Typography>
          <Grid container spacing={4}>
            <Grid size={{ xs: 12, md: 4 }}>
              <Box sx={{ textAlign: 'center' }}>
                <EmojiEventsIcon sx={{ fontSize: 64, color: 'secondary.main', mb: 2 }} />
                <Typography variant="h4" sx={{ fontWeight: 700, mb: 1 }}>
                  100+
                </Typography>
                <Typography variant="h6">Satisfied Clients</Typography>
              </Box>
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <Box sx={{ textAlign: 'center' }}>
                <VerifiedIcon sx={{ fontSize: 64, color: 'secondary.main', mb: 2 }} />
                <Typography variant="h4" sx={{ fontWeight: 700, mb: 1 }}>
                  500+
                </Typography>
                <Typography variant="h6">Successful Compliances</Typography>
              </Box>
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <Box sx={{ textAlign: 'center' }}>
                <WorkspacePremiumIcon sx={{ fontSize: 64, color: 'secondary.main', mb: 2 }} />
                <Typography variant="h4" sx={{ fontWeight: 700, mb: 1 }}>
                  50+
                </Typography>
                <Typography variant="h6">Corporate Transactions</Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}
