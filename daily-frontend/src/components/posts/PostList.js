import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import {
  Card,
  CardContent,
  // CardMedia,
  Typography,
  Box,
  Button,
  CardActionArea,
  CardActions,
} from '@material-ui/core';
import SubInfo from '../common/SubInfo';
import Tags from '../common/Tags';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(8, 5),
    maxWidth: 1600,
    margin: '0 auto',
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(3),
    },
  },
  postList: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    marginLeft: '-2%',
    marginTop: '-2%',
    [theme.breakpoints.down('xs')]: {
      marginTop: '-20px',
    },
  },
  postItem: {
    display: 'flex',
    flexDirection: 'column',
    flex: 'none',
    flexBasis: '23%',
    boxSizing: 'border-box',
    marginLeft: '2%',
    marginTop: '2%',
    justifyContent: 'space-between',
    [theme.breakpoints.down('md')]: {
      flexBasis: '31.333%',
    },
    [theme.breakpoints.down('sm')]: {
      flexBasis: '48%',
    },
    [theme.breakpoints.down('xs')]: {
      flexBasis: '100%',
      marginLeft: '0',
      marginTop: 20,
    },
    '& img': {
      minHeight: 200,
    },
  },
  itemTitle: {
    fontWeight: 'bold',
  },
  itemText: {
    fontSize: 16,
    lineHeight: '24px',
    margin: theme.spacing(1, 0),
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    wordWrap: 'break-word',
    display: '-webkit-box',
    '-webkit-line-clamp': 3 /* ellipsis line */,
    '-webkit-box-orient': 'vertical',
    /* webkit 엔진을 사용하지 않는 브라우저를 위한 속성. */
    height: '4.5rem',
  },
}));

/**
 * 글목록
 */

const PostItem = ({ post }) => {
  const classes = useStyles();
  const { publishedDate, user, tags, title, body, _id } = post;

  return (
    <Card className={classes.postItem}>
      <CardActionArea>
        <Link to={`/@${user.username}/${_id}`}>
          {/* <CardMedia
            component="img"
            alt="Contemplative Reptile"
            height="140"
            image="https://material-ui.com/static/images/cards/contemplative-reptile.jpg"
            title="Contemplative Reptile"
          /> */}
          <CardContent style={{ paddingBottom: 8 }}>
            <Typography
              gutterBottom
              variant="h5"
              component="h2"
              className={classes.itemTitle}
            >
              {title}
            </Typography>
            <Typography
              variant="body2"
              component="p"
              className={classes.itemText}
            >
              {body}
            </Typography>
            <SubInfo
              username={user.username}
              publishedDate={new Date(publishedDate)}
            />
          </CardContent>
        </Link>
      </CardActionArea>
      <CardActions style={{ padding: '0 16px' }}>
        <Tags tags={tags} />
      </CardActions>
    </Card>
  );
};

const PostList = ({ posts, loading, error, showWriteButton }) => {
  const classes = useStyles();

  // 에러 발생 시
  if (error) {
    return <Box className={classes.root}>에러가 발생했습니다.</Box>;
  }

  return (
    <Box className={classes.root}>
      {showWriteButton && (
        <Box align="right" style={{ marginBottom: '40px' }}>
          <Button variant="contained" color="secondary" href="/write">
            새글 작성하기
          </Button>
        </Box>
      )}
      {/* 로딩 중이 아니고, 포스트 배열이 존재하 ㄹ때만 보여 줌 */}
      {!loading && posts && (
        <Box className={classes.postList}>
          {posts.map((post) => (
            <PostItem post={post} key={post._id} />
          ))}
        </Box>
      )}
    </Box>
  );
};

export default PostList;
