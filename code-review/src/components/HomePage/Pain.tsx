import styled, { keyframes } from 'styled-components';
import { Container, opacity } from '../../styles/uielements';
import Painful from '../../../public/assets/painful.jpg';
import Image from 'next/image';

export default function Pain() {
  return (
    <Container bg={'black'}>
      <BackgroundDiv>
        <Image src={Painful} fill alt="painful image" />
      </BackgroundDiv>
      Pain
    </Container>
  );
}

const opacity2 = keyframes`
  0% {
    opacity: 0;
  }
  100%{
    opacity: 0.6;
  }

`;

const BackgroundDiv = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  opacity: 0.6;
  animation: ${opacity2} 2s 0 ease-in;
`;
