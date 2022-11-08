const validateEmail = (email: string) => {
  const regex =
    /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;

  return regex.test(email);
};

const validatePassword = (password: string) => {
  let regex = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,10}$/; //  8 ~ 10자 영문, 숫자 조합

  return regex.test(password); // 형식에 맞는 경우 true 리턴
};

export const LoginCheckFnc = (
  email: string,
  password: string,
  setValid: (message: string) => void,
  setBoolean: (boolean: boolean) => void
) => {
  if (email.length === 0) {
    setValid('이메일을 입력해 주세요.');
    setBoolean(true);
  } else if (email.length > 0 && validateEmail(email) === false) {
    setValid('이메일을 정확하게 입력해 주세요.');
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
  email: string,
  setValid: (message: string) => void,
  setBoolean: (boolean: boolean) => void
) => {
  if (email.length === 0) {
    setValid('이메일을 입력해 주세요.');
    setBoolean(true);
  } else if (email.length > 0 && validateEmail(email) === false) {
  }
};
