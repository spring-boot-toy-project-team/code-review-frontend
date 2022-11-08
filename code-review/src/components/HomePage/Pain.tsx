import styled from 'styled-components';
import { Container } from '../../styles/uielements';
import Painful from '../../../public/assets/painful.jpg';
import Image from 'next/image';
import { opacity2 } from '../../styles/keyfreams';

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

const BackgroundDiv = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  opacity: 0.6;
  animation: ${opacity2} 2s 0 ease-in;
`;
