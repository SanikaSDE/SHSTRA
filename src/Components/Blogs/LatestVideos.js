import React from 'react';
import {
  Box,
  Typography,
  styled,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { motion } from 'framer-motion';
import { LatestVideosData, featuresData } from '../../Utils/StaticData';
import { colors, typography } from '../../Utils/stylingComponents';

const { LatestVideoslinks, title } = LatestVideosData;
const {
  containerStyles,
  cardStyles,
  textStyles
} = featuresData;

const SectionWrapper = styled(Box)({
  width: '100%',
  position: 'relative',
  margin: '0',
  padding: '0',
  overflow: 'hidden',
});

const TopContainer = styled(Box)(({ theme }) => ({
  backgroundColor: '#C5E8D1',
  height: containerStyles.topHeight,
  [theme.breakpoints.only('md')]:{
    height:'400px'
  },
  [theme.breakpoints.up('xl')]:{
    height:'700px'
  }
}));

const BottomContainer = styled(Box)(({ theme }) => ({
  backgroundColor: '#fff',
  height: containerStyles.bottomHeight,
  border: '1px solid #C5E8D1',
  borderTop: 'none',
  [theme.breakpoints.only('md')]:{
    height:'400px'
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
    fontSize: typography.h3.fontSize
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
  [theme.breakpoints.up('xl')]:{
    gap: theme.spacing(10)
  }
}));

const FeatureCard = styled(Box)(({ theme }) => ({
  backgroundColor: '#fff',
  borderRadius: cardStyles.borderRadius,
  width: '180px',
  height: '250px',
  padding: theme.spacing(3),
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  boxShadow: cardStyles.boxShadow,
  border: '1px solid rgba(224, 224, 224, 0.5)',
  flexShrink: 0,
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

const FeatureText = styled(Typography)(({ theme }) => ({
  fontSize: textStyles.fontSize,
  color: textStyles.color,
  fontWeight: textStyles.fontWeight,
  lineHeight: textStyles.lineHeight,
  textAlign: 'center',
  transition: 'all 0.3s ease',
  '&:hover': {
    color: colors.primaryDark,
  },
  [theme.breakpoints.up('xl')]:{
    fontSize: typography.h3.fontSize
  }
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

const LatestVideos = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  // Repeat cards only for mobile carousel
  const repeatedCards = isMobile ? [...LatestVideoslinks, ...LatestVideoslinks, ...LatestVideoslinks] : LatestVideoslinks;

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
            {repeatedCards.map((item, index) => (
              <FeatureCard key={index}>
                <FeatureText>{item.text}</FeatureText>
              </FeatureCard>
            ))}
          </CarouselTrack>
        ) : (
          <StaticTrack>
            {LatestVideoslinks.map((item, index) => (
              <FeatureCard key={index}>
                <FeatureText>{item.text}</FeatureText>
              </FeatureCard>
            ))}
          </StaticTrack>
        )}
      </Box>
    </SectionWrapper>
  );
};

export default LatestVideos;
