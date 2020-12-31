import React from 'react';
import HeaderContaeinr from '../containers/common/HeaderContaeinr';

import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

// 포스트 목록 페이지
const PostListPage = () => {
  return (
    <React.Fragment>
      <HeaderContaeinr />
      <Toolbar />
      <Typography>
        포스트 리스트포스트 리스트포스트 리스트포스트 리스트포스트 리스트포스트
        리스트 포스트 리스트 포스트 리스트
      </Typography>
    </React.Fragment>
  );
};

export default PostListPage;
