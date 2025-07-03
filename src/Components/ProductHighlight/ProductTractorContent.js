import React from 'react';
import { 
  Typography,
  styled,
  Button,
  List,
  ListItem,
  ListItemText,
  Box, 
  useTheme
} from '@mui/material';
import { motion } from 'framer-motion';
import { colors, typography, buttonStyles } from '../../Utils/stylingComponents';
import { homeData } from '../../Utils/StaticData';

const ProductContent = styled(Box)(({ theme }) => ({
  flex: 1,
  paddingTop: theme.spacing(4),
  paddingBottom: theme.spacing(0),
  width: '100%',
  position: 'relative',
  zIndex: 1,
  [theme.breakpoints.down('md')]: {
    width: '100%',
    textAlign: 'center',
  }
}));

const FeatureList = styled(List)(({ theme }) => ({
  margin: theme.spacing(4, 0),
  padding: 0,
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(1),
  [theme.breakpoints.down('md')]: {
    alignItems: 'center',
    textAlign: 'center',
  }
}));

const FeatureItem = styled(ListItem)(({ theme }) => ({
  paddingLeft: 0,
  marginBottom: theme.spacing(1),
  alignItems: 'flex-start',
  '& .MuiListItemText-root': {
    margin: 0,
  },
  '&::before': {
    content: '"✓"',
    marginRight: theme.spacing(2),
    fontSize: '15px',
    color: colors.primary,
    fontWeight: 'bold',
    display: 'inline-block', 
  },
  [theme.breakpoints.down('md')]: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    textAlign: 'center',
    '&::before': {
      display: 'none', 
    },
  }
}));

const FeatureText = styled(Typography)(({ theme }) => ({
  fontSize: typography.featureText.fontSize,
  color: colors.textDark,
  fontWeight: typography.featureText.fontWeight,
  lineHeight: typography.featureText.lineHeight,
}));

const LearnMoreButton = styled(Button)(({ theme }) => ({
  ...buttonStyles.learnMore
}));

const ProductTractorContent = () => {
  const { productHighlight } = homeData;
  const theme = useTheme();
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <ProductContent>
        <Typography
          variant="h2"
          sx={{
            ...typography.h2,
            color: colors.primary,
            mb: 2,
            textShadow: '1px 1px 3px rgba(0,0,0,0.1)',
          }}
        >
          {productHighlight.tag}
        </Typography>

        <Typography
          variant="h3"
          sx={{
            ...typography.h3,
            color: colors.textDark,
            mb: 3,
          }}
        >
          {productHighlight.title}
        </Typography>

        <Typography
          variant="body1"
          sx={{
            ...typography.body1,
            color: colors.textGray,
            mb: 4,
            [theme.breakpoints.down('md')]: {
              alignItems: 'center',
              textAlign: 'center',
            }
          }}
        >
          {productHighlight.description}
        </Typography>

        <FeatureList>
          {productHighlight.productfeatures.map((feature, index) => (
            <FeatureItem key={index}>
              <ListItemText primary={<FeatureText>{feature}</FeatureText>} />
            </FeatureItem>
          ))}
        </FeatureList>

        <LearnMoreButton variant="contained">
          {productHighlight.buttonText}
        </LearnMoreButton>
      </ProductContent>
    </motion.div>
  );
};

export default ProductTractorContent;