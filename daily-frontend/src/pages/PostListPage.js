import React from 'react';
import PostListContainer from '../containers/posts/PostListContainer';
import PaginationContainer from '../containers/posts/PaginationContainer';

// 포스트 목록 페이지
const PostListPage = () => {
  return (
    <React.Fragment>
      <PostListContainer />
      <PaginationContainer />
    </React.Fragment>
  );
};

export default PostListPage;
