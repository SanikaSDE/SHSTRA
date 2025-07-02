import React from 'react';
import { Box, Typography, styled, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import { LatestVideosData, featuresData } from '../../Utils/StaticData';
import { colors, typography } from '../../Utils/stylingComponents';

// Enhanced Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      when: "beforeChildren"
    }
  }
};

const cardVariants = {
  hidden: { 
    y: 50, 
    opacity: 0,
    rotate: -5
  },
  visible: {
    y: 0,
    opacity: 1,
    rotate: 0,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 12,
      mass: 0.5
    }
  },
  hover: {
    y: -15,
    rotate: 1,
    scale: 1.03,
    boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
    transition: {
      duration: 0.4,
      ease: "easeOut"
    }
  },
  tap: {
    scale: 0.98,
    transition: {
      duration: 0.2
    }
  }
};

const titleVariants = {
  hidden: { opacity: 0, y: -30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};

// Pulse animation for continuous attention
const pulseVariants = {
  initial: { scale: 1 },
  pulse: {
    scale: [1, 1.02, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

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
  margin: '0',
  padding: '0',
  overflow: 'hidden',
}));

const TopContainer = styled(Box)(({ theme }) => ({
  backgroundColor: '#C5E8D1',
  height: containerStyles.topHeight,
  margin: '0',
  padding: '0',
}));

const BottomContainer = styled(Box)(({ theme }) => ({
  backgroundColor: '#fff',
  height: containerStyles.bottomHeight,
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

const FeatureCard = styled(motion.div)(({ theme }) => ({
  backgroundColor: '#fff',
  borderRadius: cardStyles.borderRadius,
  width: '180px',
  height: '250px',
  padding: theme.spacing(3),
  border: '1px solid #E0E0E0',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  boxShadow: cardStyles.boxShadow,
  cursor: 'pointer',
  position: 'relative',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '4px',
    backgroundColor: colors.primary,
    transform: 'scaleX(0)',
    transformOrigin: 'left',
    transition: 'transform 0.3s ease'
  },
  '&:hover::before': {
    transform: 'scaleX(1)'
  }
}));

const FeatureText = styled(Typography)(({ theme }) => ({
  fontSize: textStyles.fontSize,
  color: textStyles.color,
  fontWeight: textStyles.fontWeight,
  lineHeight: textStyles.lineHeight,
  marginBottom: theme.spacing(0),
  textAlign: 'center',
  transition: 'all 0.3s ease',
  '&:hover': {
    color: colors.primaryDark
  }
}));

const LatestVideos = () => {
  return (
    <SectionWrapper>
      <TopContainer>
        <Box sx={{ padding: '2rem' }}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={titleVariants}
          >
            <motion.div
              variants={pulseVariants}
              initial="initial"
              whileInView="pulse"
              viewport={{ once: true }}
            >
              <Typography variant="h2" sx={{ 
                fontSize: typography.h2.fontSize, 
                color: colors.primaryDark, 
                fontWeight: typography.h2.fontWeight, 
                textAlign: 'center',
                textShadow: '1px 1px 3px rgba(0,0,0,0.1)'
              }}>
                {title}
              </Typography>
            </motion.div>
          </motion.div>
        </Box>
      </TopContainer>
      
      <BottomContainer />
      
      <FeatureCardsContainer>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
        >
          <Grid container justifyContent="center" spacing={4}>
            {LatestVideoslinks.map((latestvideo, index) => (
              <Grid item key={index} xs={12} sm={6} md={3}>
                <FeatureCard
                  variants={cardVariants}
                  whileHover="hover"
                  whileTap="tap"
                  initial="hidden"
                  animate="visible"
                >
                  <FeatureText>{latestvideo.text}</FeatureText>
                </FeatureCard>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </FeatureCardsContainer>
    </SectionWrapper>
  );
};

export default LatestVideos;