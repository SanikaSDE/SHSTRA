import React from 'react';
import { Box, Grid, Typography, Link, styled, Divider } from '@mui/material';
import { footerData } from '../../Utils/StaticData';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

const textStyles = {
  body1: {
    fontSize: '1.5rem',
    lineHeight: 1.6,
    mb: 2
  },
  h6: {
    fontWeight: 'bold',
    fontSize: '1.5rem',
    mb: 2
  },
  body2: {
    opacity: 0.8
  }
};

const flexStyles = {
  center: {
    display: 'flex',
    alignItems: 'center'
  },
  socialContainer: {
    display: 'flex',
    mt: 2
  }
};

const FooterContainer = styled(Box)(({ theme }) => ({
  backgroundColor: '#3c472c',
  color: '#fff',
  padding: theme.spacing(6, 4),
  margin: '0 auto',
  width: '100%'
}));

const Logo = styled('img')({
  height: '4.5rem',
  width: 'auto',
  marginBottom: '1.5rem',
  filter: 'brightness(0) invert(1)'
});

const FooterLink = styled(Link)(({ theme }) => ({
  color: '#fff',
  display: 'block',
  fontSize: '1.5rem',
  marginBottom: theme.spacing(1),
  textDecoration: 'none',
  transition: 'all 0.3s ease',
  '&:hover': {
    color: '#C5E8D1',
    transform: 'translateX(5px)'
  }
}));

const SocialIcon = styled(Box)(({ theme }) => ({
  ...flexStyles.center,
  justifyContent: 'center',
  backgroundColor: 'rgba(255, 255, 255, 0.1)',
  borderRadius: '50%',
  height: '3.5rem',
  marginRight: theme.spacing(1.5),
  transition: 'all 0.3s ease',
  width: '3.5rem',
  '&:hover': {
    backgroundColor: '#C5E8D1',
    color: '#3c472c',
    transform: 'translateY(-3px)'
  }
}));

const ContactItem = styled(Typography)({
  ...flexStyles.center,
  ...textStyles.body1,
  mb: 1.5
});

const Footer = () => {
  const renderSocialIcon = (iconName) => {
    switch (iconName) {
      case 'facebook': return <FacebookIcon />;
      case 'twitter': return <TwitterIcon />;
      case 'linkedin': return <LinkedInIcon />;
      case 'instagram': return <InstagramIcon />;
      default: return null;
    }
  };

  return (
    <FooterContainer>
      <Grid container spacing={6} margin="0 auto">
        {/* Company Info */}
        <Grid item xs={12} md={4} maxWidth={'30rem'}>
          <Logo src={footerData.companyInfo.logo} alt="Company Logo" />
          <Typography variant="body1" sx={textStyles.body1}>
            {footerData.companyInfo.description}
          </Typography>
          <Box sx={flexStyles.socialContainer}>
            {footerData.companyInfo.socialLinks.map((social, index) => (
              <SocialIcon key={index}>{renderSocialIcon(social.icon)}</SocialIcon>
            ))}
          </Box>
        </Grid>

        {/* Quick Links */}
        <Grid item xs={6} md={2}>
          <Typography variant="h6" sx={textStyles.h6}>
            Quick Links
          </Typography>
          <Box>
            {footerData.quickLinks.map((link, index) => (
              <FooterLink href={link.url} key={index}>{link.title}</FooterLink>
            ))}
          </Box>
        </Grid>

        {/* Contact Info */}
        <Grid item xs={12} md={4}>
          <Typography variant="h6" sx={textStyles.h6}>
            Contact Us
          </Typography>
          {footerData.contactInfo.map((contact, index) => (
            <ContactItem key={index}>
              {contact.icon} {contact.text}
            </ContactItem>
          ))}
        </Grid>

        {/* Divider */}
        <Grid item xs={12}>
          <Divider sx={{ borderColor: 'rgba(255, 255, 255, 0.2)', my: 2 }} />
        </Grid>

        {/* Copyright */}
        <Grid item xs={12}>
          <Typography variant="body2" align="center" sx={textStyles.body2}>
            {footerData.copyright}
          </Typography>
          <Typography variant="body2" align="center" sx={{ ...textStyles.body2, mt: 1 }}>
            {footerData.legalLinks.map((link, index) => (
              <React.Fragment key={index}>
                <FooterLink href={link.url} sx={{ display: 'inline', mx: 1 }}>
                  {link.title}
                </FooterLink>
                {index < footerData.legalLinks.length - 1 && ' | '}
              </React.Fragment>
            ))}
          </Typography>
        </Grid>
      </Grid>
    </FooterContainer>
  );
};

export default Footer;