export const colors = {
  primary: '#17A24A',
  primaryDark: '#128a3d',
  textDark: '#2F3132',
  textGray: '#686F75',
  white: '#FFFFFF',
  black: '#333',
};

export const typography = {
  h1: {
    fontSize: '60px',
    fontWeight: 600,
    lineHeight: 0.7
  },
  h2: {
    fontSize: '45px',
    fontWeight: 700,
    lineHeight: 1.2,
  },
  h3: {
    fontSize: '35px',
    fontWeight: 600,
    lineHeight: 1.3,
  },
  body1: {
    fontSize: '20px',
    fontWeight: 400,
    lineHeight: 1.6,
  },
  featureText: {
    fontSize: '18px',
    fontWeight: 400,
    lineHeight: 1,
  },
  lableText: {
    fontSize: '15px'
  }
};

export const buttonStyles = {
  learnMore: {
    color: colors.white,
    backgroundColor: colors.primary,
    borderRadius: '3rem',
    minWidth: '180px',
    height: '50px',
    fontSize: '20px',
    fontWeight: 600,
    textTransform: 'none',
    boxShadow: '0 4px 20px rgba(23, 162, 74, 0.3)',
    transition: 'all 0.3s ease',
    '&:hover': {
      backgroundColor: colors.primaryDark,
      transform: 'translateY(-3px)',
      boxShadow: '0 6px 25px rgba(23, 162, 74, 0.4)',
    },
  },

  button:{
    minWidth: '250px',
    height: '50px',
    fontSize: '15px',
    fontWeight: 600,
    borderRadius: '3rem'
  },

  mobileviewButton:{
    fontSize: '12px',
    width: '130px',
    height: '25px',
    fontWeight: 'none'
  }
};