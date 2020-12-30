import { createMuiTheme } from '@material-ui/core/styles';

// Dark theme
const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#26292C',
      // main: '#90caf9',
      light: 'rgb(81, 91, 95)',
      dark: 'rgb(26, 35, 39)',
    },
    secondary: {
      main: '#FFB74D',
      light: 'rgb(255, 197, 112)',
      dark: 'rgb(200, 147, 89)',
      contrastText: 'rgba(0, 0, 0, 0.87)',
    },
    titleBar: {
      main: '#555555',
      contrastText: '#ffffff',
    },
    error: {
      main: '#f44336',
    },
  },
  typography: {
    useNextVariants: true,
    fontFamily: '"Noto Sans KR"',
  },
});

export default theme;
