const validateEmail = (email: string) => {
  const regex =
    /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;

  return regex.test(email);
};

const validateNickname = (nickname: string) => {
  const regex = /^([a-zA-Z0-9ㄱ-ㅎ|ㅏ-ㅣ|가-힣]).{5,20}$/;

  return regex.test(nickname);
};

const validatePassword = (password: string) => {
  let regex =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{5,20}$/;

  return regex.test(password);
};

export const LoginCheckFnc = (
  email: string,
  password: string,
  setValid: React.Dispatch<React.SetStateAction<string>>,
  setBoolean: React.Dispatch<React.SetStateAction<boolean>>
) => {
  if (email.length === 0) {
    setValid('이메일을 입력해 주세요.');
    setBoolean(true);
  } else if (email.length > 0 && validateEmail(email) === false) {
    setValid('이메일 주소가 올바르지 않습니다.');
    setBoolean(true);
  } else if (password.length === 0) {
    setValid('비밀번호를 입력해 주세요.');
    setBoolean(true);
  } else {
    setBoolean(false);
    return true;
  }
};

export const EmailCheckFnc = (
  checking: string,
  setValid: React.Dispatch<React.SetStateAction<string>>,
  setBoolean: React.Dispatch<React.SetStateAction<boolean>>
) => {
  if (checking.length > 0 && validateEmail(checking) === false) {
    setValid('이메일 주소가 올바르지 않습니다.');
    setBoolean(true);
    return;
  }
  setBoolean(false);
};

export const NicknameCheckFuc = (
  checking: string,
  setValid: React.Dispatch<React.SetStateAction<string>>,
  setBoolean: React.Dispatch<React.SetStateAction<boolean>>
) => {
  if (
    checking.length > 0 &&
    validateNickname(checking) === false &&
    checking.length < 5
  ) {
    setValid('닉네임은 5~20자 한글, 영어, 숫자만 사용 가능합니다.');
    setBoolean(true);
    return;
  }
  setBoolean(false);
};

export const PasswordCheckFuc = (
  checking: string,
  setValid: React.Dispatch<React.SetStateAction<string>>,
  setBoolean: React.Dispatch<React.SetStateAction<boolean>>
) => {
  if (
    checking.length > 0 &&
    validatePassword(checking) === false &&
    checking.length < 5
  ) {
    setValid('비밀번호는 5~20자 영문 대 소문자, 숫자, 특수문자를 사용하세요.');
    setBoolean(true);
    return;
  }
  setBoolean(false);
};

export const PasswordReCheckFuc = (
  password: string,
  passwordCheck: string,
  setValid: React.Dispatch<React.SetStateAction<string>>,
  setBoolean: React.Dispatch<React.SetStateAction<boolean>>
) => {
  if (passwordCheck !== password) {
    setValid('비밀번호가 일치하지 않습니다.');
    setBoolean(true);
    return;
  }
  setBoolean(false);
};
