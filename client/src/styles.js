import { createMuiTheme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
// import MontserratBlack from './assets/fonts/Montserrat/Montserrat-Black.ttf';
// import MontserratBlackItalic from './assets/fonts/Montserrat/Montserrat-BlackItalic.ttf';
// import MontserratBold from './assets/fonts/Montserrat/Montserrat-Bold.ttf';
// import MontserratBoldItalic from './assets/fonts/Montserrat/Montserrat-BoldItalic.ttf';
// import MontserratExtraBold from './assets/fonts/Montserrat/Montserrat-ExtraBold.ttf';
// import MontserratExtraBoldItalic from './assets/fonts/Montserrat/Montserrat-ExtraBoldItalic.ttf';
// import MontserratSemiBold from './assets/fonts/Montserrat/Montserrat-SemiBold.ttf';
// import MontserratSemiBoldItalic from './assets/fonts/Montserrat/Montserrat-SemiBoldItalic.ttf';
// import MontserratMedium from './assets/fonts/Montserrat/Montserrat-Medium.ttf';
// import MontserratMediumItalic from './assets/fonts/Montserrat/Montserrat-MediumItalic.ttf';
// import MontserratRegular from './assets/fonts/Montserrat/Montserrat-Regular.ttf';
// import MontserratThin from './assets/fonts/Montserrat/Montserrat-Thin.ttf';
// import MontserratThinItalic from './assets/fonts/Montserrat/Montserrat-ThinItalic.ttf';

// const raleway = {
//   fontFamily: 'MontserratBlack',
//   fontStyle: 'normal',
//   fontDisplay: 'swap',
//   fontWeight: 400,
//   src: `
//     local('MontserratBlack'),
//     local('MontserratBlack'),
//     url(${MontserratBlack}) format('ttf')
//   `,
//   unicodeRange:
//     'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
// };

export const theme = createMuiTheme({
  spacing: 4,
  palette: {
    primary: {
      main: '#007bff',
      disabled: '#fff06c',
    },
    secondary: {
      main: '#ffffff',
      disabled: '#007bff',
    },
    error: {
      main: '#DB3838',
    },
    warning: {
      main: '#FFC92F',
    },
    info: {
      main: '#5385EE',
    },
    success: {
      main: '#6EBE19',
    },
    text: {
      primary: '#000000',
      secondary: '#D2D0D0',
      disabled: '#D2D0D0',
    },
  },
  typography: {
    fontFamily: ['Roboto', 'Arial'].join(','),

    //     overrides: {
    //       MuiCssBaseline: {
    //         '@global': {
    //           '@font-face': [roboto],
    //         },
    //       },
    //     },
  },
});

export default makeStyles({
  root: {
    padding: 100,
  },
});
