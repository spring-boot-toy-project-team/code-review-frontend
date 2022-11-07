import styled from 'styled-components';
import Meeting from '../../../public/assets/meeting.jpg';
import Typed from 'react-typed';
import Image from 'next/image';
import { StyledProps } from '../../../types/types';

export default function Promotion() {
  return (
    <ContentWrap>
      <H1 opacity={'0.7'} mdFontSize={'20px'} fontSize={'20px'}>
        개발자의 빠른 성장
      </H1>
      <H1 mdFontSize="50px" fontWeight={'800'} fontSize={'35px'}>
        코드리뷰와 함께 하세요
      </H1>
      <H1 mdFontSize={'35px'} fontSize={'20px'}>
        <TypedWrap>
          <H1 mdFontSize={'35px'} fontSize={'20px'} mx={'0px 15px 0px 15px'}>
            더 나은
          </H1>
          <Typed
            strings={['서비스를 위해', '실력을 위해', '미래를 위해']}
            loop
            typeSpeed={120}
            backSpeed={120}
          />
        </TypedWrap>
      </H1>
      <ImgWrap>
        <Image alt="Mountains" src={Meeting} fill />
      </ImgWrap>
    </ContentWrap>
  );
}

const TypedWrap = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 30px;
`;
const ImgWrap = styled.div`
  width: 100vw;
  height: 300px;
  opacity: 0.9;
  position: relative;
  @media (min-width: 640px) {
    width: 550px;
    height: 400px;
  }
  @media (min-width: 768px) {
    width: 750px;
    height: 500px;
  }
`;

const H1 = styled.div<StyledProps>`
  font-size: ${(props) => props.fontSize || '45px'};
  margin-bottom: ${(props) => props.mb || '25px'};
  font-weight: ${(props) => props.fontWeight};
  opacity: ${(props) => props.opacity};
  margin: ${(props) => props.mx};

  @media (min-width: 768px) {
    font-size: ${(props) => props.mdFontSize || '45px'};
    margin-bottom: ${(props) => props.mb || '25px'};
    opacity: ${(props) => props.opacity};
    margin: ${(props) => props.mx};
  }
`;

const ContentWrap = styled.div`
  max-width: 800px;
  margin-bottom: -96px;
  width: 100%;
  height: 89vh;
  margin: 0px auto 0px auto;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: center;
  color: white;
`;
