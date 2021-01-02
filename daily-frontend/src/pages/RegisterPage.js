import React from 'react';
import AuthTemplate from '../components/auth/AuthTemplate';
import RegisterForm from '../containers/auth/RegisterForm';
import { Helmet } from 'react-helmet-async';

// 회원가입 페이지
const RegisterPage = () => {
  return (
    <AuthTemplate>
      <Helmet>
        <title>회원가입 - DAILY NOTE</title>
      </Helmet>
      <RegisterForm />
    </AuthTemplate>
  );
};

export default RegisterPage;
