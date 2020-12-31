import React from 'react';
import Editor from '../components/write/Editor';
import TagBox from '../components/write/TagBox';

// 글쓰기 페이지
const WritePage = () => {
  return (
    <React.Fragment>
      <Editor />
      <TagBox />
    </React.Fragment>
  );
};
export default WritePage;
