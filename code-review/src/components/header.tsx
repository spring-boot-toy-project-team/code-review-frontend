import styled from 'styled-components';
import Link from 'next/link';
const Header = () => {
  return (
    <HeaderContainer>
      <div>
        <Link href="/">
          <LinkBox>Logo</LinkBox>
        </Link>

        <LinkBox>질문</LinkBox>
        <LinkBox>리뷰어</LinkBox>
      </div>
      <div>
        <Link href="/login">
          <LinkBox>로그인</LinkBox>
        </Link>
        <Link href="/signup">
          <LinkBox>회원가입</LinkBox>
        </Link>
      </div>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 90px;
  width: 100%;
`;
const LinkBox = styled.span`
  font-size: 33px;
  margin: 0px 40px 0px 40px;
`;
