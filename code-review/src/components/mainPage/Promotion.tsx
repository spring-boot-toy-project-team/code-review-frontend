import styled, { keyframes } from 'styled-components';
import Meeting from '../../../public/assets/meeting.jpg';
import Typed from 'react-typed';
import Image from 'next/image';
import { StyledProps } from '../../../types/types';
import { FaArrowDown } from 'react-icons/fa';

export default function Promotion({ desRef }: any) {
  const onDesClick = () => {
    desRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <ContentWrap>
      <Content>
        <H1 opacity={'0.5'} mdFontSize={'25px'} fontSize={'20px'}>
          개발자의 빠른 성장
        </H1>
        <H1
          mdFontSize="50px"
          color={'#2a51dd'}
          fontWeight={'800'}
          fontSize={'30px'}
        >
          코드리뷰와 함께 하세요
        </H1>
        <H1 mdFontSize={'35px'} fontWeight={'700'} fontSize={'20px'} mb={'0px'}>
          <TypedWrap>
            <H1
              mdFontSize={'35px'}
              opacity={'0.8'}
              fontSize={'20px'}
              mx={'0px 15px 0px 15px'}
            >
              더 나은
            </H1>
            <Typed
              strings={['서비스를 위해', '실력을 위해', '미래를 위해']}
              loop
              typeSpeed={160}
              backSpeed={100}
            />
          </TypedWrap>
        </H1>
        <ImgWrap>
          <Image alt="Mountains" src={Meeting} fill />
        </ImgWrap>
        <ArrowWrap>
          <FaArrowDown
            size={40}
            onClick={() => {
              onDesClick();
            }}
          />
        </ArrowWrap>
      </Content>
    </ContentWrap>
  );
}

const movingArrow = keyframes`
    0% {
    opacity: 0;
    transform: translateY(0)
  }
  30% {
    opacity: 0.3;
    transform: translateY(1.5em)
  }
  50% {
    opacity: 0.8;
    transform: translateY(0em)
  }
  70% {
    opacity: 0.9;
    transform: translateY(1.5em)
  }
  100% {
    opacity: 1;
    transform: translateY(0em)
  }
`;
const opacity = keyframes`
 0% {
    opacity: 0;
  }
 70% {
    opacity: 0.5;
   
  }
  100% {
    opacity: 1;
   
  }
`;

const ArrowWrap = styled.div`
  margin-top: 25px;
  color: white;

  animation: ${movingArrow} 2.5s 0s infinite linear alternate;
  & svg {
    cursor: pointer;
  }
`;

const TypedWrap = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 30px;
  justify-content: center;
`;
const ImgWrap = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  height: 400px;
  position: relative;
  animation: ${opacity} 1.5s 1 ease-in;

  @media (min-width: 640px) {
    width: 550px;
    height: 370px;
  }
  @media (min-width: 768px) {
    width: 700px;
    height: 350px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const H1 = styled.div<StyledProps>`
  font-size: ${(props) => props.fontSize || '45px'};
  margin-bottom: ${(props) => props.mb || '15px'};
  font-weight: ${(props) => props.fontWeight};
  opacity: ${(props) => props.opacity};
  margin: ${(props) => props.mx};
  margin-top: ${(props) => props.mt};
  color: ${(props) => props.color};

  @media (min-width: 768px) {
    font-size: ${(props) => props.mdFontSize || '45px'};
    margin-bottom: ${(props) => props.mb || '30px'};
    opacity: ${(props) => props.opacity};
    margin: ${(props) => props.mx};
  }
`;

const ContentWrap = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  margin: 0px auto 0px auto;
  position: relative;
  align-items: center;
  justify-content: center;
  color: black;
  scroll-snap-align: start;
  background: rgb(255, 255, 255);
  background: -moz-linear-gradient(
    180deg,
    rgba(255, 255, 255, 1) 32%,
    rgba(42, 81, 221, 1) 100%
  );
  background: -webkit-linear-gradient(
    180deg,
    rgba(255, 255, 255, 1) 32%,
    rgba(42, 81, 221, 1) 100%
  );
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 1) 32%,
    rgba(42, 81, 221, 1) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#ffffff",endColorstr="#2a51dd",GradientType=1);
`;
const Content = styled.div`
  width: 100%;
  height: 100%;
  padding: 30px;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  padding-top: 120px;
  text-align: center;
`;
