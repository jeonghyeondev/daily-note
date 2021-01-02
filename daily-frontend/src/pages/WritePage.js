import React from 'react';
import WriteActionButtonContainer from '../containers/write/WriteActionButtonContainer';
import EditorContainer from '../containers/write/EditorContainer';
import TagBoxContainer from '../containers/write/TagBoxContainer';
import { Helmet } from 'react-helmet-async';

// 글쓰기 페이지
const WritePage = () => {
  return (
    <React.Fragment>
      <Helmet>
        <title>글 작성하기 - DAILY NOTE</title>
      </Helmet>
      <EditorContainer />
      <TagBoxContainer />
      <WriteActionButtonContainer />
    </React.Fragment>
  );
};
export default WritePage;
