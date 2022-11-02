import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import { flexCenter } from '../../../styles/css-style';
import SubmitButton from '../../components/Button/SubmitButton';
import LoginInput from '../../components/Input/LoginInput';
import useInput from '../../hook/useInput';

const Login = () => {
  const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log(email.value);
    console.log(password.value);
  };

  const email = useInput('');
  const password = useInput('');

  return (
    <LoginContainer>
      <LoginForm onSubmit={onSubmitHandler}>
        <LogoWrap>Logo</LogoWrap>
        <InputBox>
          <LoginInput
            value={email.value}
            placeHloder="이메일을 입력해주세요"
            type="text"
            onChangeHandler={email.onChange}
          />
          <LoginInput
            value={password.value}
            placeHloder="비밀번호를 입력해주세요"
            type="password"
            onChangeHandler={password.onChange}
          />
        </InputBox>
        <ErrorBox></ErrorBox>
        <ButtonBox>
          <SubmitButton children="로그인" />
        </ButtonBox>
      </LoginForm>
    </LoginContainer>
  );
};

const LoginContainer = styled.div`
  width: 100%;
  height: 100vh;
  padding: 24px 0;
  ${flexCenter}
`;

const LoginForm = styled.form`
  max-width: 420px;
  padding: 60px 70px;
  border: 1px solid ${({ theme }) => theme.colors.black500};
`;

const LogoWrap = styled.h1`
  margin-bottom: 30px;
`;

const InputBox = styled.div`
  width: 100%;
`;

const ErrorBox = styled.div`
  width: 100%;
`;

const ButtonBox = styled.div`
  width: 100%;
  margin-top: 38px;
`;

export default Login;
