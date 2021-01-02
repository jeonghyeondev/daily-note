import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Button } from '@material-ui/core';
import AskRemoveDialog from './AskRemoveDialog';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginTop: theme.spacing(2),
  },
}));

/**
 * 포스트 수정  / 삭제 버튼
 */

const PostActionButtons = ({ onEdit, onRemove }) => {
  const classes = useStyles();
  const [openDialog, setOpenDialog] = useState(false);

  const onRemoveClick = () => {
    setOpenDialog(true);
  };

  const onConfirm = () => {
    setOpenDialog(false);
    onRemove();
  };

  return (
    <React.Fragment>
      <Box className={classes.root}>
        <Button color="secondary" onClick={onEdit}>
          수정
        </Button>
        <Button onClick={onRemoveClick}>삭제</Button>
      </Box>
      {openDialog && (
        <AskRemoveDialog
          isOpen={openDialog}
          setIsOpen={setOpenDialog}
          onConfirm={onConfirm}
        />
      )}
    </React.Fragment>
  );
};

export default PostActionButtons;
