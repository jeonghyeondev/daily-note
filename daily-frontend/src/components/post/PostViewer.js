import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Box, Typography, Divider } from '@material-ui/core';
import SubInfo from '../common/SubInfo';
import Tags from '../common/Tags';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(8, 5),
  },
  viewerTitle: {
    fontWeight: 'bold',
  },
  username: {
    fontWeight: 'bold',
  },
  chipContent: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(5),
  },
  chip: {
    marginRight: theme.spacing(0.5),
  },
  postContent: {
    marginTop: theme.spacing(5),
    fontSize: 16,
  },
}));

/**
 * 포스트 읽기 페이지
 */

const PostViewer = ({ post, error, loading, actionButtons }) => {
  const classes = useStyles();

  // 에러 발생 시
  if (error) {
    if (error.response && error.response.status === 404) {
      return (
        <Paper className={classes.root}>존재하지 않은 포스트입니다.</Paper>
      );
    }
    return <Paper>오류 발생!</Paper>;
  }

  // 로딩 중이거나 아직 포스트 데이터가 없을 때
  if (loading || !post) {
    return null;
  }

  const { title, body, user, publishedDate, tags } = post;

  return (
    <Paper className={classes.root}>
      <Box>
        <Typography variant="h3" gutterBottom className={classes.viewerTitle}>
          {title}
        </Typography>
      </Box>
      <SubInfo username={user.username} publishedDate={publishedDate} />
      <Tags tags={tags} />
      <Divider variant="middle" style={{ margin: 0 }} />
      {actionButtons}
      <Box
        className={classes.postContent}
        dangerouslySetInnerHTML={{ __html: body }}
      />
    </Paper>
  );
};

PostViewer.propTypes = {
  post: PropTypes.object,
  error: PropTypes.any,
  loading: PropTypes.any,
};

export default PostViewer;
