import React from 'react';
import {
  AppBar,
  Toolbar,
  Button,
  List,
  ListItem,
  Box,
  styled,
  Container
} from '@mui/material';
import { headerData } from '../../Utils/StaticData';

const HEADER_BG_COLOR = '#FFFFFF';
const SECONDARY_COLOR = '#17A24A';
const TEXT_COLOR = '#333';

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: HEADER_BG_COLOR,
  // boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
}));

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  width: '100%',
  maxWidth: '1200px',
  margin: '0 auto',
  display: 'flex',
  justifyContent: 'space-between',
  padding: theme.spacing(0, 2),
}));

const Logo = styled('img')(() => ({
  height: '40px',
  width: 'auto',
}));

const NavList = styled(List)(() => ({
  display: 'flex',
  gap: '1.5rem',
  marginRight: '0px',
}));

const NavLink = styled(Button)(({ theme }) => ({
  color: TEXT_COLOR,
  fontWeight: 400,
  fontSize: '15px',
  textTransform: 'none',
  minWidth: 'auto',
  '&:hover': {
    color: SECONDARY_COLOR,
    backgroundColor: 'transparent',
  },
}));

const ExploreButton = styled(Button)(({ theme }) => ({
  padding: theme.spacing(0.5, 1.5),
  backgroundColor: SECONDARY_COLOR,
  color: 'white',
  borderRadius: '4px',
  fontSize: '15px',
  fontWeight: 500,
  '&:hover': {
    backgroundColor: '#128a3d',
  },
}));

const Header = () => {
  return (
    <StyledAppBar position="static" elevation={0}>
      <Container maxWidth={false} disableGutters>
        <StyledToolbar>
          <Logo src={headerData.logo} alt="Company Logo" />

          <Box component="nav">
            <NavList>
              {headerData.navLinks.map((link, index) => (
                <ListItem key={index} disablePadding>
                  <NavLink href={link.path}>{link.name}</NavLink>
                </ListItem>
              ))}
            </NavList>
          </Box>

          <ExploreButton variant="contained">Explore More</ExploreButton>
        </StyledToolbar>
      </Container>
    </StyledAppBar>
  );
};

export default Header;