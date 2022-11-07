// FONT SIZE
const fontSizes = {
  large: '3rem',
};

// FONT SIZE
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

// THEME
const theme = {
  light: {
    // LIGHT THEME COLORS
    colors: {
      primary: '#991EEB',
      secondary: '#5822b4',

      bgPrimary: '#F4F7FD',
      bgPrimaryInverse: '#00000',
      bgSecondary: '#FFFFFF',
      bgTertiary: '#181B1E',

      textPrimary: '#FFFFFF',
      textSecondary: '#16191C',

      iconPrimary: '#FFFFFF',
      iconSecondary: '#FFE234',
    },

    fontSizes,
    mediaQ,
  },
  dark: {
    // DARK THEME COLORS
    colors: {
      primary: '#991EEB',
      secondary: '#5822b4',

      bgPrimary: '#000000',
      bgPrimaryInverse: '#FFFFFF',
      bgSecondary: '#16191C',
      bgTertiary: '#181C1F',

      textPrimary: '#FFFFFF',
      textSecondary: '#16191C',

      iconPrimary: '#FFFFFF',
      iconSecondary: '#FFE234',
    },

    fontSizes,
    mediaQ,
  },
};

export default theme;
