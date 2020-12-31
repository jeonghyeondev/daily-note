import React, { useState, useCallback } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Divider,
  Paper,
  Typography,
  TextField,
  Button,
  Chip,
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(0, 5, 5, 5),
    width: '100%',
  },
  tagTitle: {
    marginTop: theme.spacing(5),
  },
  textField: {
    '& .MuiOutlinedInput-root': {
      borderRadius: 0,
    },
  },
  addButton: {
    height: 40,
    marginTop: theme.spacing(1),
    borderRadius: 0,
    boxShadow: 'none',
  },
  chipWrap: {
    marginTop: theme.spacing(1),
  },
  chip: {
    marginRight: theme.spacing(0.5),
  },
}));

/**
 * 태그박스
 */

// React.memo를 사용하여 tag 값이 바뀔 때만 렌더링 되도록 처리
const TagItem = React.memo(({ tag, onRemove }) => (
  <Chip
    variant="outlined"
    size="small"
    label={`#${tag}`}
    // color="secondary"
    style={{ marginRight: '5px' }}
    onClick={() => onRemove(tag)}
  />
));

// React.memo를 사용하여 tags 값이 바뀔 때만 리렌더링 되도록 처리
const TagList = React.memo(({ tags, onRemove }) => (
  <div>
    {tags.map((tag) => (
      <TagItem key={tag} tag={tag} onRemove={onRemove} />
    ))}
  </div>
));

const TagBox = () => {
  const classes = useStyles();
  const [input, setInput] = useState('');
  const [localTags, setLocalTags] = useState([]);

  const insertTag = useCallback(
    (tag) => {
      if (!tag) return; // 공백이라면 추가하지 않음
      if (localTags.includes(tag)) return; // 이미 존재한다면 추가하지 않음
      setLocalTags([...localTags, tag]);
    },
    [localTags],
  );

  const onRemove = useCallback(
    (tag) => {
      setLocalTags(localTags.filter((t) => t !== tag));
    },
    [localTags],
  );

  const onChange = useCallback((e) => {
    setInput(e.target.value);
  }, []);

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      insertTag(input.trim()); // 앞뒤 공백을 없앤 후 등록
      setInput(''); // input 초기화
    },
    [input, insertTag],
  );

  // tags 값이 바뀔 때
  // useEffect(() => {
  //   setLocalTags(tags);
  // }, [tags]);

  return (
    <Paper className={classes.root}>
      <Divider variant="middle" style={{ margin: 0 }} />
      <Typography variant="subtitle1" className={classes.tagTitle}>
        태그
      </Typography>
      <form onSubmit={onSubmit}>
        <TextField
          placeholder="태그를 입력하세요"
          className={classes.textField}
          variant="outlined"
          margin="dense"
          color="secondary"
          value={input}
          onChange={onChange}
        />
        <Button
          type="submit"
          variant="contained"
          color="secondary"
          className={classes.addButton}
          endIcon={<AddIcon />}
        >
          추가
        </Button>

        <div className={classes.chipWrap}>
          <TagList tags={localTags} onRemove={onRemove} />
        </div>
      </form>
    </Paper>
  );
};

export default TagBox;
