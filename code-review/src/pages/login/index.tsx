import styled from 'styled-components';
import { flexCenter } from '../../../styles/css-style';
import LoginForm from '../../components/Login/LoginForm';

import Oauths from '../../components/Login/Oauths';
import Options from '../../components/Login/Options';

const Login = () => {
  return (
    <PageContainer>
      <LoginContainer>
        <LoginForm />
        <Options />
        <Oauths />
      </LoginContainer>
    </PageContainer>
  );
};

const PageContainer = styled.div`
  width: 100%;
  height: 100vh;
  padding: 24px 0;
  ${flexCenter}
`;

const LoginContainer = styled.div`
  max-width: 420px;
  padding: 60px 70px;
  border: 1px solid ${({ theme }) => theme.colors.black500};
`;

export default Login;
