import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createMuiTheme({
  typography: {
    fontFamily: 'Circular Std'
  },
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
  },
  // overrides: {
  //   MuiCssBaseline: {
  //     '@global': {
  //       body: {
  //         fontFamily: 'Circular Std'
  //       },
  //     },
  //   },
  //   MuiTypography: {
  //     h6: {
  //       fontFamily: 'Circular Std'
  //     }
  //   }
  // },
});

export default theme;