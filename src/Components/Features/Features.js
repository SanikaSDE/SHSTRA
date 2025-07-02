import React from 'react';
import { Box, Typography, styled, Grid } from '@mui/material';
import { featuresData } from '../../Utils/StaticData';
import { motion } from 'framer-motion';
import { colors, typography } from '../../Utils/stylingComponents';

const {
  title,
  features,
  containerStyles,
  cardStyles,
  imageStyles,
  textStyles
} = featuresData;

const SectionWrapper = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '100%',
  position: 'relative',
  margin: '0',
  padding: '0',
}));

const TopContainer = styled(Box)(({ theme }) => ({
  backgroundColor: '#C5E8D1',
  height: '300px',
  borderTopLeftRadius: containerStyles.borderRadius,
  borderTopRightRadius: containerStyles.borderRadius,
  margin: '0',
  padding: '0',
}));

const BottomContainer = styled(Box)(({ theme }) => ({
  backgroundColor: '#fff',
  height: '300px',
  borderBottomLeftRadius: containerStyles.borderRadius,
  borderBottomRightRadius: containerStyles.borderRadius,
  border: '1px solid #C5E8D1',
  borderTop: 'none',
  margin: '0',
  padding: '0',
}));

const FeatureCardsContainer = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '100%',
  padding: '0',
}));

const FeatureCard = styled(Box)(({ theme }) => ({
  backgroundColor: '#fff',
  borderRadius: cardStyles.borderRadius,
  width: '180px',
  height: '300px',
  padding: theme.spacing(4),
  border: '1px solid rgba(224, 224, 224, 0.5)',
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  boxShadow: '0 15px 30px rgba(0, 0, 0, 0.05)',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-10px)',
    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
    borderColor: '#17A24A',
  },
}));

const FeatureImage = styled(Box)(({ theme }) => ({
 width: imageStyles.width,
  height: imageStyles.height,
  marginBottom: theme.spacing(4),
  padding: theme.spacing(2),
  '& img': {
    width: '100%',
    height: '100%',
    objectFit: 'contain',
    transition: 'transform 0.3s ease',
  },
  '&:hover img': {
    transform: 'scale(1.05)',
  },
}));

const FeatureText = styled(Typography)(({ theme }) => ({
  fontSize: typography.featureText.fontSize,
  color: colors.black,
  fontWeight: typography.featureText.fontWeight,
  lineHeight: typography.featureText.lineHeight,
}));

const Title = styled(Typography)(({ theme }) => ({
  fontSize: typography.h2.fontSize,
  color: colors.primaryDark,
  fontWeight: typography.h2.fontWeight,
  textAlign: 'center',
  padding: theme.spacing(4),
  textShadow: '1px 1px 3px rgba(0,0,0,0.1)',
  [theme.breakpoints.down('md')]: {
    fontSize: '3rem',
  },
}));



const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: 'easeOut' } },
};


const Feature = () => {
  return (
    <SectionWrapper>
      <TopContainer>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Title variant="h2">
            {title}
          </Title>
        </motion.div>
      </TopContainer>

      <BottomContainer />

      <FeatureCardsContainer>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <Grid container justifyContent="center" spacing={4}>
            {features.map((feature, index) => (
              <Grid item key={index} xs={12} sm={6} md={3}>
                <motion.div variants={cardVariants}>
                  <FeatureCard>
                    <FeatureImage>
                      <img src={feature.image} alt={`Feature ${index + 1}`} />
                    </FeatureImage>
                    <FeatureText>{feature.text}</FeatureText>
                  </FeatureCard>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </FeatureCardsContainer>
    </SectionWrapper>
  );
};

export default Feature;