import styled from 'styled-components';
import { flexCenter } from '../../../styles/css-style';
import SignupForm from '../../components/Signup/SignupForm';

const PageContainer = styled.div`
  width: 100%;
  height: 100vh;
  padding: 24px 0;
  ${flexCenter}
`;

const SignupContainer = styled.div`
  width: 40%;
  padding: 60px 70px;
  border: 1px solid ${({ theme }) => theme.colors.black500};
`;

const Signup = () => {
  return (
    <PageContainer>
      <SignupContainer>
        <SignupForm />
      </SignupContainer>
    </PageContainer>
  );
};

export default Signup;
