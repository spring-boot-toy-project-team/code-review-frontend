import styled from 'styled-components';
import React, { useEffect, useState } from 'react';

import SubmitButton from '../../common/Button/SubmitButton';
import LoginInput from '../../common/Input/LoginInput';
import useInput from '../../hook/useInput';
import { LoginCheckFnc } from '../../assets/FormCheck/Check';
import { userLogin } from '../../config/Axios/api';

const LoginFormCotaniner = styled.form`
  width: 100%;
`;

const LogoWrap = styled.h1`
  margin-bottom: 30px;
`;

const InputBox = styled.div`
  width: 100%;
`;

const ErrorBox = styled.div`
  width: 100%;
  margin-top: 20px;
  padding: 15px;
  font-size: ${({ theme }) => theme.fontSize.size12};
  color: ${({ theme }) => theme.colors.red500};
`;

const ButtonBox = styled.div`
  width: 100%;
  margin-top: 38px;
`;

const LoginForm = () => {
  const email = useInput('');
  const password = useInput('');
  const [errorMsg, setErrorMsg] = useState<string>('');
  const [showMessage, setShowMessage] = useState<boolean>(false);

  const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    let body = {
      email: email.value,
      password: password.value,
    };

    LoginCheckFnc(email.value, password.value, setErrorMsg, setShowMessage)
      ? userLogin(body).then((res) => console.log(res))
      : null;
  };
  return (
    <LoginFormCotaniner onSubmit={onSubmitHandler}>
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
      {showMessage && <ErrorBox>{errorMsg}</ErrorBox>}
      <ButtonBox>
        <SubmitButton children="로그인" />
      </ButtonBox>
    </LoginFormCotaniner>
  );
};

export default LoginForm;
