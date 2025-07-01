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

const HomeContainer = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
  width: '100%',
}));

const ProductSection = styled(Box)(({ theme }) => ({
  width: '100%',
  padding: theme.spacing(8, 0),
}));

const Home = () => {
  return (
    <Container>
      <Container>
        <Header />
      </Container>
      <HomeSection />

      <ProductSection>
        <Container>
          <ProductHighlight />
        </Container>
      </ProductSection>

      <Container>
        <Feature />
      </Container>

      <Container>
        <HeroBanner />
      </Container>

      <Container>
        <ContactSection/>
      </Container>

      <Container>
        <LatestVideos/>
      </Container>

      <Container>
         <Footer />
      </Container>
    </Container>
  );
};

export default Home;