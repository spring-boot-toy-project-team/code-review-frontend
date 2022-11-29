import React, { forwardRef } from 'react';
import { Container, ContentWrap, H1 } from '../../styles/uielements';
import { useState, useRef, useEffect } from 'react';
import { useScrollPosition } from '../../hooks/useScrollPosition';

const Description = forwardRef<HTMLInputElement, any>((props, ref) => {
  const [show, setShow] = useState(false);
  const contentRef = useRef<any>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (entry.isIntersecting) setShow(true);
      else setShow(false);
    });
    console.log(observer);
    observer.observe(contentRef.current);
  }, []);

  return (
    <Container height="80vh" className="description" ref={ref} id="description">
      <ContentWrap>
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
          opacity={'0.6'}
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
      </ContentWrap>
    </Container>
  );
});

export default Description;
