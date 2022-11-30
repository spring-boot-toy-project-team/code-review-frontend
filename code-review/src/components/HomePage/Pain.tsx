import styled from 'styled-components';
<<<<<<< HEAD
import { Container, ContentWrap, H1 } from '../../styles/uielements';
import { opacity2 } from '../../styles/keyfreams';
import { StyledProps } from '../../../types/types';

interface Props {
  scrollPosition: number;
  scrollHeight: number;
}

export default function Pain({ scrollPosition, scrollHeight }: Props) {
  return (
    <Container width="100%" bg={'white'}>
      <BackgroundDiv width={`${scrollPosition + 208}px`}>
        <ContentWrap>
          <H1 mdFontSize="60px" color="white" fontSize="22px" mb="70px">
            프로그래밍은 더이상 혼자만의 싸움이 아닙니다.
          </H1>
          <H1 mdFontSize="35px" color="#2a51dd" fontSize="20px">
            코드리뷰와 함께 문제를 해결해보세요!
          </H1>
        </ContentWrap>
      </BackgroundDiv>
=======
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
>>>>>>> 78d68695883b960e488afd2d8d121d6a46d702a0
    </Container>
  );
}

<<<<<<< HEAD
const BackgroundDiv = styled.div<StyledProps>`
  position: relative;
  background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.9)),
    url('assets/black.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  width: ${(props) => props.width};
  height: 100%;
  animation: ${opacity2} 2s 0 ease-in;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
=======
const BackgroundDiv = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  opacity: 0.6;
  animation: ${opacity2} 2s 0 ease-in;
>>>>>>> 78d68695883b960e488afd2d8d121d6a46d702a0
`;
