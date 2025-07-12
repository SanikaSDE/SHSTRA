import React, { useEffect } from 'react';
import { Box, Typography, Button, styled } from '@mui/material';
import bgImage from '../../Assets/Home_background2.png';
import { heroBannerData } from '../../Utils/StaticData'; 
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {colors, typography, buttonStyles} from '../../Utils/stylingComponents'

const BannerContainer = styled(Box)(({ theme }) => ({
  height: 'auto',
  backgroundImage: `url(${bgImage})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  color: '#fff',
  zIndex: 1,
  overflow: 'hidden',
  padding: theme.spacing(4, 0),

  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.55)',
    zIndex: -1,
  },
}));

const InnerContainer = styled(Box)(({ theme }) => ({
  backgroundColor: 'rgba(0, 0, 0, 0.3)',
  borderRadius: '291px',
  height: '50%',
  width: '60%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: theme.spacing(4, 2),
  [theme.breakpoints.down('md')]:{
    borderRadius: '40px',
    padding: theme.spacing(4,2)
  }
}));

const SubTitle = styled(Typography)(({ theme }) => ({
  fontSize: typography.body1.fontSize,
  fontWeight: typography.body1.fontWeight,
  marginBottom: theme.spacing(1),
  [theme.breakpoints.down('md')]:{
    fontSize: '12px',
    marginBottom: 0
  },
  [theme.breakpoints.up('xl')]:{
    fontSize: typography.h3.fontSize
  }
}));

const MainTitle = styled(Typography)(({ theme }) => ({
  fontSize: typography.h2.fontSize,
  fontWeight: typography.h2.fontWeight,
  padding: theme.spacing(0, 20),
  marginBottom: theme.spacing(3),
  '& span': {
    color: '#17A24A',
  },
  [theme.breakpoints.down('md')]:{
    fontSize: typography.body1.fontSize
  },
  [theme.breakpoints.up('xl')]:{
    fontSize: typography.bigscreenh1.fontSize
  }
}));

const DiscoverButton = styled(Button)(({ theme }) => ({
  fontSize: buttonStyles.button.fontSize,
  width: buttonStyles.button.minWidth,
  height: buttonStyles.button.height,
  fontWeight: buttonStyles.button.fontWeight,
  borderRadius: '4.813rem',
  backgroundColor: colors.primary,
  color: '#fff',
  '&:hover': {
    backgroundColor: '#128a3d',
    transform: 'translateY(-3px)',
  },
  transition: 'all 0.3s ease',
  [theme.breakpoints.down('md')]:{
    fontSize: buttonStyles.mobileviewButton.fontSize,
    fontWeight: buttonStyles.mobileviewButton.fontWeight,
    width: buttonStyles.mobileviewButton.width,
    height: buttonStyles.mobileviewButton.height,
  },
  [theme.breakpoints.up('xl')]:{
    fontSize: typography.h3.fontSize,
    fontWeight: buttonStyles.mobileviewButton.fontWeight,
    width: '500px',
    height: '70px',
  }
}));

const HeroBanner = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: false
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 10
      }
    }
  };

  return (
    <BannerContainer ref={ref}>
      <InnerContainer
        component={motion.div}
        initial="hidden"
        animate={controls}
        variants={containerVariants}
      >
        <SubTitle
          component={motion.div}
          variants={itemVariants}
        >
          {heroBannerData.subTitle}
        </SubTitle>
        
        <MainTitle
          component={motion.div}
          variants={itemVariants}
          dangerouslySetInnerHTML={{ __html: heroBannerData.mainTitle }}
        />
        
        <DiscoverButton
          component={motion.div}
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {heroBannerData.buttonText}
        </DiscoverButton>
      </InnerContainer>
    </BannerContainer>
  );
};

export default HeroBanner;