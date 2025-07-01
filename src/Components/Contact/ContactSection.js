import React from 'react';
import { Box, Typography, TextField, Button, Grid, styled, Container, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import PhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { contactData } from '../../Utils/StaticData';
import pngwingright from '../../Assets/pngwingright.png'
import pngwingleft from '../../Assets/pngwingleft.png'

const SectionContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  maxWidth: '100%',
  margin: '0 auto',
  backgroundColor: '#fff',
  padding: theme.spacing(10),
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
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(4),
  }
}));

const ContentContainer = styled(Box)(({ theme }) => ({
  width: '42.188rem',
  height: '47.25rem',
  position: 'relative',
  zIndex: 1,
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    height: 'auto',
    paddingBottom: theme.spacing(4),
  }
}));

const InfoBox = styled(Box)(({ theme }) => ({
  paddingRight: theme.spacing(8),
  flex: 1,
  [theme.breakpoints.down('sm')]: {
    paddingRight: 0,
    textAlign: 'center',
  }
}));

const ContactFormBox = styled(Box)(({ theme }) => ({
  backgroundColor: '#C5E8D1',
  borderRadius: '16px',
  padding: theme.spacing(4),
  width: '42.188rem',
  height: '47.25rem',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
  position: 'relative',
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
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    height: 'auto',
    padding: theme.spacing(3),
  }
}));

const TitleText = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  color: '#17A24A',
  fontSize: '4rem',
  textShadow: '1px 1px 2px rgba(0,0,0,0.1)',
  gutterBottom: true,
  [theme.breakpoints.down('sm')]: {
    fontSize: '2.5rem',
    textAlign: 'center'
  }
}));

const CompanyText = styled(Typography)(({ theme }) => ({
  color: 'text.secondary',
  fontSize: '3rem',
  fontWeight: 500,
  gutterBottom: true,
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.8rem',
    textAlign: 'center'
  }
}));

const DescriptionText = styled(Typography)(({ theme }) => ({
  color: 'text.secondary',
  fontSize: '1.5rem',
  fontWeight: 300,
  paragraph: true,
  lineHeight: 1.7,
  [theme.breakpoints.down('sm')]: {
    fontSize: '1rem',
    textAlign: 'center'
  }
}));

const ContactText = styled(Typography)(({ theme }) => ({
  margin: theme.spacing(1, 0),
  display: 'flex',
  alignItems: 'center',
  fontSize: '2.25rem',
  fontWeight: 300,
  color: '#333',
  transition: 'all 0.3s ease',
  '&:hover': {
    color: '#17A24A',
    transform: 'translateX(5px)',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.5rem',
    justifyContent: 'center',
    '&:hover': {
      transform: 'none',
    }
  }
}));

const IconWrapper = styled(Box)(({ theme }) => ({
  marginRight: theme.spacing(2),
  color: '#17A24A',
  fontSize: '3rem',
  transition: 'all 0.3s ease',
  [theme.breakpoints.down('sm')]: {
    fontSize: '2rem',
  }
}));

const RoundedTextField = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    borderRadius: '1.563rem',
    backgroundColor: 'white',
    boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
    '& fieldset': {
      borderColor: 'white',
    },
    '&:hover fieldset': {
      borderColor: '#17A24A',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#17A24A',
      boxShadow: '0 0 0 2px rgba(23, 162, 74, 0.2)',
    },
  },
  '& .MuiInputLabel-root': {
    color: 'black',
    fontSize: '1.5rem',
  },
  '& .MuiInputBase-input': {
    color: 'black',
    fontSize: '1.5rem',
  },
  '& .MuiInputBase-inputMultiline': {
    fontSize: '1.5rem',
  },
  [theme.breakpoints.down('sm')]: {
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
  width: '18.813rem',
  height: '4.375rem',
  backgroundColor: '#17A24A',
  borderRadius: '2rem',
  color: '#fff',
  fontSize: '1.5rem',
  fontWeight: 600,
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
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    height: '3.5rem',
    fontSize: '1.2rem',
  }
}));

const BambooDecorationRight = styled('img')(({ theme }) => ({
  position: 'absolute',
  bottom: 0,
  right: 0,
  width: '20rem',
  height: '30rem',
  opacity: 0.9,
  zIndex: 0,
  [theme.breakpoints.down('sm')]: {
    display: 'none',
  }
}));

const BambooDecorationLeft = styled('img')(({ theme }) => ({
  position: 'absolute',
  bottom: 0,
  left: 0,
  width: '20rem',
  height: '30rem',
  opacity: 0.9,
  zIndex: 0,
  [theme.breakpoints.down('sm')]: {
    display: 'none',
  }
}));

const FormContainer = styled(Container)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  gap: theme.spacing(2),
  marginBottom: theme.spacing(3),
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    gap: theme.spacing(2),
    padding: 0
  }
}));

const MessageContainer = styled(Container)(({ theme }) => ({
  marginBottom: theme.spacing(3),
  [theme.breakpoints.down('sm')]: {
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
      <Grid container spacing={4} alignItems="center" justifyContent="center" direction={{ xs: 'column', md: 'row' }}>
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
                <TitleText variant="h4">
                  {contactData.title}
                </TitleText>
                <CompanyText variant="h5">
                  {contactData.companyName}
                </CompanyText>
                <DescriptionText variant="body1">
                  {contactData.description}
                </DescriptionText>

                {contactData.contactInfo.map((info, index) => (
                  <ContactText key={index}>
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
                        width: contactData.formFields.name.width,
                        '& .MuiOutlinedInput-root': {
                          height: contactData.formFields.name.height,
                        },
                        [theme.breakpoints.down('sm')]: {
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
                        width: contactData.formFields.email.width,
                        '& .MuiOutlinedInput-root': {
                          height: contactData.formFields.email.height,
                        },
                        [theme.breakpoints.down('sm')]: {
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
                        width: contactData.formFields.message.width,
                        '& .MuiOutlinedInput-root': {
                          height: contactData.formFields.message.height,
                        },
                        [theme.breakpoints.down('sm')]: {
                          width: '100%',
                        }
                      }}
                    />
                  </Grid>
                </MessageContainer>

                <Grid item xs={12}>
                  <Box display="flex" justifyContent="center" mt={4}>
                    <SubmitButton variant="contained">
                      {contactData.formFields.button.text}
                    </SubmitButton>
                  </Box>
                </Grid>
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