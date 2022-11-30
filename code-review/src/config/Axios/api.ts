import Axios from '.';

interface loginBody {
  email: string;
  password: string;
}

export const userLogin = async (body: loginBody) => {
  const url = '/auth/login';
  return Axios.post(url, body);
};

interface signupBody {
  email: string;
  nickName: string;
  password: string;
}

export const userSignup = async (body: signupBody) => {
  const url = '/auth/signup';
  return Axios.post(url, body);
};

export const userInfo = async () => {
  const url = '/api/v1/members/info';
  return Axios.get(url);
};
