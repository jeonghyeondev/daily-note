import React from 'react';
import AuthTemplate from '../components/auth/AuthTemplate';
import LoginForm from '../containers/auth/LoginForm';
import { Helmet } from 'react-helmet-async';

// 로그인 페이지
const LoginPage = () => {
  return (
    <AuthTemplate>
      <Helmet>
        <title>로그인 - DAILY NOTE</title>
      </Helmet>
      <LoginForm />
    </AuthTemplate>
  );
};

export default LoginPage;
