import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import {
  AppBar,
  Toolbar,
  Typography,
  FormControlLabel,
  Switch,
  IconButton,
  Button,
} from '@material-ui/core';
// import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Brightness3Icon from '@material-ui/icons/Brightness3';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import { CustomThemeContext } from '../../themes/CustomThemeProvider';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  username: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: theme.spacing(1),
  },
  headerBtn: {
    margin: theme.spacing(0, 4),
  },
}));

const Header = ({ user, onLogout }) => {
  const classes = useStyles();
  const { currentTheme, setTheme } = useContext(CustomThemeContext);
  const isDark = Boolean(currentTheme === 'dark');
  const icon =
    currentTheme === 'dark' ? <Brightness3Icon /> : <Brightness7Icon />;
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
            <Link to="/">데일리 노트</Link>
          </Typography>

          {user ? (
            <React.Fragment>
              {/* <AccountCircleIcon fontSize="large" /> */}
              <Typography
                variant="subtitle1"
                className={classes.username}
                gutterBottom
              >
                {user.username}
              </Typography>

              <Button
                variant="outlined"
                color="secondary"
                size="large"
                className={classes.headerBtn}
                href="/login"
                onClick={onLogout}
              >
                Logout
              </Button>
            </React.Fragment>
          ) : (
            <Button
              variant="outlined"
              color="secondary"
              size="large"
              className={classes.headerBtn}
              href="/login"
            >
              Login
            </Button>
          )}
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
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
