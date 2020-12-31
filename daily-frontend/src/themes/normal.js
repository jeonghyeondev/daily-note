import { createMuiTheme } from '@material-ui/core/styles';

// Normal or default theme
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#23ce9f',
      contrastText: '#fff',
    },
    error: {
      main: '#f44336',
    },
    background: {
      default: '#f5f5f5',
    },
    titleBar: {
      main: '#eeeeee',
      contrastText: '#222222',
    },
  },
  typography: {
    useNextVariants: true,
    fontFamily: '"Noto Sans KR"',
  },
});

export default theme;
