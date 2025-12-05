import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Divider from "@mui/material/Divider";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import GavelIcon from "@mui/icons-material/Gavel";
import AssignmentIcon from "@mui/icons-material/Assignment";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import DescriptionIcon from "@mui/icons-material/Description";
import GroupsIcon from "@mui/icons-material/Groups";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import FactCheckIcon from "@mui/icons-material/FactCheck";
import CorporateFareIcon from "@mui/icons-material/CorporateFare";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import HandshakeIcon from "@mui/icons-material/Handshake";
import VerifiedIcon from "@mui/icons-material/Verified";
import PaidIcon from "@mui/icons-material/Paid";
import BalanceIcon from "@mui/icons-material/Balance";
import SecurityIcon from "@mui/icons-material/Security";
import React from "react";

export function ServicesPage() {
  const routineServices = [
    {
      icon: <AccountBalanceIcon sx={{ fontSize: 48 }} />,
      title: "ROC Compliance",
      description:
        "Annual filing of financial statements, annual returns, and all necessary forms with the Registrar of Companies.",
    },
    {
      icon: <GavelIcon sx={{ fontSize: 48 }} />,
      title: "SEBI Compliance",
      description:
        "Complete compliance for listed companies including quarterly reports, disclosures, and LODR requirements.",
    },
    {
      icon: <AssignmentIcon sx={{ fontSize: 48 }} />,
      title: "Board Meeting Support",
      description:
        "Preparation of agenda, notices, minutes, resolutions, and complete board meeting management.",
    },
    {
      icon: <GroupsIcon sx={{ fontSize: 48 }} />,
      title: "AGM/EGM Conduct",
      description:
        "Complete support for Annual and Extraordinary General Meetings including notice, convening, and minutes.",
    },
    {
      icon: <DescriptionIcon sx={{ fontSize: 48 }} />,
      title: "Secretarial Audit",
      description:
        "Statutory secretarial audit as per Companies Act and issue of secretarial audit reports.",
    },
    {
      icon: <FactCheckIcon sx={{ fontSize: 48 }} />,
      title: "Stock Exchange Compliance",
      description:
        "Regular filings, disclosures, and compliance with BSE, NSE, and other stock exchange requirements.",
    },
    {
      icon: <VerifiedIcon sx={{ fontSize: 48 }} />,
      title: "Corporate Governance",
      description:
        "Implementation of corporate governance norms, policies, and best practices for organizations.",
    },
    {
      icon: <BusinessCenterIcon sx={{ fontSize: 48 }} />,
      title: "Statutory Registers",
      description:
        "Maintenance and updation of all statutory registers and records as required under law.",
    },
  ];

  const specialServices = [
    {
      icon: <CorporateFareIcon sx={{ fontSize: 48 }} />,
      title: "Company Incorporation",
      description:
        "New company registration, obtaining DIN, DSC, and complete incorporation support.",
    },
    {
      icon: <HandshakeIcon sx={{ fontSize: 48 }} />,
      title: "Mergers & Acquisitions",
      description:
        "Complete M&A support including due diligence, documentation, and regulatory approvals.",
    },
    {
      icon: <TrendingUpIcon sx={{ fontSize: 48 }} />,
      title: "Capital Restructuring",
      description:
        "Share capital changes, buyback, issue of securities, and capital restructuring matters.",
    },
    {
      icon: <BalanceIcon sx={{ fontSize: 48 }} />,
      title: "Corporate Restructuring",
      description:
        "Amalgamation, demerger, reconstruction, and all forms of corporate restructuring.",
    },
    {
      icon: <PaidIcon sx={{ fontSize: 48 }} />,
      title: "FEMA Compliance",
      description:
        "Foreign Exchange Management Act compliance, RBI approvals, and cross-border transactions.",
    },
    {
      icon: <AttachMoneyIcon sx={{ fontSize: 48 }} />,
      title: "Fund Raising",
      description:
        "Support for IPO, FPO, private placement, and various fund raising initiatives.",
    },
    {
      icon: <SecurityIcon sx={{ fontSize: 48 }} />,
      title: "Due Diligence",
      description:
        "Legal and secretarial due diligence for transactions, investments, and acquisitions.",
    },
    {
      icon: <BusinessCenterIcon sx={{ fontSize: 48 }} />,
      title: "LLP Services",
      description:
        "Limited Liability Partnership incorporation, compliance, and regulatory support.",
    },
  ];

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
            Our Services
          </Typography>
          <Typography variant="h6" sx={{ opacity: 0.9 }}>
            Comprehensive Corporate Secretarial & Compliance Solutions
          </Typography>
        </Container>
      </Box>

      {/* Routine Compliances Section */}
      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
        <Typography
          variant="h3"
          component="h2"
          gutterBottom
          sx={{
            fontWeight: 700,
            color: "primary.main",
            mb: 2,
            fontSize: { xs: "1.75rem", md: "2.5rem" },
          }}
        >
          Routine Compliances
        </Typography>
        <Typography
          variant="body1"
          paragraph
          sx={{ mb: 4, color: "text.secondary" }}
        >
          Regular compliance services under Companies Act, SEBI, and Stock
          Exchanges
        </Typography>
        <Divider
          sx={{ mb: 5, borderColor: "secondary.main", borderWidth: 2 }}
        />
        <Grid container spacing={3}>
          {routineServices.map((service, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={index}>
              <Card
                elevation={3}
                sx={{
                  height: "100%",
                  transition: "all 0.3s",
                  "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: 6,
                    bgcolor: "primary.main",
                    color: "white",
                    "& .service-icon": {
                      color: "secondary.main",
                    },
                  },
                }}
              >
                <CardContent
                  sx={{
                    p: 3,
                    textAlign: "center",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Box
                    className="service-icon"
                    sx={{ color: "primary.main", mb: 2 }}
                  >
                    {service.icon}
                  </Box>
                  <Typography
                    variant="h6"
                    gutterBottom
                    sx={{ fontWeight: 600, mb: 2 }}
                  >
                    {service.title}
                  </Typography>
                  <Typography variant="body2" sx={{ flexGrow: 1 }}>
                    {service.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Special Assignments Section */}
      <Box sx={{ bgcolor: "background.paper", py: { xs: 6, md: 10 } }}>
        <Container maxWidth="lg">
          <Typography
            variant="h3"
            component="h2"
            gutterBottom
            sx={{
              fontWeight: 700,
              color: "primary.main",
              mb: 2,
              fontSize: { xs: "1.75rem", md: "2.5rem" },
            }}
          >
            Special Assignments & Corporate Law Services
          </Typography>
          <Typography
            variant="body1"
            paragraph
            sx={{ mb: 4, color: "text.secondary" }}
          >
            Strategic corporate advisory and specialized legal services
          </Typography>
          <Divider
            sx={{ mb: 5, borderColor: "secondary.main", borderWidth: 2 }}
          />
          <Grid container spacing={3}>
            {specialServices.map((service, index) => (
              <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={index}>
                <Card
                  elevation={3}
                  sx={{
                    height: "100%",
                    transition: "all 0.3s",
                    "&:hover": {
                      transform: "translateY(-8px)",
                      boxShadow: 6,
                      bgcolor: "secondary.main",
                      color: "primary.main",
                      "& .service-icon": {
                        color: "primary.main",
                      },
                    },
                  }}
                >
                  <CardContent
                    sx={{
                      p: 3,
                      textAlign: "center",
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <Box
                      className="service-icon"
                      sx={{ color: "secondary.main", mb: 2 }}
                    >
                      {service.icon}
                    </Box>
                    <Typography
                      variant="h6"
                      gutterBottom
                      sx={{ fontWeight: 600, mb: 2 }}
                    >
                      {service.title}
                    </Typography>
                    <Typography variant="body2" sx={{ flexGrow: 1 }}>
                      {service.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Why Choose Our Services */}
      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
        <Card
          elevation={4}
          sx={{ p: { xs: 3, md: 5 }, bgcolor: "primary.main", color: "white" }}
        >
          <Typography
            variant="h4"
            component="h2"
            gutterBottom
            sx={{ fontWeight: 700, mb: 3 }}
          >
            Why Choose Our Services
          </Typography>
          <Grid container spacing={3}>
            <Grid size={{ xs: 12, md: 3 }}>
              <Box sx={{ display: "flex", gap: 2 }}>
                <VerifiedIcon sx={{ color: "secondary.main", fontSize: 32 }} />
                <Box>
                  <Typography
                    variant="h6"
                    gutterBottom
                    sx={{ fontWeight: 600 }}
                  >
                    Expert Team
                  </Typography>
                  <Typography variant="body2" sx={{ opacity: 0.9 }}>
                    24+ years of experience with qualified professionals
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <Box sx={{ display: "flex", gap: 2 }}>
                <FactCheckIcon sx={{ color: "secondary.main", fontSize: 32 }} />
                <Box>
                  <Typography
                    variant="h6"
                    gutterBottom
                    sx={{ fontWeight: 600 }}
                  >
                    Timely Compliance
                  </Typography>
                  <Typography variant="body2" sx={{ opacity: 0.9 }}>
                    Ensuring all deadlines and regulatory requirements are met
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <Box sx={{ display: "flex", gap: 2 }}>
                <SecurityIcon sx={{ color: "secondary.main", fontSize: 32 }} />
                <Box>
                  <Typography
                    variant="h6"
                    gutterBottom
                    sx={{ fontWeight: 600 }}
                  >
                    Confidentiality
                  </Typography>
                  <Typography variant="body2" sx={{ opacity: 0.9 }}>
                    Highest standards of professional ethics and client
                    confidentiality
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Card>
      </Container>
    </Box>
  );
}
