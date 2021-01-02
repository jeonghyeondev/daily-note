import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  DialogContentText,
  Button,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  paper: { minWidth: '350px' },
  dialogTitle: {
    '& h2': {
      fontWeight: 'bold',
    },
  },
  dialogBtn: {
    padding: theme.spacing(2),
  },
}));

const AskDialog = ({
  title,
  description,
  confirmText = '확인',
  cancelText = '취소',
  onConfirm,
  isOpen,
  setIsOpen,
}) => {
  const classes = useStyles();
  const onCancel = () => {
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onClose={onCancel} classes={{ paper: classes.paper }}>
      <DialogTitle className={classes.dialogTitle}>{title}</DialogTitle>
      <DialogContent>
        <DialogContentText>{description}</DialogContentText>
      </DialogContent>
      <DialogActions className={classes.dialogBtn}>
        <Button variant="contained" onClick={onCancel}>
          {cancelText}
        </Button>
        <Button variant="contained" color="secondary" onClick={onConfirm}>
          {confirmText}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AskDialog;
