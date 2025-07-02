import React from 'react';
import { 
  Box,
  styled,
  Container
} from '@mui/material';
import Header from '../../Components/Header/Header';
import HomeSection from '../../Components/Home/HomeSection';
import ProductHighlight from '../../Components/ProductHighlight/ProductHighlight';
import Feature from '../../Components/Features/Features';
import HeroBanner from '../../Components/Home/HeroBanner';
import ContactSection from '../../Components/Contact/ContactSection';
import LatestVideos from '../../Components/Blogs/LatestVideos';
import Footer from '../../Components/Footer/Footer';

const ProductSection = styled(Box)(({ theme }) => ({
  width: '100%',
  padding: theme.spacing(8, 0),
}));

const Home = () => {
  return (
    <Container maxHeight="100vh" maxWidth="100%" disableGutters>
      <Container>
        <Header />
      </Container>
      <HomeSection />

      <ProductSection>
          <ProductHighlight />
      </ProductSection>

        <Feature />

        <HeroBanner />

        <ContactSection/>

        <LatestVideos/>
         <Footer />
    </Container>
  );
};

export default Home;