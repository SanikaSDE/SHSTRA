import React from 'react';
import { 
  Box,
  styled,
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

const ProductSection = styled(Box)(({ theme }) => ({
  width: '100%',
  padding: theme.spacing(8, 0),
  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(4, 2),
  },
}));

const Home = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box sx={{ width: '100%', overflowX: 'hidden' }}>
      <Header />

      <Box component="main">
        <Container maxWidth="xl" sx={{ px: isMobile ? 2 : 4 }}>
          <HomeSection />
        </Container>

        <ProductSection>
          <Container maxWidth="xl" sx={{ px: isMobile ? 2 : 4 }}>
            <ProductHighlight />
          </Container>
        </ProductSection>

        <Container maxWidth="xl" sx={{ px: isMobile ? 2 : 4 }}>
          <Feature />
          <HeroBanner />
          <ContactSection />
          <LatestVideos />
        </Container>
      </Box>

      <Footer />
    </Box>
  );
};

export default Home;
