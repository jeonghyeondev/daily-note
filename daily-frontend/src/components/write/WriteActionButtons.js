import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Paper } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(0, 5, 5, 5),
    width: '100%',
  },
  writeButton: {
    marginRight: theme.spacing(1),
  },
}));

/**
 * 에디터 포스트등록/취소 버튼
 */

const WriteActionButtons = ({ onCancel, onPublish, isEdit }) => {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Button
        variant="contained"
        color="secondary"
        className={classes.writeButton}
        onClick={onPublish}
      >
        포스트 {isEdit ? '수정' : '등록'}
      </Button>
      <Button
        variant="contained"
        color="primary"
        className={classes.writeButton}
        onClick={onCancel}
      >
        취소
      </Button>
    </Paper>
  );
};

WriteActionButtons.propTypes = {
  onCancel: PropTypes.func,
  onPublish: PropTypes.func,
};

export default WriteActionButtons;
