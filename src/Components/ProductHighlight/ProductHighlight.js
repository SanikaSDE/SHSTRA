import React from 'react';
import { 
  Box,
  styled
} from '@mui/material';
import ProductImageTractor from './ProductImageTractor';
import ProductTractorContent from './ProductTractorContent';
import pngwingleft from '../../Assets/pngwingleft.png'
import pngwingright from '../../Assets/pngwingright.png'

const ProductContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0),
  width: '100%',
  gap: theme.spacing(4),
  margin: theme.spacing(8, 0),
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    flexWrap: 'wrap',
  },
}));

const ProductImage = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '100%',
  flex: 1,
}));

const BambooDecorationRight = styled('img')({
  position: 'absolute',
  bottom: 0,
  right: 0,
  width: '20rem',
  height: '30rem',
  opacity: 0.9,
  zIndex: 0,
});

const BambooDecorationLeft = styled('img')({
  position: 'absolute',
  bottom: 0,
  left: 0,
  width: '20rem',
  height: '30rem',
  opacity: 0.9,
  zIndex: 0,
});


const ProductHighlight = () => {
  return (
    <ProductContainer>
      {/* <BambooDecorationLeft src={pngwingleft} alt="bamboo decoration" /> */}
      <ProductTractorContent />
      <ProductImage>
        <ProductImageTractor />
      </ProductImage>
      {/* <BambooDecorationRight src={pngwingright} alt="bamboo decoration" /> */}
    </ProductContainer>
  );
};

export default ProductHighlight;