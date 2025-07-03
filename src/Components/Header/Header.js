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
import { colors, typography, buttonStyles} from '../../Utils/stylingComponents'

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: colors.white,
  // boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
}));

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  width: '100%',
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