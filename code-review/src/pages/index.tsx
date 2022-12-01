import { NextPage } from 'next';
import styled from 'styled-components';
import Promotion from '../components/HomePage/Promotion';
import Description from '../components/HomePage/Description';
import { useRef } from 'react';
import Pain from '../components/HomePage/Pain';
import { useScrollPosition } from '../hooks/useScrollPosition';
import Cards from '../components/HomePage/Cards';
import Head from 'next/head';

const Home: NextPage = () => {
  const desRef = useRef<HTMLDivElement | null>(null);
  const { scrollPosition, scrollHeight } = useScrollPosition();

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <MainContianer>
        <Promotion desRef={desRef} />
        <Description ref={desRef} />
        <Pain scrollPosition={scrollPosition} scrollHeight={scrollHeight} />
        <Cards />
      </MainContianer>
    </>
  );
};

export default Home;

const MainContianer = styled.div`
  scroll-snap-type: y proximity;
  height: 100%;
`;
