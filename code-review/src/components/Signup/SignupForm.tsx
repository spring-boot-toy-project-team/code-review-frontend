import styled from 'styled-components';
import React, { useCallback, useEffect, useRef, useState } from 'react';

import useInput from '../../hook/useInput';
import SubmitButton from '../../common/Button/SubmitButton';
import SignupInput from '../../common/Input/SignupInput';
import { userSignup } from '../../config/Axios/api';
import {
  EmailCheckFnc,
  NicknameCheckFuc,
  PasswordCheckFuc,
  PasswordReCheckFuc,
} from '../../assets/FormCheck/Check';

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

  const emailRef = useRef<HTMLInputElement>(null);
  const nicknameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const passwordCheckRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    EmailCheckFnc(email.value, setEmailErrorMsg, setShowEmailErrorMessage);
  }, [email.value]);

  useEffect(() => {
    NicknameCheckFuc(
      nickname.value,
      setNicknameErrorMsg,
      setShowNicknameErrorMessage
    );
  }, [nickname.value]);

  useEffect(() => {
    PasswordCheckFuc(
      password.value,
      setPasswordErrorMsg,
      setShowPasswordErrorMessage
    );
  }, [password.value]);

  useEffect(() => {
    PasswordReCheckFuc(
      password.value,
      passwordCheck.value,
      setPasswordCehckErrorMsg,
      setShowPasswordCheckErrorMessage
    );
  }, [passwordCheck.value]);

  const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const userInfo = {
      email: email.value,
      nickName: nickname.value,
      password: password.value,
    };

    if (email.value.length === 0) {
      emailRef.current!.focus();
      setEmailErrorMsg('필수 정보입니다.');
      setShowEmailErrorMessage(true);
      return;
    }
    if (nickname.value.length === 0) {
      nicknameRef.current!.focus();
      setNicknameErrorMsg('필수 정보입니다.');
      setShowNicknameErrorMessage(true);
      return;
    }
    if (password.value.length === 0) {
      passwordRef.current!.focus();
      setPasswordErrorMsg('필수 정보입니다.');
      setShowPasswordErrorMessage(true);
      return;
    }
    if (passwordCheck.value.length === 0) {
      passwordCheckRef.current!.focus();
      setPasswordCehckErrorMsg('필수 정보입니다.');
      setShowPasswordCheckErrorMessage(true);
      return;
    }

    userSignup(userInfo).then((res) => console.log('회원가입 성공'));
  };

  return (
    <LoginFormCotaniner onSubmit={onSubmitHandler}>
      <TitleWrap>Logo</TitleWrap>
      <InputBox>
        <SignupInput
          useRef={emailRef}
          value={email.value}
          placeHloder=""
          type="text"
          onChangeHandler={email.onChange}
          label="이메일"
          validation={eamilErrorMsg}
          visible={showEmailErrorMessage}
        />
        <SignupInput
          useRef={nicknameRef}
          value={nickname.value}
          placeHloder="5~20자 한글, 영어, 숫자"
          type="text"
          onChangeHandler={nickname.onChange}
          label="닉네임"
          validation={nicknameErrorMsg}
          visible={showNicknameErrorMessage}
        />
        <SignupInput
          useRef={passwordRef}
          value={password.value}
          placeHloder="5~20자 영문 대 소문자, 숫자, 특수문자"
          type="password"
          onChangeHandler={password.onChange}
          label="비밀번호"
          validation={passwordErrorMsg}
          visible={showPasswordErrorMessage}
        />
        <SignupInput
          useRef={passwordCheckRef}
          value={passwordCheck.value}
          placeHloder="비밀번호 재입력"
          type="password"
          onChangeHandler={passwordCheck.onChange}
          label="비밀번호 확인"
          validation={passwordCheckErrorMsg}
          visible={showPasswordCheckErrorMessage}
        />
      </InputBox>
      <ButtonBox>
        <SubmitButton children="회원가입 하기" />
      </ButtonBox>
    </LoginFormCotaniner>
  );
};

export default SignupForm;
