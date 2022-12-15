import Image from 'next/image';
import styled from 'styled-components';
import { Container, FlexWrap, H1 } from '../../../styles/uielements';
import Share from '../../../public/assets/slide/conversation.jpg';
import Code from '../../../public/assets/slide/code1.jpg';
import Question from '../../../public/assets/slide/question.jpg';
import Chat from '../../../public/assets/slide/moniter.jpg';
import Productive from '../../../public/assets/slide/productive.jpeg';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import useObserver from '../../hooks/useObserver';
import { useRef } from 'react';

export default function Cards() {
  const cardsRef = useRef<HTMLDivElement>(null);
  const slideLeft = () => {
    let slider = document.getElementById('slider');
    slider!.scrollLeft = slider!.scrollLeft - 350;
  };
  const slideRight = () => {
    let slider = document.getElementById('slider');
    slider!.scrollLeft = slider!.scrollLeft + 350;
  };

  const { show } = useObserver(cardsRef);

  return (
    <Container show={show} ref={cardsRef} height={'90vh'} direction="column">
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
        <FlexWrap mb={'20px'}>
          <H1
            color="#2a51dd"
            mdFontSize="35px"
            fontWeight="bold"
            fontSize="22px"
          >
            코드리뷰
          </H1>
          <H1 mdFontSize="35px" opacity="0.5" fontWeight="bold" fontSize="22px">
            만의 서비스
          </H1>
        </FlexWrap>
      </FlexWrap>
      <Flex>
        <MdChevronLeft onClick={slideLeft} size={60} />
        <GridWrap id="slider">
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
              <Image fill alt="Code" src={Code} />
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
              <Image fill alt="question" src={Question} />
            </ImgWrap>

            <H1 fontSize="15px" mdFontSize="18px" mb="10px">
              직면한 문제에 대해 질문하고 답하며
            </H1>
            <H1 fontSize="15px" mdFontSize="18px">
              문제 해결을 돕습니다.
            </H1>
          </Card>
          <Card>
            <ImgWrap>
              <Image fill alt="chat" src={Chat} />
            </ImgWrap>

            <H1 fontSize="15px" mdFontSize="18px" mb="10px">
              실시간 채팅을 통해 프로젝트의 진행
            </H1>
            <H1 fontSize="15px" mdFontSize="18px">
              상황을 쉽고 빠르게 전달 합니다.
            </H1>
          </Card>
          <Card>
            <ImgWrap>
              <Image fill alt="productive" src={Productive} />
            </ImgWrap>

            <H1 fontSize="15px" mdFontSize="18px" mb="10px">
              시간과 노력은 낮추고 서비스의 품질은
            </H1>
            <H1 fontSize="15px" mdFontSize="18px">
              높일 수 있습니다.
            </H1>
          </Card>
        </GridWrap>
        <MdChevronRight onClick={slideRight} size={60} />
      </Flex>
    </Container>
  );
}

const GridWrap = styled.div`
  width: 100%;
  height: 100%;
  overflow-x: scroll;

  white-space: nowrap;
  scroll-behavior: smooth;

  & > div:last-child {
    margin-right: 0;
  }
`;

const ImgWrap = styled.div`
  position: relative;
  width: 100%;
  height: 250px;
  margin-bottom: 35px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.44) 0px 3px 8px;
`;

const Card = styled.div`
  display: inline-block;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 50px;
  height: 250px;
  width: 300px;
  padding: 10px;
  border-radius: 10px;
  cursor: pointer;
  &:hover {
    transform: scale(1.06);
    transition-duration: 0.3s;
  }
`;

const Flex = styled.div`
  width: 392px;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;

  > svg {
    cursor: pointer;
  }

  @media (min-width: 1028px) {
    width: 1108px;
  }
`;
