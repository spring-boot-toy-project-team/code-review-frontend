import { NextPage } from 'next';
import styled from 'styled-components';
import Promotion from './HomePage/Promotion';
import Description from './HomePage/Description';
import { useRef, useCallback, useEffect, useState } from 'react';
import Pain from './HomePage/Pain';
import { useScrollPosition } from '../hooks/useScrollPosition';
import Footer from '../components/footer';
import Cards from './HomePage/Cards';
import Head from 'next/head';
import Layout from '../components/layout';

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
  /* min-height: 100vh; */
  scroll-snap-type: y proximity;
  /* overflow-y: scroll; */
  height: 100%;
`;
