import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const Spinner = styled.div`
  width: 100px;
  height: 100px;
  border: 10px solid ${(props) => props.theme.colors.black500};
  border-top: 10px solid ${(props) => props.theme.colors.black400};
  border-radius: 50%;

  transition-property: transform;
  animation-name: rotate;
  animation-duration: 1.2s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;

  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

const LoadingSpinner = () => {
  return (
    <Container>
      <Spinner />
    </Container>
  );
};

export default LoadingSpinner;
