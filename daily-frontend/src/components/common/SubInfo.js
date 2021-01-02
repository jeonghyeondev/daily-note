import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Box } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  username: {
    fontWeight: 'bold',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 8px',
    transform: 'scale(0.8)',
  },
}));

/**
 * 글목록 글쓴이 정보
 */

const SubInfo = ({ username, publishedDate }) => {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Box>
      <Typography
        variant="subtitle1"
        component="p"
        display="inline"
        className={classes.username}
      >
        {username}
      </Typography>
      {bull}
      <Typography color="textSecondary" display="inline">
        {new Date(publishedDate).toLocaleDateString()}
      </Typography>
    </Box>
  );
};

export default SubInfo;
