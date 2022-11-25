import { NextPage } from 'next';
import styled from 'styled-components';
import Promotion from '../components/HomePage/Promotion';
import Description from '../components/HomePage/Description';
import { useRef } from 'react';
import Pain from '../components/HomePage/Pain';

const Home: NextPage = () => {
  const desRef = useRef<HTMLInputElement>(null);

  return (
    <MainContianer>
      <Promotion desRef={desRef} />
      <Description ref={desRef} />
      <Pain />
    </MainContianer>
  );
};

export default Home;

const MainContianer = styled.div`
  min-height: 100vh;
  scroll-snap-type: y proximity;
  overflow-y: scroll;
  height: 100vh;
`;
