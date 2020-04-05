import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import { colors } from './colors';

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: colors.primary,
    secondary: colors.secondary,
    error: colors.error,
    contrastThreshold: 3,
    tonalOffset: 0.2,
    text: colors.text,
  },
  typography: {
    fontFamily: '"Lato", sans-serif',
    fontWeight: '200',
    fontSize: 12,
    h1: {

    },
    h2: {

    },
    h3: {

    },
    h4: {

    },
    h5: {

    },
    h6: {

    },
    subtitle1: {
      fontSize: '1.2rem',
    },
    subtitle2: {
      fontSize: '1.5rem',
    },
    body1: {
      fontSize: '1.1rem',
    },
    body2: {
      fontSize: '1.1rem',
    },
    caption: {
      fontSize: '1.1rem',
    },
    overline: {
      fontSize: '1.1rem',
    },
    button: {
      fontSize: '1.1rem',
    },
    p: {
      fontFamily: '"Arial"',
      fontSize: '80%',
    }
  },

  spacing: 4,
  textAlign: 'left',

});

export default theme;

/*

font-family: 'Source Sans Pro', sans-serif;
font-family: 'Black Ops One', cursive;
font-family: 'Roboto', sans-serif;
font-family: 'Montserrat', sans-serif;
font-family: 'Lato', sans-serif;

*/
