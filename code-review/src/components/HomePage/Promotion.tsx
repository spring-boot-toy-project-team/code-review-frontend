import styled from 'styled-components';
import Meeting from '../../../public/assets/meeting.jpg';
import Typed from 'react-typed';
import Image from 'next/image';
import { FaArrowDown } from 'react-icons/fa';
import { ContentWrap, H1 } from '../../../styles/uielements';
import { opacity, movingArrow } from '../../../styles/keyfreams';
import { MutableRefObject } from 'react';

interface Props {
  desRef: MutableRefObject<HTMLDivElement | null>;
}

export default function Promotion({ desRef }: Props) {
  const onDesClick = () => {
    desRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <ProContainer>
      <ContentWrap justify="start">
        <H1 opacity={'0.5'} mdFontSize={'25px'} fontSize={'17px'}>
          개발자의 빠른 성장
        </H1>
        <H1
          mdFontSize="50px"
          color={'#2a51dd'}
          fontWeight={'800'}
          fontSize={'25px'}
        >
          코드리뷰와 함께 하세요
        </H1>
        <H1 mdFontSize={'35px'} fontWeight={'700'} fontSize={'17px'} mb={'0px'}>
          <TypedWrap>
            <H1
              mdFontSize={'35px'}
              opacity={'0.8'}
              fontSize={'17px'}
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
          <Image alt="Mountains" priority src={Meeting} sizes={'100%'} fill />
        </ImgWrap>
        <ArrowWrap>
          <FaArrowDown
            size={40}
            onClick={() => {
              onDesClick();
            }}
          />
        </ArrowWrap>
      </ContentWrap>
    </ProContainer>
  );
}

const ArrowWrap = styled.div`
  margin-top: 20px;
  color: white;

  animation: ${movingArrow} 2.5s 0s infinite linear alternate;
  & svg {
    cursor: pointer;
  }
`;

const ImgWrap = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 90%;
  height: 300px;
  position: relative;
  animation: ${opacity} 0.5s 1 ease-in;

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

export const ProContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  margin: 0px auto 0px auto;
  position: relative;
  align-items: center;
  justify-content: center;
  color: black;
  scroll-snap-align: start;
  background: rgb(199, 213, 230);
  background: linear-gradient(
    0deg,
    rgba(199, 213, 230, 1) 0%,
    rgba(255, 255, 255, 1) 59%
  );
`;
export const TypedWrap = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 30px;
  justify-content: center;

  @media (min-width: 768px) {
    margin-bottom: 50px;
  }
`;
