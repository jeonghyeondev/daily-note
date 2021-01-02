import React from 'react';
import AskDialog from '../common/AskDialog';

const AskRemoveDialog = ({ open, onConfirm, isOpen, setIsOpen }) => {
  return (
    <AskDialog
      title="포스트 삭제"
      description="포스트를 정말 삭제하시겠습니까? "
      confirmText="삭제"
      onConfirm={onConfirm}
      isOpen={isOpen}
      setIsOpen={setIsOpen}
    />
  );
};

export default AskRemoveDialog;
