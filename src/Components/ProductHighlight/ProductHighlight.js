import React from 'react';
import { Box, styled, Container, Grid } from '@mui/material';
import ProductImageTractor from './ProductImageTractor';
import ProductTractorContent from './ProductTractorContent';
import pngwingleft from '../../Assets/pngwingleft.png';
import pngwingright from '../../Assets/pngwingright.png';

const ProductWrapper = styled(Box)(({ theme }) => ({
  position: 'relative',
  width: '100%',
  minHeight: '500px', 
  alignItems: 'center',
  [theme.breakpoints.down('md')]:{
    padding:0,}
}));

const ProductContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: theme.spacing(4),
  zIndex: 1,
  position: 'relative',
  maxWidth: '1200px',
  margin: '0 auto',   
  width: '100%',
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    flexWrap: 'wrap',
    padding: 0,
    alignItems: 'center',
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
        <Grid sx={{paddingLeft:10, paddingRight:10}}>
          <BambooDecorationLeft src={pngwingleft} alt="bamboo decoration left" />
          <ProductContainer>
            <ProductTractorContent />
            <ProductImageTractor/>
          </ProductContainer>
          <BambooDecorationRight src={pngwingright} alt="bamboo decoration right" />
        </Grid>
      </ProductWrapper>
  );
};

export default ProductHighlight;