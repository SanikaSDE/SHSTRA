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
import { homeData } from '../../Utils/StaticData';

const ProductContent = styled(Box)(({ theme }) => ({
  flex: 1,
  padding: theme.spacing(4),
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
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  }
}));



const FeatureItem = styled(ListItem)(({ theme }) => ({
  paddingLeft: 0,
  marginBottom: theme.spacing(1),
  alignItems: 'flex-start',
  '& .MuiListItemText-root': {
    margin: 0,
  },
  // Default "✓" icon for desktop and tablet
  '&::before': {
    content: '"✓"',
    marginRight: theme.spacing(2),
    fontSize: '1.5rem',
    color: '#17A24A',
    fontWeight: 'bold',
    display: 'inline-block', // show by default
  },
  [theme.breakpoints.down('md')]: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    textAlign: 'center',
    '&::before': {
      display: 'none', // hide "✓" icon for mobile
    },
  }
}));



const FeatureText = styled(Typography)(({ theme }) => ({
  fontSize: '1.75rem',
  color: '#2F3132',
  fontWeight: 400,
  lineHeight: 1.5,
}));

const LearnMoreButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(4),
  padding: theme.spacing(2, 4),
  color: '#fff',
  backgroundColor: '#17A24A',
  borderRadius: '3rem',
  minWidth: '20rem',
  height: '5rem',
  fontSize: '1.75rem',
  fontWeight: 600,
  textTransform: 'none',
  boxShadow: '0 4px 20px rgba(23, 162, 74, 0.3)',
  transition: 'all 0.3s ease',
  '&:hover': {
    backgroundColor: '#128a3d',
    transform: 'translateY(-3px)',
    boxShadow: '0 6px 25px rgba(23, 162, 74, 0.4)',
  },
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
            fontSize: '4.5rem',
            color: '#17A24A',
            fontWeight: 800,
            lineHeight: 1.2,
            mb: 2,
            textShadow: '1px 1px 3px rgba(0,0,0,0.1)',
          }}
        >
          {productHighlight.tag}
        </Typography>

        <Typography
          variant="h3"
          sx={{
            fontSize: '3.5rem',
            color: '#2F3132',
            fontWeight: 600,
            mb: 3,
            lineHeight: 1.3,
          }}
        >
          {productHighlight.title}
        </Typography>

        <Typography
          variant="body1"
          sx={{
            fontSize: '1.75rem',
            color: '#686F75',
            fontWeight: 400,
            lineHeight: 1.6,
            mb: 4,
             [theme.breakpoints.down('md')]: {
              alignItems: 'center',
              textAlign: 'center',
              paddingLeft: theme.spacing(55),
              paddingRight: theme.spacing(55),
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

        <LearnMoreButton variant="contained">{productHighlight.buttonText}</LearnMoreButton>
      </ProductContent>
    </motion.div>
  );
};

export default ProductTractorContent;