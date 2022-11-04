import { RiKakaoTalkFill } from 'react-icons/ri';
import { FcGoogle } from 'react-icons/fc';
import { AiFillGithub } from 'react-icons/ai';

const REDIRECT_URI = process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URI;

const KAKAO_API_KEY = process.env.NEXT_PUBLIC_KAKAO_REST_API_KEY;
const KAKAO_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${KAKAO_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

const GITHUB_CLIENT_ID = process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID;
const GITHUB_URL = `https://github.com/login/oauth/authorize?client_id=${GITHUB_CLIENT_ID}&redirect_uri=${REDIRECT_URI}`;

export const OauthItems = [
  {
    icon: <FcGoogle size={35} />,
    background: '#E0E0E0',
    type: 'google',
    href: 'google.com',
  },
  {
    icon: <RiKakaoTalkFill size={35} />,
    background: '#FEE501',
    type: 'kakao',
    href: KAKAO_URL,
  },
  {
    icon: <AiFillGithub size={35} color="white" />,
    background: '#0D1117',
    type: 'github',
    href: GITHUB_URL,
  },
];
