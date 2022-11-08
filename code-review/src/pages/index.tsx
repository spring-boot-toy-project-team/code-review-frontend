import type { NextPage } from 'next';
import { userInfo } from '../config/Axios/api';

const Home: NextPage = () => {
  const onClickHandler = () => {
    userInfo().then((res) => console.log(res));
  };

  return (
    <>
      <div>Home</div>
      <button onClick={onClickHandler}>버튼</button>
    </>
  );
};

export default Home;
