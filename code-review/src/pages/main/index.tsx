import { NextPage } from 'next';
import Head from 'next/head';
import Layout from '../../components/layout';

const Main: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>코드리뷰</title>
        <meta name="description" content="코드리뷰와 함께!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>Main Page</div>
    </Layout>
  );
};

export default Main;
