import Image from 'next/image';
import styled from 'styled-components';
import { Container, FlexWrap, H1 } from '../../styles/uielements';
import Share from '../../../public/assets/share.jpg';

export default function Cards() {
  return (
    <Container direction="column">
      <FlexWrap direction="column">
        <H1
          mdFontSize="50px"
          color="black"
          fontWeight="bold"
          fontSize="30px"
          mb="40px"
        >
          개발자의 성장을 돕는
        </H1>
        <H1
          mdFontSize="35px"
          opacity="0.5"
          fontWeight="bold"
          fontSize="22px"
          mb="60px"
        >
          코드리뷰만의 서비스
        </H1>
      </FlexWrap>
      <GridWrap>
        <Card>
          <ImgWrap>
            <Image fill alt="share" src={Share} />
          </ImgWrap>
          <H1 fontSize="15px" mdFontSize="18px" mb="10px">
            코드리뷰는 효율적인
          </H1>
          <H1 fontSize="15px" mdFontSize="18px">
            개발자의 소통을 돕습니다.
          </H1>
        </Card>
        <Card>
          <ImgWrap>
            <Image fill alt="share" src={Share} />
          </ImgWrap>
          <H1 fontSize="15px" mdFontSize="18px" mb="10px">
            다양한 코드를 보고 배우며
          </H1>
          <H1 fontSize="15px" mdFontSize="18px">
            빠르게 성장합니다.
          </H1>
        </Card>
        <Card>
          <ImgWrap>
            <Image fill alt="share" src={Share} />
          </ImgWrap>

          <H1 fontSize="15px" mdFontSize="18px" mb="10px">
            직면한 문제에 대해 질문하고 답하며
          </H1>
          <H1 fontSize="15px" mdFontSize="18px">
            문제 해결을 돕습니다.
          </H1>
        </Card>
      </GridWrap>
    </Container>
  );
}

const GridWrap = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(1, 300px);
  justify-content: center;
  justify-items: center;
  align-items: center;
  width: 100%;
  height: 500px;
  gap: 5px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 300px);
    gap: 50px;
  }
  @media (min-width: 1028px) {
    grid-template-columns: repeat(3, 350px);
    gap: 50px;
  }
`;

const ImgWrap = styled.div`
  position: relative;
  width: 100%;
  height: 250px;
  margin-bottom: 35px;
  border-radius: 10px;
  overflow: hidden;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  height: 350px;
  width: 100%;
  box-shadow: rgb(0 0 0 / 10%) 0px 0px 10px;
  border-radius: 10px;
`;
