import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import { flexCenter } from '../../../styles/css-style';
import SubmitButton from '../../components/Button/SubmitButton';
import LoginInput from '../../components/Input/LoginInput';

const Login = () => {
  const [eamil, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(eamil, password);
    // 로그인 성공하면
    setEmail('');
    setPassword('');
  };

  const onChangeEmail = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const userEamil = event.target.value;
      setEmail(userEamil);
    },
    [eamil]
  );
  const onChangePassword = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const userPassword = event.target.value;
      setPassword(userPassword);
    },
    [password]
  );

  return (
    <LoginContainer>
      <LoginForm onSubmit={onSubmitHandler}>
        <LogoWrap>Logo</LogoWrap>
        <InputBox>
          <LoginInput
            placeHloder="이메일을 입력해주세요"
            type="text"
            onChangeHandler={onChangeEmail}
          />
          <LoginInput
            placeHloder="비밀번호를 입력해주세요"
            type="password"
            onChangeHandler={onChangePassword}
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
  width: 40%;
  padding: 60px 70px;
  border: 1px solid #9e9e9e;
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
