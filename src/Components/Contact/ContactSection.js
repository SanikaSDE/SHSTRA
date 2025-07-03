import React from 'react';
import { Box, Typography, TextField, Button, Grid, styled, Container, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import PhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { contactData } from '../../Utils/StaticData';
import pngwingright from '../../Assets/pngwingright.png'
import pngwingleft from '../../Assets/pngwingleft.png'
import { colors, typography, buttonStyles } from '../../Utils/stylingComponents';

const SectionContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  margin: '0 auto',
  backgroundColor: colors.white,
  padding: theme.spacing(6, 0),
  position: 'relative',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'linear-gradient(135deg, #f5f5f5 0%, #ffffff 100%)',
    zIndex: 0,
    opacity: 0.5,
  },
}));

const ContentContainer = styled(Box)(({ theme }) => ({
  width: '500px',
  height: '400px',
  position: 'relative',
  zIndex: 1,
  [theme.breakpoints.down('md')]: {
  width: '100%',
  height: 'auto',
  paddingBottom: theme.spacing(4),
}

}));

const InfoBox = styled(Box)(({ theme }) => ({
  paddingRight: theme.spacing(8),
  flex: 1,
  [theme.breakpoints.down('md')]: {
    paddingRight: 0,
    textAlign: 'center',
  }
}));

const ContactFormBox = styled(Box)(({ theme }) => ({
  backgroundColor: '#C5E8D1',
  borderRadius: '16px',
  padding: theme.spacing(4),
  width: '350px',
  height: '400px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
  position: 'relative',
  margin: '0 auto',
  zIndex: 1,
  '&::after': {
    content: '""',
    position: 'absolute',
    top: -10,
    left: -10,
    right: -10,
    bottom: -10,
    borderRadius: '24px',
    border: '2px solid #17A24A',
    zIndex: -1,
    opacity: 0.3,
    pointerEvents: 'none',
  },
  [theme.breakpoints.down('md')]: {
  width: '70%',
  height: 'auto',
  padding: theme.spacing(3),
}
}));

const TitleText = styled(Typography)(({ theme }) => ({
  fontWeight: typography.h2.fontWeight,
  color: colors.primary,
  fontSize: typography.h2.fontSize,
  lineHeight: typography.h2.lineHeight,
  textShadow: '1px 1px 2px rgba(0,0,0,0.1)',
  gutterBottom: true,
  [theme.breakpoints.down('md')]: {
    // fontSize: '2.5rem',
    textAlign: 'center'
  }
}));

const CompanyText = styled(Typography)(({ theme }) => ({
  color: colors.textDark,
  fontSize: typography.h3.fontSize,
  fontWeight: typography.h3.fontWeight,
  lineHeight: typography.h3.lineHeight,
  gutterBottom: true,
  [theme.breakpoints.down('md')]: {
    // fontSize: '1.8rem',
    textAlign: 'center'
  }
}));

const DescriptionText = styled(Typography)(({ theme }) => ({
  color: colors.textGray,
  fontSize: typography.body1.fontSize,
  fontWeight: typography.body1.fontWeight,
  lineHeight: typography.body1.lineHeight,
  paragraph: true,
  lineHeight: 1.7,
  [theme.breakpoints.down('md')]: {
    // fontSize: '1rem',
    textAlign: 'center'
  }
}));

const ContactText = styled(Typography)(({ theme }) => ({
  margin: theme.spacing(1, 0),
  display: 'flex',
  alignItems: 'center',
  fontSize: typography.featureText.fontSize,
  fontWeight: typography.featureText.fontWeight,
  lineHeight: typography.featureText.lineHeight,
  color: colors.black,
  transition: 'all 0.3s ease',
  '&:hover': {
    color: colors.primary,
    transform: 'translateX(5px)',
  },
  [theme.breakpoints.down('md')]: {
    fontSize: '1.5rem',
    justifyContent: 'center',
    '&:hover': {
      transform: 'none',
    }
  }
}));

const IconWrapper = styled(Box)(({ theme }) => ({
  marginRight: theme.spacing(2),
  color: colors.primary,
  fontSize: typography.featureText.fontSize,
  lineHeight: typography.featureText.lineHeight,
  transition: 'all 0.3s ease',
  [theme.breakpoints.down('md')]: {
    fontSize: '2rem',
  }
}));

const RoundedTextField = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    borderRadius: '1.563rem',
    backgroundColor: colors.white,
    boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
    '& fieldset': {
      borderColor: colors.white,
    },
    '&:hover fieldset': {
      borderColor: colors.primary,
    },
    '&.Mui-focused fieldset': {
      borderColor: colors.primary,
      boxShadow: '0 0 0 2px rgba(23, 162, 74, 0.2)',
    },
  },
  '& .MuiInputLabel-root': {
    color: colors.black,
    fontSize: typography.lableText.fontSize,
  },
  '& .MuiInputBase-input': {
    color: colors.black,
    fontSize: typography.lableText.fontSize,
  },
  '& .MuiInputBase-inputMultiline': {
    fontSize: typography.lableText.fontSize,
  },
  [theme.breakpoints.down('md')]: {
    '& .MuiInputLabel-root': {
      fontSize: '1rem',
    },
    '& .MuiInputBase-input': {
      fontSize: '1rem',
    },
    '& .MuiInputBase-inputMultiline': {
      fontSize: '1rem',
    },
  }
}));

const SubmitButton = styled(Button)(({ theme }) => ({
  width: buttonStyles.button.minWidth,
  height: buttonStyles.button.height,
  backgroundColor: colors.primary,
  borderRadius: buttonStyles.button.borderRadius,
  color: colors.white,
  fontSize: buttonStyles.button.fontSize,
  fontWeight: buttonStyles.button.fontWeight,
  lineHeight: typography.featureText.lineHeight,
  padding: '12px 40px',
  boxShadow: '0 4px 6px rgba(23, 162, 74, 0.3)',
  transition: 'all 0.3s ease',
  '&:hover': {
    backgroundColor: '#128a3d',
    transform: 'translateY(-3px)',
    boxShadow: '0 6px 10px rgba(23, 162, 74, 0.4)',
  },
  '&:active': {
    transform: 'translateY(0)',
  },
  [theme.breakpoints.down('md')]: {
    width: '100%',
    height: '3.5rem',
    fontSize: '1.2rem',
  }
}));

const BambooDecorationRight = styled('img')(({ theme }) => ({
  position: 'absolute',
  bottom: 0,
  right: 0,
  width: '150px',
  height: '250px',
  opacity: 0.9,
  zIndex: 0,
  [theme.breakpoints.down('md')]: {
    display: 'none',
  }
}));

const BambooDecorationLeft = styled('img')(({ theme }) => ({
  position: 'absolute',
  bottom: 0,
  left: 0,
  width: '150px',
  height: '250px',
  opacity: 0.9,
  zIndex: 0,
  [theme.breakpoints.down('md')]: {
    display: 'none',
  }
}));

const FormContainer = styled(Container)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  gap: theme.spacing(2),
  marginBottom: theme.spacing(3),
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    gap: theme.spacing(2),
    padding: 0
  }
}));

const MessageContainer = styled(Container)(({ theme }) => ({
  marginBottom: theme.spacing(3),
  [theme.breakpoints.down('md')]: {
    padding: 0
  }
}));

const ContactSection = () => {
  const theme = useTheme();
  
  const renderIcon = (iconName) => {
    switch (iconName) {
      case 'phone':
        return <PhoneIcon fontSize="inherit" />;
      case 'email':
        return <EmailIcon fontSize="inherit" />;
      case 'location':
        return <LocationOnIcon fontSize="inherit" />;
      default:
        return null;
    }
  };

  return (
    <SectionContainer>
      <BambooDecorationLeft src={pngwingleft} alt="bamboo decoration" />
      <Grid
          container
          spacing={4}
          alignItems="center"
          justifyContent="center"
          direction={{ xs: 'column', md: 'row' }}
          sx={{ minHeight: '100vh', textAlign: { xs: 'center', md: 'left' } }}
        >
        {/* Left Info Section */}
        <Grid item xs={12} md={6}>
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <ContentContainer>
              <InfoBox>
                <TitleText variant="h2" sx={{
                            ...typography.h2,
                            color: colors.primary,
                            mb: 2,
                            textShadow: '1px 1px 3px rgba(0,0,0,0.1)',
                          }}>
                  {contactData.title}
                </TitleText>
                <CompanyText variant="h3" sx={{
                            ...typography.h3,
                            color: colors.textDark,
                            mb: 3,
                          }}>
                  {contactData.companyName}
                </CompanyText>
                <DescriptionText variant="body1" sx={{
                            ...typography.body1,
                            color: colors.textGray,
                            mb: 4,
                             [theme.breakpoints.down('md')]: {
                              alignItems: 'center',
                              textAlign: 'center',
                              paddingLeft: theme.spacing(10),
                              paddingRight: theme.spacing(10),
                  }}}>
                  {contactData.description}
                </DescriptionText>

                {contactData.contactInfo.map((info, index) => (
                  <ContactText key={index} sx={{mb:3}}>
                    <IconWrapper>{renderIcon(info.icon)}</IconWrapper>
                    {info.text}
                  </ContactText>
                ))}
              </InfoBox>
            </ContentContainer>
          </motion.div>
        </Grid>

        {/* Right Form Section */}
        <Grid item xs={12} md={6}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <ContactFormBox>
              <Grid container spacing={2}>
                <FormContainer>
                  <Grid item xs={12} sm={6}>
                    <RoundedTextField
                      fullWidth
                      label={contactData.formFields.name.label}
                      variant="outlined"
                      sx={{
                        width: "150px",
                        '& .MuiOutlinedInput-root': {
                          height: "50px",
                        },
                        [theme.breakpoints.down('md')]: {
                          width: '100%',
                        }
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <RoundedTextField
                      fullWidth
                      label={contactData.formFields.email.label}
                      variant="outlined"
                      sx={{
                        width: "150px",
                        '& .MuiOutlinedInput-root': {
                          height: "50px",
                        },
                        [theme.breakpoints.down('md')]: {
                          width: '100%',
                        }
                      }}
                    />
                  </Grid>
                </FormContainer>

                <MessageContainer>
                  <Grid item xs={12}>
                    <RoundedTextField
                      fullWidth
                      label={contactData.formFields.message.label}
                      variant="outlined"
                      multiline
                      rows={contactData.formFields.message.rows}
                      sx={{
                        width: "310px",
                        '& .MuiOutlinedInput-root': {
                          height: "100px",
                        },
                        [theme.breakpoints.down('md')]: {
                          width: '100%',
                        }
                      }}
                    />
                  </Grid>
                </MessageContainer>
              </Grid>
              <Grid item xs={12}>
                  <Box display="flex" justifyContent="center" alignItems={'center'} mt={4}>
                    <SubmitButton variant="contained">
                      {contactData.formFields.button.text}
                    </SubmitButton>
                  </Box>
                </Grid>
            </ContactFormBox>
          </motion.div>
        </Grid>
      </Grid>

      <BambooDecorationRight src={pngwingright} alt="bamboo decoration" />
    </SectionContainer>
  );
};

export default ContactSection;