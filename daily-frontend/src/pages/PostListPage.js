import React from 'react';
import HeaderContaeinr from '../containers/common/HeaderContaeinr';

import { Toolbar } from '@material-ui/core';

// 포스트 목록 페이지
const PostListPage = () => {
  return (
    <React.Fragment>
      <HeaderContaeinr />
      <Toolbar />
    </React.Fragment>
  );
};

export default PostListPage;
