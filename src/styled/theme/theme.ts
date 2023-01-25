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
      textSecondary: '#626262',
      iconPrimary: '#7C7C85',
      iconSecondary: '#626262',
    },
    mediaQ,
  },
  dark: {
    colors: {
      primary: '#991EEB',
      backgroundPrimary: '#111315',
      backgroundPrimaryInverse: '#FFFFFF',
      backgroundSecondary: '#202427',
      backgroundTertiary: '#2B2F33',
      textPrimary: '#afb6bf',
      textSecondary: '#626262',
      iconPrimary: '#FFFFFF',
      iconSecondary: '#626262',
    },
    mediaQ,
  },
};

export default theme;
