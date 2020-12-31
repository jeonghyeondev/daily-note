import React from 'react';
import { Link } from 'react-router-dom';
import { Paper, Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    right: 0,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  authWrap: {
    padding: '2.5rem',
    width: 400,
    borderRadius: 5,
  },
  authTtitle: {
    '& > a': {
      display: 'block',
      paddingBottom: '2rem',
      textAlign: 'center',
      fontWeight: 'bold',
      letterSpacing: 1,
    },
  },
});

const AuthTemplate = ({ children }) => {
  const classes = useStyles();

  return (
    <Paper elevation={0} square className={classes.root}>
      <Box className={classes.authWrap} border={1}>
        <Typography variant="h5" className={classes.authTtitle}>
          <Link to="/">DAILY NOTE</Link>
          {children}
        </Typography>
      </Box>
    </Paper>
  );
};

export default AuthTemplate;
