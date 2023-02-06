const mediaQ = {
  /*
   * TABLET: 726px / 16px = 45.375em
   * LAPTOP / DESKTOP: 1024px / 16px  = 64rem
   */
  tablet45: '(min-width: 45.375em)', // TABLET 726px
  laptop64: '(min-width: 64em)', // LAPTOP 1026px
  desktop90: '(min-width: 90em)', // DESKTOP 1440px
  monitor120: '(min-width: 120em)', // MONITOR 1920px
};

// HBO COLORS
// primary: #5822b4',
// secondary: '#991EEB',
//  linear-gradient(to right, #9A35EF , #4B00C4, #4176D6)

const theme = {
  light: {
    colors: {
      primary: '#991EEB',
      backgroundPrimary: '#E1E6F0',
      backgroundPrimaryInverse: '#181C1F',
      backgroundSecondary: '#FFFFFF',
      backgroundTertiary: '#474d54',
      textPrimary: '#afb6bf',
      textSecondary: '#969696',
      iconPrimary: '#7C7C85',
      iconSecondary: '#969696',
    },
    mediaQ,
  },
  dark: {
    colors: {
      primary: '#991EEB',
      backgroundPrimary: '#111111',
      backgroundPrimaryInverse: '#FFFFFF',
      backgroundSecondary: '#1A1C1E',
      // backgroundTertiary: '#3B4954',
      backgroundTertiary: '#383F48',
      textPrimary: '#FFFFFF',
      textSecondary: '#969696',
      iconPrimary: '#FFFFFF',
      iconSecondary: '#969696',
    },
    mediaQ,
  },
};

export default theme;
