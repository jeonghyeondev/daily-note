import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import {
  TextField,
  Typography,
  Button,
  Box,
  FormHelperText,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  formTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: theme.spacing(0.5),
  },
  forminput: {
    margin: theme.spacing(0.8, 0),
    '& .MuiInputBase-input': {
      paddingBottom: theme.spacing(1.5),
    },
  },
  formButton: {
    marginTop: theme.spacing(3),
    fontSize: 18,
  },
  errorMessage: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  formFooter: {
    marginTop: theme.spacing(2),
    textAlign: 'right',
    fontSize: 16,
    '& a': {
      textDecoration: 'underline',
      '&:hover': {
        fontWeight: 'bold',
      },
    },
  },
}));

/**
 * 회원가입 or 로그인폼을 보여줍니다.
 */

const textMap = {
  login: '로그인',
  register: '회원가입',
};

const AuthForm = ({ type, form, onChange, onSubmit, error }) => {
  const text = textMap[type];

  const classes = useStyles();
  return (
    <React.Fragment>
      <Typography
        display="block"
        className={classes.formTitle}
        color="secondary"
      >
        {text}
      </Typography>
      <form onSubmit={onSubmit}>
        <TextField
          autoComplete="username"
          name="username"
          label="아이디"
          placeholder="아이디를 입력하세요."
          color="secondary"
          fullWidth
          className={classes.forminput}
          onChange={onChange}
          value={form.username}
        />
        <TextField
          autoComplete="new-password"
          name="password"
          type="password"
          label="비밀번호"
          placeholder="비밀번호를 입력하세요."
          color="secondary"
          fullWidth
          className={classes.forminput}
          onChange={onChange}
          value={form.password}
        />
        {type === 'register' && (
          <TextField
            autoComplete="new-password"
            name="passwordConfirm"
            type="password"
            label="비밀번호 확인"
            placeholder="비밀번호를 입력하세요."
            color="secondary"
            fullWidth
            className={classes.forminput}
            onChange={onChange}
            value={form.passwordConfirm}
          />
        )}
        {error && (
          <FormHelperText error className={classes.errorMessage}>
            {error}
          </FormHelperText>
        )}
        <Button
          variant="contained"
          type="submit"
          color="secondary"
          size="large"
          className={classes.formButton}
          fullWidth
        >
          {text}
        </Button>
      </form>
      <Box className={classes.formFooter}>
        {type === 'login' ? (
          <Link to="/register">회원가입</Link>
        ) : (
          <Link to="/login">로그인</Link>
        )}
      </Box>
    </React.Fragment>
  );
};

AuthForm.propTypes = {
  type: PropTypes.string,
  form: PropTypes.object,
  onChange: PropTypes.func,
  onSubmit: PropTypes.func,
  error: PropTypes.string,
};

export default AuthForm;
