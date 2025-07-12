import React from 'react';
import {
  Box,
  Typography,
  styled,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { featuresData } from '../../Utils/StaticData';
import { motion } from 'framer-motion';
import { colors, typography } from '../../Utils/stylingComponents';

const { title, features, containerStyles, cardStyles, imageStyles } = featuresData;

const SectionWrapper = styled(Box)({
  width: '100%',
  overflow: 'hidden',
  position: 'relative',
  padding: 0,
});

const TopContainer = styled(Box)(({ theme }) => ({
  backgroundColor: '#C5E8D1',
  height: '300px',
  borderTopLeftRadius: containerStyles.borderRadius,
  borderTopRightRadius: containerStyles.borderRadius,
  [theme.breakpoints.only('md')]:{
    height:'400px'
  },
  [theme.breakpoints.up('lg')]:{
    height:'500px'
  },
  [theme.breakpoints.up('xl')]:{
    height:'700px'
  }
}));

const BottomContainer = styled(Box)(({ theme }) => ({
  backgroundColor: '#fff',
  height: '300px',
  borderBottomLeftRadius: containerStyles.borderRadius,
  borderBottomRightRadius: containerStyles.borderRadius,
  border: '1px solid #C5E8D1',
  borderTop: 'none',
  [theme.breakpoints.only('md')]:{
    height:'400px'
  },
  [theme.breakpoints.up('lg')]:{
    height:'500px'
  },
  [theme.breakpoints.up('xl')]:{
    height:'700px'
  }
}));

const Title = styled(Typography)(({ theme }) => ({
  fontSize: typography.h2.fontSize,
  color: colors.primaryDark,
  fontWeight: typography.h2.fontWeight,
  textAlign: 'center',
  padding: theme.spacing(4),
  textShadow: '1px 1px 3px rgba(0,0,0,0.1)',
  [theme.breakpoints.down('md')]: {
    fontSize: '2.5rem',
  },
  [theme.breakpoints.up('xl')]:{
    fontSize: typography.bigscreenh1.fontSize
  }
}));

const CarouselTrack = styled(motion.div)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(4),
  width: 'fit-content',
  padding: theme.spacing(4),
}));

const StaticTrack = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  gap: theme.spacing(4),
  flexWrap: 'wrap',
  padding: theme.spacing(4),
}));

const FeatureCard = styled(Box)(({ theme }) => ({
  backgroundColor: '#fff',
  borderRadius: cardStyles.borderRadius,
  width: '180px',
  height: '260px',
  padding: theme.spacing(3),
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
  border: '1px solid rgba(224, 224, 224, 0.5)',
  flexShrink: 0,
  '& img': {
    width: imageStyles.width,
    height: imageStyles.height,
    objectFit: 'contain',
    marginBottom: theme.spacing(2),
  },
  [theme.breakpoints.only('md')]:{
    width: '160px',
    height: '270px',
    borderRadius: '80px',
    '& img': {
    width: '100px',
    height: '100px',
    objectFit: 'contain',
    marginBottom: theme.spacing(2),
  },
  },
  [theme.breakpoints.up('lg')]:{
    width: '200px',
    height: '300px',
    borderRadius: '80px',
    '& img': {
    width: '100px',
    height: '100px',
    objectFit: 'contain',
    marginBottom: theme.spacing(2),
  },
  },
  [theme.breakpoints.up('xl')]:{
    width: '280px',
    height: '400px',
    borderRadius: '120px',
    '& img': {
    width: '140px',
    height: '140px',
    objectFit: 'contain',
    marginBottom: theme.spacing(2),
  },
  },
}));

const carouselVariants = {
  animate: {
    x: ['0%', '-100%'],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: 'loop',
        duration: 40,
        ease: 'linear',
      },
    },
  },
};

const Feature = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const repeatedFeatures = isMobile ? [...features, ...features, ...features] : features;

  return (
    <SectionWrapper>
      <TopContainer>
        <Title variant="h2">{title}</Title>
      </TopContainer>

      <BottomContainer />

      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          transform: 'translateY(-50%)',
          width: '100%',
          overflow: 'hidden',
          px: 2,
        }}
      >
        {isMobile ? (
          <CarouselTrack variants={carouselVariants} animate="animate">
            {repeatedFeatures.map((feature, index) => (
              <FeatureCard key={index}>
                <img src={feature.image} alt={`Feature ${index + 1}`} />
                <Typography variant="body1" fontWeight={500}>
                  {feature.text}
                </Typography>
              </FeatureCard>
            ))}
          </CarouselTrack>
        ) : (
          <StaticTrack>
            {features.map((feature, index) => (
              <FeatureCard key={index}>
                <img src={feature.image} alt={`Feature ${index + 1}`} />
                <Typography variant="body1" fontWeight={500} sx={{
                  [theme.breakpoints.only('md')]: {
                    fontSize: '15px',
                  },
                  [theme.breakpoints.up('xl')]: {
                    fontSize: typography.h3.fontSize,
                  },
                }}>
                  {feature.text}
                </Typography>
              </FeatureCard>
            ))}
          </StaticTrack>
        )}
      </Box>
    </SectionWrapper>
  );
};

export default Feature;
