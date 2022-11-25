import styled from 'styled-components';

export default function Cards() {
  return <CardsContainer>Cards</CardsContainer>;
}

const CardsContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: black;
  scroll-snap-align: start;
`;
