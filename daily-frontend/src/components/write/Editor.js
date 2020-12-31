import React, { useRef, useEffect } from 'react';
import Quill from 'quill';
import 'quill/dist/quill.bubble.css';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Input } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(8, 5),
    boxShadow: 'none',
    // minHeight: 'calc(100% - 72px)',
  },
  editorTitle: {
    fontSize: 48,
    paddingBottom: theme.spacing(1.5),
    marginBottom: theme.spacing(3),
  },
}));
const QuillWrapper = styled.div`
  .ql-editor {
    padding: 0;
    min-height: 320px;
    font-size: 1.125rem;
    line-height: 1.5;
  }
  .ql-editor.ql-blank::before {
    left: 0px;
  }
`;

/**
 * 글쓰기 에디터
 */

const Editor = () => {
  const classes = useStyles();
  const quillElement = useRef(null); // Quill을 적용할 DivElement를 설정
  const quillInstance = useRef(null); // Quill 인스턴스를 설정

  useEffect(() => {
    quillInstance.current = new Quill(quillElement.current, {
      theme: 'bubble',
      placeholder: '내용을 작성하세요...',
      modules: {
        // 더 많은 옵션
        // https://quilljs.com/docs/modules/toolbar/ 참고
        toolbar: [
          [{ header: '1' }, { header: '2' }],
          ['bold', 'italic', 'underline', 'strike'],
          [{ list: 'ordered' }, { list: 'bullet' }],
          ['blockquote', 'code-block', 'link', 'image'],
        ],
      },
    });

    // quill에 text-change 이벤트 핸들러 등록
    // 참고: https://quilljs.com/docs/api/#events
    // const quill = quillInstance.current;
    // quill.on('text-change', (delta, oldDelta, source) => {
    //   if (source === 'user') {
    //     onChangeField({ key: 'body', value: quill.root.innerHTML });
    //   }
    // });
  }, []);

  // const mounted = useRef(false);
  // useEffect(() => {
  //   if (mounted.current) return;
  //   mounted.current = true;
  //   quillInstance.current.root.innerHTML = body;
  // }, [body]);

  // const onChangeTitle = (e) => {
  //   onChangeField({ key: 'title', value: e.target.value });
  // };

  return (
    <Paper className={classes.root}>
      <Input
        placeholder="제목을 입력하세요"
        inputProps={{ 'aria-label': 'description' }}
        fullWidth
        className={classes.editorTitle}
        color="secondary"
      />
      <QuillWrapper>
        <div ref={quillElement} />
      </QuillWrapper>
    </Paper>
  );
};

export default Editor;
