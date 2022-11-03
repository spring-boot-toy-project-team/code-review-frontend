import type { NextPage } from 'next';

const Home: NextPage = () => {
  const REST_API_KEY = process.env.NEXT_PUBLIC_KAKAO_REST_API_KEY;
  const REDIRECT_URI = process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URI;
  const url = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
  const onClickHandler = () => {
    console.log(REST_API_KEY);
    console.log(REDIRECT_URI);
    console.log(url);
    window.location.href = url;
  };
  return (
    <>
      <div>Home</div>
      <button onClick={onClickHandler}>Kakao</button>
    </>
  );
};

export default Home;
