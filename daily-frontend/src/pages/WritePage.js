import React from 'react';
import WriteActionButtons from '../components/write/WriteActionButtons';
import EditorContainer from '../containers/write/EditorContainer';
import TagBoxContainer from '../containers/write/TagBoxContainer';

// 글쓰기 페이지
const WritePage = () => {
  return (
    <React.Fragment>
      <EditorContainer />
      <TagBoxContainer />
      <WriteActionButtons />
    </React.Fragment>
  );
};
export default WritePage;
