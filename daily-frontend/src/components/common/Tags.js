import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Chip } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  chipContent: {
    padding: theme.spacing(2, 0),
  },
  chip: {
    marginRight: theme.spacing(1),
  },
}));

/**
 * 글목록 글쓴이 태그정보
 */

const Tags = ({ tags }) => {
  const classes = useStyles();
  return (
    <Box className={classes.chipContent}>
      {tags.map((tag) => (
        <Link to={`/?tag=${tag}`} key={tag}>
          <Chip
            key={tag}
            label={`#${tag}`}
            color="secondary"
            size="small"
            className={classes.chip}
            clickable
          />
        </Link>
      ))}
    </Box>
  );
};

export default Tags;
