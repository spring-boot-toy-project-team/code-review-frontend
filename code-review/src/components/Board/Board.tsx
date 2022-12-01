import Image from 'next/image';
import styled from 'styled-components';
import { FlexWrap, H1 } from '../../../styles/uielements';

import Unknown from '../../../public/assets/unknown.png';
const Board = () => {
  return (
    <BoardContainer>
      <FlexWrap direction="column" padding="0px 20px">
        <Item>
          <FlexWrap mb="15px" justify="start">
            <Image width={22} alt="unknown image" src={Unknown} />{' '}
            <H1 mx="0px 6px" mb="0" fontSize="11px" mdFontSize="15px">
              @dukjjang
            </H1>
          </FlexWrap>
          <H1
            mx="15px 15px"
            textAlign="start"
            fontSize="17px"
            mdFontSize="22px"
          >
            제 코드 한번만 봐주세요 ㅠㅠ
          </H1>
          <FlexWrap justify="space-between">
            <H1 mb="0" fontSize="13px" mdFontSize="15px">
              #Java #Spring
            </H1>
            <H1 mb="0" fontSize="13px" mdFontSize="15px">
              30분 전
            </H1>
          </FlexWrap>
        </Item>
        <Item>
          <FlexWrap mb="15px" justify="start">
            <Image width={22} alt="unknown image" src={Unknown} />{' '}
            <H1 mx="0px 6px" mb="0" fontSize="11px" mdFontSize="15px">
              @dukjjang
            </H1>
          </FlexWrap>
          <H1
            mx="15px 15px"
            textAlign="start"
            fontSize="17px"
            mdFontSize="22px"
          >
            제 코드 한번만 봐주세요 ㅠㅠ
          </H1>
          <FlexWrap justify="space-between">
            <H1 mb="0" fontSize="13px" mdFontSize="15px">
              #Java #Spring
            </H1>
            <H1 mb="0" fontSize="13px" mdFontSize="15px">
              30분 전
            </H1>
          </FlexWrap>
        </Item>
        <Item>
          <FlexWrap mb="15px" justify="start">
            <Image width={22} alt="unknown image" src={Unknown} />{' '}
            <H1 mx="0px 6px" mb="0" fontSize="11px" mdFontSize="15px">
              @dukjjang
            </H1>
          </FlexWrap>
          <H1
            mx="15px 15px"
            textAlign="start"
            fontSize="17px"
            mdFontSize="22px"
          >
            제 코드 한번만 봐주세요 ㅠㅠ
          </H1>
          <FlexWrap justify="space-between">
            <H1 mb="0" fontSize="13px" mdFontSize="15px">
              #Java #Spring
            </H1>
            <H1 mb="0" fontSize="13px" mdFontSize="15px">
              30분 전
            </H1>
          </FlexWrap>
        </Item>
      </FlexWrap>
    </BoardContainer>
  );
};

export default Board;

const BoardContainer = styled.div`
  background-color: white;
  padding: 0px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  padding-bottom: 20px;
  width: 95%;

  @media (min-width: 768px) {
    width: 70%;
  }
`;

const Item = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  width: 100%;
  padding: 15px 0px;
`;
