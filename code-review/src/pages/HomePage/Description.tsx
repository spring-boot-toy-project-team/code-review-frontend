import React, { forwardRef } from 'react';
import { Container, ContentWrap, H1 } from '../../../styles/uielements';
import { useRef } from 'react';
import useObserver from '../../hooks/useObserver';
import styled, { css } from 'styled-components';
import { StyledProps } from '../../../types/types';
import { slideFromLeft, slideUp } from '../../../styles/keyfreams';

const Description = forwardRef<HTMLDivElement>((props, ref) => {
  const contentRef = useRef<HTMLHeadingElement>(null);
  const { show, setShow } = useObserver(contentRef);
  return (
    <Container height="80vh" className="description" ref={ref} id="description">
      <DesContentWrap show={show}>
        <H1
          ref={contentRef}
          mdFontSize="50px"
          color={'#2a51dd'}
          fontWeight={'800'}
          fontSize={'30px'}
          orderToShow={1}
          show={show}
        >
          왜 코드리뷰가 필요할까요?
        </H1>
        <H1
          opacity={'0.8'}
          mdFontSize={'25px'}
          orderToShow={2}
          fontSize={'20px'}
          show={show}
        >
          최고의 개발자들은 지속가능한 기술력의 핵심으로 코드리뷰를 꼽습니다
        </H1>
        <H1
          mdFontSize={'35px'}
          fontWeight={'700'}
          fontSize={'20px'}
          mb={'20px'}
          orderToShow={2}
          show={show}
        >
          지금까지 경험하지 못한 다양한 코드와 사람들!
        </H1>
        <H1
          mdFontSize={'35px'}
          orderToShow={3}
          show={show}
          fontWeight={'700'}
          fontSize={'20px'}
          mb={'0px'}
        >
          지금 바로 코드리뷰에서 만나보세요
        </H1>
      </DesContentWrap>
    </Container>
  );
});

export default Description;

const DesContentWrap = styled.div<StyledProps>`
  width: 100%;
  height: 100%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  padding-top: 100px;
  text-align: center;
  margin-top: 10px;
  transition: all 1s;
  visibility: ${(props) =>
    props.show === true ? 'visible' : 'hidden' || 'visible'};

  ${(props) =>
    props.show &&
    css`
      animation: ${slideUp} 1s ease-in-out;
    `};

  @media (min-width: 768px) {
    margin-top: 0px;
  }
`;
