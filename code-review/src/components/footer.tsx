import { FlexWrap, H1 } from '../styles/uielements';
import styled from 'styled-components';
import {
  FaGithubSquare,
  FaInstagramSquare,
  FaFacebookSquare,
} from 'react-icons/fa';
import { SiNaver } from 'react-icons/si';
import Link from 'next/link';
const Footer = () => {
  return (
    <FooterContainer>
      <FlexWrap items="start" direction="column" padding="0px 15px">
        <H1 fontSize="19px" mdFontSize="24px" fontWeight="bold">
          (주)코드리뷰
        </H1>

        <H1 fontSize="16px" mdFontSize="18px">
          대표이사 진현덕 | 박윤택 | 신동재 | 임동근
        </H1>
        <FlexWrap>
          <H1 fontSize="15px" mdFontSize="17px">
            사업자 등록번호 : 7880-88-78980 호스팅 서비스 : 주식회사 코드리뷰 |
            통신판매업 신고번호 : 2022-서울종로-08764
          </H1>
        </FlexWrap>
        <H1 fontSize="15px" mdFontSize="17px">
          서울 종로구 종로1길 50 더케이트윈타워 B동 2층 (위워크, 광화문)
          고객센터 : 서울 종로구 종로1길 50 더케이트윈타워 B동 3층
        </H1>
        <IconWrap>
          <Link
            href={
              'https://github.com/spring-boot-toy-project-team/code-review-frontend'
            }
          >
            <FaGithubSquare size="30" />
          </Link>

          <FaFacebookSquare size={30} />
          <FaInstagramSquare size={30} />
          <SiNaver size={26} />
        </IconWrap>
      </FlexWrap>
    </FooterContainer>
  );
};

export default Footer;

const IconWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  > svg,
  a {
    margin-right: 10px;
  }

  > a {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const FooterContainer = styled.div`
  width: 100%;
  height: 350px;
  background-color: black;
  color: white;
  padding: 30px 40px;
  display: flex;
  justify-content: start;
  align-items: start;

  @media (min-width: 768px) {
    padding: 30px 150px;
  }

  @media (min-width: 1200px) {
    padding: 40px 350px;
  }
`;
