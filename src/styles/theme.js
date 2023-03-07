import config from 'config';

const darkColors = {
  primary: '#FFF1E6',
  secondary: '#E3D5CA',
  activeLink: '#DDBEA9',
  backgroudLayout: '#50503F',
  backgroudSite: '#0d1b2a'
};

const lightColors = {
  primary: '#FFF1E6',
  secondary: '#E3D5CA',
  activeLink: '#50503F',
  backgroudLayout: '#DDBEA9',
  backgroudSite: 'white',

  pageTitle: '#50503F',

  forms: {
    labelColor: '#50503F',
    inputColor: '#50503F',
    errorColor: '#9e2a2b',

    primaryButtonColor: '#84a98c',
    primaryButtonTextColor: 'white',
    secondaryButtonColor: 'white',
    secondaryButtonTextColor: '#84a98c',

    borderColor: '#E3D5CA',
    borderColorFocus: '#DDBEA9'
  }
};

const theme = {
  layout: {
    headerHeight: 56
  },

  colors: config.theme === 'light' ? lightColors : darkColors
};

export default theme;
