import { NextPage } from 'next';
import Layout from '../components/layout';
import Header from '../components/header';
import styled from 'styled-components';

import Promotion from '../components/mainPage/Promotion';
import Description from '../components/mainPage/Description';
import { useRef } from 'react';
import Pain from '../components/mainPage/Pain';

const Main: NextPage = () => {
  const proRef = useRef<HTMLInputElement>(null);
  const desRef = useRef<HTMLInputElement>(null);

  return (
    <MainContianer>
      <Promotion desRef={desRef} />
      <Description ref={desRef} />
      <Pain />
    </MainContianer>
  );
};

export default Main;

const MainContianer = styled.div`
  min-height: 100vh;
  scroll-snap-type: y proximity;
  overflow-y: scroll;
  height: 100vh;
`;
