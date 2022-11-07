import { NextPage } from 'next';

import Layout from '../components/layout';
import Header from '../components/header';
import styled from 'styled-components';

import Promotion from '../components/mainPage/Promotion';

const Main: NextPage = () => {
  return (
    <Layout>
      <MainContianer>
        <Header />
        <Promotion />
      </MainContianer>
    </Layout>
  );
};

export default Main;

const MainContianer = styled.div`
  background-color: #2a51dd;
  width: 100vw;
  min-height: 100vh;
`;
