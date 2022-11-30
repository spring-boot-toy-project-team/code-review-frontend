import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../../styles/global-style';
import { theme } from '../../styles/theme';
import store from '../redux/store';
import Layout from '../components/layout';
import Footer from '../components/footer';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Layout>
          <Component {...pageProps} />
          <Footer />
        </Layout>
      </ThemeProvider>
    </Provider>
  );
}

export default MyApp;
