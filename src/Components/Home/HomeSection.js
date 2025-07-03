import React from 'react';
import { 
  Box,
  Typography,
  styled,
  Container,
  Button,
  useMediaQuery,
  useTheme
} from '@mui/material';
import { homeData } from '../../Utils/StaticData';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { colors, typography, buttonStyles} from '../../Utils/stylingComponents'

const PRIMARY_COLOR = '#FFFFFF';
const SECONDARY_COLOR = '#17A24A';

const BackgroundImage = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  height: '100%',
  width: '100%',
  backgroundImage: `url(${homeData.backgroundImage})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  borderBottomLeftRadius: theme.breakpoints.down('sm') ? '4rem' : '10.0625rem',
  borderBottomRightRadius: theme.breakpoints.down('sm') ? '4rem' : '8.3125rem',
  opacity: 1,
  zIndex: -1,
}));

const HeroContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '100vh',
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  color: colors.white,
  // padding: theme.spacing(0, 2),
}));

const ContentContainer = styled(Container)(({ theme }) => ({
  position: 'relative',
  zIndex: 1,
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center'
  // maxWidth: '1200px !important',
}));

const SectionsContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: 0,
  // alignItems: 'flex-start',
  marginBottom: theme.spacing(4),
  width: '100%',
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  width: '100%',
  color: colors.white,
  textAlign: 'center',
  marginBottom: 0,
  fontWeight: typography.h1.fontWeight,
  textShadow: '1px 1px 3px rgba(0, 0, 0, 0.5)',
  fontSize: typography.h1.fontSize,
}));

const ExploreButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(4),
  padding: theme.spacing(1.5, 3),
  fontSize: buttonStyles.button.fontSize,
  borderRadius: buttonStyles.button.borderRadius,
  width: buttonStyles.button.minWidth,
  height: buttonStyles.button.height,
  backgroundColor: colors.primary,
  color: colors.white,
  '&:hover': {
    backgroundColor: colors.primaryDark,
  },
}));

const HomeSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <HeroContainer>
      <BackgroundImage />

      <ContentContainer maxWidth={false} ref={ref}>
        <SectionsContainer>
          {homeData.sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: isMobile ? -20 : -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ 
                duration: isMobile ? 0.4 : 0.6, 
                delay: index * (isMobile ? 0.2 : 0.3) 
              }}
            >
              <SectionTitle variant="h1">
                {section.title}
              </SectionTitle>
            </motion.div>
          ))}
        </SectionsContainer>

        <motion.div
          initial={{ opacity: 0, y: isMobile ? 20 : 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ 
            duration: isMobile ? 0.6 : 0.8, 
            delay: isMobile ? 0.6 : 1 
          }}
        >
          <ExploreButton variant="contained">
            Explore Products
          </ExploreButton>
        </motion.div>
      </ContentContainer>
    </HeroContainer>
  );
};

export default HomeSection;