import React from 'react';
import { 
  Box,
  Container,
  useTheme,
  useMediaQuery
} from '@mui/material';

import Header from '../../Components/Header/Header';
import HomeSection from '../../Components/Home/HomeSection';
import ProductHighlight from '../../Components/ProductHighlight/ProductHighlight';
import Feature from '../../Components/Features/Features';
import HeroBanner from '../../Components/Home/HeroBanner';
import ContactSection from '../../Components/Contact/ContactSection';
import LatestVideos from '../../Components/Blogs/LatestVideos';
import Footer from '../../Components/Footer/Footer';

const Home = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box sx={{ width: '100%', overflowX: 'hidden' }}>
      <Header />

      <Box component="main">
        <Container disableGutters maxWidth={false}>
          <HomeSection />
        </Container>

        <Container disableGutters maxWidth={false} sx={{ py: isMobile ? 4 : 8 }}>
          <ProductHighlight />
        </Container>

        <Container disableGutters maxWidth={false}>
          <Feature />
        </Container>

        <Container disableGutters maxWidth={false}>
          <HeroBanner />
        </Container>

        <Container disableGutters maxWidth={false}>
          <ContactSection />
        </Container>

        <Container disableGutters maxWidth={false}>
          <LatestVideos />
        </Container>
      </Box>

      <Footer />
    </Box>
  );
};

export default Home;
