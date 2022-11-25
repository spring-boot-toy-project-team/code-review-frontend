import styled from 'styled-components';
import React, { useEffect, useState } from 'react';

import SubmitButton from '../../common/Button/SubmitButton';
import useInput from '../../hook/useInput';
import SignupInput from '../../common/Input/SignupInput';
import { userSignup } from '../../config/Axios/api';

const LoginFormCotaniner = styled.form`
  width: 100%;
`;

const TitleWrap = styled.h1`
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

const SignupForm = () => {
  const email = useInput('');
  const nickname = useInput('');
  const password = useInput('');
  const passwordCheck = useInput('');

  const [eamilErrorMsg, setEmailErrorMsg] = useState<string>('');
  const [showEmailErrorMessage, setShowEmailErrorMessage] =
    useState<boolean>(false);

  const [nicknameErrorMsg, setNicknameErrorMsg] = useState<string>('');
  const [showNicknameErrorMessage, setShowNicknameErrorMessage] =
    useState<boolean>(false);

  const [passwordErrorMsg, setPasswordErrorMsg] = useState<string>('');
  const [showPasswordErrorMessage, setShowPasswordErrorMessage] =
    useState<boolean>(false);

  const [passwordCheckErrorMsg, setPasswordCehckErrorMsg] =
    useState<string>('');
  const [showPasswordCheckErrorMessage, setShowPasswordCheckErrorMessage] =
    useState<boolean>(false);

  const [errorMsg, setErrorMsg] = useState<string>('');
  const [showMessage, setShowMessage] = useState<boolean>(false);

  useEffect(() => {}, [email.value]);

  useEffect(() => {}, [nickname.value]);

  useEffect(() => {}, [password.value]);

  useEffect(() => {}, [passwordCheck.value]);

  const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const userInfo = {
      email: email.value,
      nickName: nickname.value,
      password: password.value,
    };

    userSignup(userInfo).then((res) => console.log('회원가입 성공'));
  };
  return (
    <LoginFormCotaniner onSubmit={onSubmitHandler}>
      <TitleWrap>Logo</TitleWrap>
      <InputBox>
        <SignupInput
          value={email.value}
          placeHloder="가입하실 이메일을 입력해주세요"
          type="text"
          onChangeHandler={email.onChange}
          label="이메일"
        />
        <SignupInput
          value={nickname.value}
          placeHloder="사용하실 닉네임을 입력해주세요"
          type="text"
          onChangeHandler={nickname.onChange}
          label="닉네임"
        />
        <SignupInput
          value={password.value}
          placeHloder="비밀번호를 입력해 주세요"
          type="password"
          onChangeHandler={password.onChange}
          label="비밀번호"
        />
        <SignupInput
          value={passwordCheck.value}
          placeHloder="비밀번호를 다시 한 번 입력해주세요"
          type="password"
          onChangeHandler={passwordCheck.onChange}
          label="비밀번호 확인"
        />
      </InputBox>
      <ButtonBox>
        <SubmitButton children="회원가입" />
      </ButtonBox>
    </LoginFormCotaniner>
  );
};

export default SignupForm;
