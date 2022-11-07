import Header from './header';
import Footer from './footer';
import styled from 'styled-components';
import { GlobalStyle } from '../styles/global-style';

type Props = { children: React.ReactNode };
const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Root>
        <GlobalStyle />

        {children}
      </Root>
    </>
  );
};

export default Layout;

const Root = styled.div`
  background-color: white;
`;
