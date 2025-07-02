import React from 'react';
import { Box, styled, Container } from '@mui/material';
import ProductImageTractor from './ProductImageTractor';
import ProductTractorContent from './ProductTractorContent';
import pngwingleft from '../../Assets/pngwingleft.png';
import pngwingright from '../../Assets/pngwingright.png';

const ProductContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(4),
  zIndex: 1,

  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    flexWrap: 'wrap',
  },
}));

const BambooDecorationRight = styled('img')({
  position: 'absolute',
  bottom: 0,
  right: 0,
  width: '150px',
  height: '250px',
  opacity: 0.9,
  zIndex: 0,
});

const BambooDecorationLeft = styled('img')({
  position: 'absolute',
  bottom: 0,
  left: 0,
  width: '150px',
  height: '300px',
  opacity: 0.9,
  zIndex: 0,
});

const ProductHighlight = () => {
  return (
    <Container>
      <BambooDecorationLeft src={pngwingleft} alt="bamboo decoration left" />
      <ProductContainer>
        <ProductTractorContent />
        <ProductImageTractor />
      </ProductContainer>
      <BambooDecorationRight src={pngwingright} alt="bamboo decoration right" />
    </Container>
  );
};

export default ProductHighlight;
