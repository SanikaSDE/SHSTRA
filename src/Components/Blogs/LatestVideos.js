// src/Components/Feature/Feature.js
import React from 'react';
import { Box, Typography, styled, Grid } from '@mui/material';
import { LatestVideosData, featuresData } from '../../Utils/StaticData';

// Destructure the data
const { LatestVideoslinks, title } = LatestVideosData;
const {
  containerStyles,
  cardStyles,
  imageStyles,
  textStyles
} = featuresData;

const SectionWrapper = styled(Box)(({ theme }) => ({
  width: '100%',
  position: 'relative',
  height: `${parseInt(containerStyles.topHeight) + parseInt(containerStyles.bottomHeight)}rem`,
  margin: '0',
  padding: '0',
}));

const TopContainer = styled(Box)(({ theme }) => ({
  backgroundColor: '#C5E8D1',
  width: '100%',
  height: containerStyles.topHeight,
//   borderTopLeftRadius: containerStyles.borderRadius,
//   borderTopRightRadius: containerStyles.borderRadius,
  margin: '0',
  padding: '0',
}));

const BottomContainer = styled(Box)(({ theme }) => ({
  backgroundColor: '#fff',
  width: '100%',
  height: containerStyles.bottomHeight,
//   borderBottomLeftRadius: containerStyles.borderRadius,
//   borderBottomRightRadius: containerStyles.borderRadius,
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
  padding: theme.spacing(3),
  border: '1px solid #E0E0E0',
//   textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
//   justifyContent: 'center',
  boxShadow: cardStyles.boxShadow,
}));

const FeatureImage = styled(Box)(({ theme }) => ({
  width: imageStyles.width,
  height: imageStyles.height,
  marginBottom: theme.spacing(2),
  '& img': {
    width: '100%',
    height: '100%',
    objectFit: 'contain',
  },
}));

const FeatureText = styled(Typography)(({ theme }) => ({
  fontSize: textStyles.fontSize,
  color: textStyles.color,
  fontWeight: textStyles.fontWeight,
  lineHeight: textStyles.lineHeight,
  marginBottom: theme.spacing(0),
  alignItems: 'flex-end'
}));

const LatestVideos = () => {
  return (
    <SectionWrapper>
      <TopContainer>
        <Box sx={{ padding: '2rem' }}>
          <Typography variant="h2" sx={{ 
            fontSize: '4rem', 
            color: '#337D51', 
            fontWeight: 700, 
            textAlign: 'center' 
          }}>
            {title}
          </Typography>
        </Box>
      </TopContainer>
      
      <BottomContainer />
      
      <FeatureCardsContainer>
        <Grid container justifyContent="center" spacing={4}>
          {LatestVideoslinks.map((latestvideo, index) => (
            <Grid item key={index} xs={12} sm={6} md={3}>
              <FeatureCard>
                <FeatureText>{latestvideo.text}</FeatureText>
              </FeatureCard>
            </Grid>
          ))}
        </Grid>
      </FeatureCardsContainer>
    </SectionWrapper>
  );
};

export default LatestVideos;