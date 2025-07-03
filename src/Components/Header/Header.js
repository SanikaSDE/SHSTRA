import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Button,
  List,
  ListItem,
  Box,
  IconButton,
  Drawer,
  styled,
  Container,
  useMediaQuery,
  useTheme
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu'; // Changed from MoreVertIcon to MenuIcon
import { headerData } from '../../Utils/StaticData';
import { colors, typography, buttonStyles } from '../../Utils/stylingComponents';

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: colors.white,
  boxShadow: 'none',
  position: 'static'
}));

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  width: '100%',
  maxWidth: '1280px',
  margin: '0 auto',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: theme.spacing(1, 2),
}));

const Logo = styled('img')(() => ({
  height: '40px',
  width: 'auto',
}));

const NavList = styled(List)(({ theme }) => ({
  display: 'flex',
  gap: '1.5rem',
  marginRight: '0px',
  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
}));

const NavLink = styled(Button)(({ theme }) => ({
  color: colors.black,
  fontWeight: typography.featureText.fontWeight,
  fontSize: typography.featureText.fontSize,
  textTransform: 'none',
  minWidth: 'auto',
  '&:hover': {
    color: colors.primary,
    backgroundColor: 'transparent',
  },
}));

const ExploreButton = styled(Button)(({ theme }) => ({
  padding: theme.spacing(0.5, 1.5),
  backgroundColor: colors.primary,
  color: colors.white,
  borderRadius: buttonStyles.button.borderRadius,
  fontSize: buttonStyles.button.fontSize,
  fontWeight: buttonStyles.button.fontWeight,
  '&:hover': {
    backgroundColor: colors.primaryDark,
  },
  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
}));

const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  const drawerContent = (
    <Box
      sx={{
        width: 250,
        p: 2,
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
      }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      {headerData.navLinks.map((link, index) => (
        <Button 
          key={index} 
          href={link.path} 
          sx={{ 
            justifyContent: 'flex-start',
            color: colors.black,
            textTransform: 'none',
            fontSize: '1rem'
          }}
        >
          {link.name}
        </Button>
      ))}
      <ExploreButton sx={{ display: 'block !important', mt: 2 }}>Explore More</ExploreButton>
    </Box>
  );

  return (
    <StyledAppBar position="static">
      <Container maxWidth={false} disableGutters>
        <StyledToolbar>
          <Logo src={headerData.logo} alt="Company Logo" />

          {!isMobile && (
            <Box component="nav">
              <NavList>
                {headerData.navLinks.map((link, index) => (
                  <ListItem key={index} disablePadding>
                    <NavLink href={link.path}>{link.name}</NavLink>
                  </ListItem>
                ))}
              </NavList>
            </Box>
          )}

          {!isMobile && (
            <ExploreButton variant="contained">Explore More</ExploreButton>
          )}

          {isMobile && (
            <>
              <IconButton 
                edge="end" 
                onClick={toggleDrawer(true)}
                sx={{ color: colors.black }}
              >
                <MenuIcon />
              </IconButton>
              <Drawer
                anchor="right"
                open={drawerOpen}
                onClose={toggleDrawer(false)}
              >
                {drawerContent}
              </Drawer>
            </>
          )}
        </StyledToolbar>
      </Container>
    </StyledAppBar>
  );
};

export default Header;