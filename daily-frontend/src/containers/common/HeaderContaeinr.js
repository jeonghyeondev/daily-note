import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  AppBar,
  Toolbar,
  Typography,
  FormControlLabel,
  Switch,
  IconButton,
} from '@material-ui/core';
import Brightness3Icon from '@material-ui/icons/Brightness3';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import { CustomThemeContext } from '../../themes/CustomThemeProvider';
import Header from './Header';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  AppBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
}));

const HeaderContaeinr = () => {
  const classes = useStyles();
  const { currentTheme, setTheme } = useContext(CustomThemeContext);
  const isDark = Boolean(currentTheme === 'dark');
  const icon =
    currentTheme === 'dark' ? <Brightness3Icon /> : <Brightness7Icon />;

  console.log(currentTheme, '테마모드');
  const handleThemeChange = (event) => {
    const { checked } = event.target;
    if (checked) {
      setTheme('dark');
    } else {
      setTheme('normal');
    }
  };

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            데일리 노트
          </Typography>
          <FormControlLabel
            control={<Switch checked={isDark} onChange={handleThemeChange} />}
            label={
              <IconButton
                edge="end"
                color="inherit"
                aria-label="mode"
                onClick={() => setTheme(currentTheme)}
              >
                {icon}
              </IconButton>
            }
          />
          <Header />
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default HeaderContaeinr;
