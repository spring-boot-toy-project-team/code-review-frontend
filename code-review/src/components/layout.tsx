import Header from "./Header/header";
import styled from 'styled-components';
import { GlobalStyle } from '../../styles/global-style';

type Props = { children: React.ReactNode };

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Root>
        <Header />
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
