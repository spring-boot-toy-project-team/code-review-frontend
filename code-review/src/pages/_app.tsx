import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../../styles/global-style';
import { theme } from '../../styles/theme';
<<<<<<< HEAD
=======
import store from '../redux/store';
>>>>>>> 78d68695883b960e488afd2d8d121d6a46d702a0
import Layout from '../components/layout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
<<<<<<< HEAD
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
=======
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </Provider>
>>>>>>> 78d68695883b960e488afd2d8d121d6a46d702a0
  );
}

export default MyApp;
