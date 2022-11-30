import styled from 'styled-components';
import { flexCenter } from '../../../styles/css-style';
import LoadingSpinner from '../../common/Loading/LoadingSpinner';

const PageContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Oauth = () => {
  return (
    <PageContainer>
      <h1>Login...</h1>
      <LoadingSpinner />
    </PageContainer>
  );
};

export default Oauth;
