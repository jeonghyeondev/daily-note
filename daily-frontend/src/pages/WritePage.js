import React from 'react';
import WriteActionButtonContainer from '../containers/write/WriteActionButtonContainer';
import EditorContainer from '../containers/write/EditorContainer';
import TagBoxContainer from '../containers/write/TagBoxContainer';

// 글쓰기 페이지
const WritePage = () => {
  return (
    <React.Fragment>
      <EditorContainer />
      <TagBoxContainer />
      <WriteActionButtonContainer />
    </React.Fragment>
  );
};
export default WritePage;
