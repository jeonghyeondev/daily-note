import React, { useContext } from 'react';
import PropTypes from 'prop-types';
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
  Divider,
  useMediaQuery,
} from '@material-ui/core';
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
    [theme.breakpoints.down('xs')]: {
      fontSize: 18,
      width: 40,
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
    },
  },
  headerBtn: {
    margin: theme.spacing(0, 3),
    [theme.breakpoints.down('xs')]: {
      margin: theme.spacing(0, 2),
    },
  },
  divider: {
    height: 20,
    marginRight: theme.spacing(4),
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
  },
  themeModeButton: {
    [theme.breakpoints.down('xs')]: {
      padding: 0,
    },
  },
}));

/**
 * 헤더
 */

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

  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('xs'));
  const buttonProps = {
    size: isSmallScreen ? 'small' : 'large',
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
              <Typography
                variant="subtitle1"
                className={classes.username}
                gutterBottom
              >
                {user.username}
              </Typography>

              <Button
                {...buttonProps}
                variant="outlined"
                color="secondary"
                className={classes.headerBtn}
                href="/login"
                onClick={onLogout}
              >
                Logout
              </Button>
            </React.Fragment>
          ) : (
            <Button
              {...buttonProps}
              variant="outlined"
              color="secondary"
              className={classes.headerBtn}
              href="/login"
            >
              Login
            </Button>
          )}
          <Divider
            orientation="vertical"
            variant="middle"
            light
            className={classes.divider}
          />
          <FormControlLabel
            control={<Switch checked={isDark} onChange={handleThemeChange} />}
            label={
              <IconButton
                edge="end"
                color="inherit"
                aria-label="mode"
                onClick={() => setTheme(currentTheme)}
                className={classes.themeModeButton}
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

Header.propTypes = {
  user: PropTypes.any,
  onLogout: PropTypes.func,
};

export default Header;
