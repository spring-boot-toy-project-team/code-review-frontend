import { NextPage } from 'next';
import styled from 'styled-components';
import Promotion from '../components/HomePage/Promotion';
import Description from '../components/HomePage/Description';
import { useRef, useCallback, useEffect, useState } from 'react';
import Pain from '../components/HomePage/Pain';
import { useScrollPosition } from '../hooks/useScrollPosition';
import Footer from '../components/footer';

const Home: NextPage = () => {
  const desRef = useRef<HTMLInputElement>(null);
  const { scrollPosition, scrollHeight } = useScrollPosition();

  return (
    <MainContianer>
      <Promotion desRef={desRef} />
      <Description ref={desRef} />
      <Pain scrollPosition={scrollPosition} scrollHeight={scrollHeight} />
      <Footer />
    </MainContianer>
  );
};

export default Home;

const MainContianer = styled.div`
  /* min-height: 100vh; */
  /* scroll-snap-type: y proximity; */
  /* overflow-y: scroll; */
  /* height: 100vh; */
`;
