export const validateEmail = (email: string) => {
  const regex =
    /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
  return regex.test(email);
};

export const LoginEmailCheck = (
  email: string,
  setValid: (message: string) => void,
  setBoolean: (boolean: boolean) => void
) => {
  if (email.length === 0) {
    setValid('이메일을 입력해 주세요.');
    setBoolean(true);
  } else if (email.length > 0 && validateEmail(email) === false) {
    setValid('이메일을 정확하게 입력해 주세요.');
    setBoolean(true);
  } else {
    setBoolean(false);
    //Todo 여기서 fetch 하기
  }
};
