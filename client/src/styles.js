import { createMuiTheme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#47AFE7',
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
  },
});

export default makeStyles({
  wrapper: {
    width: '100%',
    height: 'auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
});
