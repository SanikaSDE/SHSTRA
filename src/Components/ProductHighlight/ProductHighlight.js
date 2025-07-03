import React from 'react';
import { Box, styled, Container } from '@mui/material';
import ProductImageTractor from './ProductImageTractor';
import ProductTractorContent from './ProductTractorContent';
import pngwingleft from '../../Assets/pngwingleft.png';
import pngwingright from '../../Assets/pngwingright.png';

const ProductWrapper = styled(Box)({
  position: 'relative',
  width: '100%',
  minHeight: '500px', 
});

const ProductContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(4),
  zIndex: 1,
  position: 'relative', 
  margin: theme.spacing(0,10),
  paddingBottom: theme.spacing(0),
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    flexWrap: 'wrap',
    margin: 0,
  },
}));

const BambooDecorationRight = styled('img')(({ theme }) => ({
  position: 'absolute',
  bottom: 0,
  right: 0,
  width: '150px',
  height: '250px',
  opacity: 1,
  zIndex: 0,
  [theme.breakpoints.down('sm')]: {
    width: '100px',
    height: '200px',
  },
}));

const BambooDecorationLeft = styled('img')(({ theme }) => ({
  position: 'absolute',
  bottom: 0,
  left: 0,
  width: '150px',
  height: '300px',
  opacity: 1,
  zIndex: 0,
  [theme.breakpoints.down('sm')]: {
    width: '100px',
    height: '250px',
  },
}));

const ProductHighlight = () => {
  return (
      <ProductWrapper>
        <Container>
          <BambooDecorationLeft src={pngwingleft} alt="bamboo decoration left" />
          <ProductContainer>
            <ProductTractorContent />
            <ProductImageTractor/>
          </ProductContainer>
          <BambooDecorationRight src={pngwingright} alt="bamboo decoration right" />
        </Container>
      </ProductWrapper>
  );
};

export default ProductHighlight;