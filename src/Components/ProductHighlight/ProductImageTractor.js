import React from 'react';
import { Box, Container } from '@mui/material';
import { motion } from 'framer-motion';
import { homeData } from '../../Utils/StaticData';

const ProductImageTractor = () => {
  const { productHighlight } = homeData;
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      viewport={{ once: true }}
    >
      <Container>
        <Box
          sx={{
            position: 'relative',
            width: { xs: '50%', sm: '60%', md: '400px', xl: '700px' },
            height: { xs: '50%', sm: '60%', md: '350px', xl: '100%' },
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto',
            perspective: '1000px',
          }}
        >
          <Box
            sx={{
              position: 'absolute',
              top: { xs: '15%', md: '50px' },
              left: { xs: '10%', md: '50px' },
              width: '100%',
              height: '100%',
              backgroundColor: '#C5E8D1',
              borderRadius: { xs: '30px', md: '70px' },
              zIndex: 0,
              transform: 'rotate(3deg)',
              boxShadow: '15px 15px 30px rgba(0,0,0,0.1)',
            }}
          />
          <Box
            sx={{
              position: 'relative',
              width: '100%',
              height: '100%',
              backgroundColor: '#fff',
              border: '2px solid rgba(123, 3, 35, 0.1)',
              borderRadius: { xs: '30px', md: '80px' },
              zIndex: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'hidden',
              boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
              transition: 'all 0.5s ease',
              '&:hover': {
                transform: 'translateY(-5px)',
                boxShadow: '0 25px 50px rgba(0,0,0,0.15)',
              },
            }}
          >
            <Box
              component="img"
              src={productHighlight.Tractor}
              alt="Tractor"
              sx={{
                width: { xs: '90%', sm: '80%', md: '90%' },
                height: 'auto',
                objectFit: 'contain',
                transition: 'transform 0.5s ease',
                '&:hover': {
                  transform: 'scale(1.05)',
                },
              }}
            />
          </Box>
        </Box>
      </Container>
    </motion.div>
  );
};

export default ProductImageTractor;