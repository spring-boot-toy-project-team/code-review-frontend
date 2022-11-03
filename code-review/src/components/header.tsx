import styled from 'styled-components';
import Link from 'next/link';

const links = [
  { name: '질문', path: '/question' },
  { name: '리뷰어', path: '/reviewer' },
];
const authLinks = [
  { name: '로그인', path: '/login' },
  { name: '회원가입', path: '/signup' },
];

const Header = () => {
  return (
    <HeaderContainer>
      <div>
        <span>Logo</span>
        {links.map((link) => (
          <Link href={link.path}>
            <LinkBox>{link.name}</LinkBox>
          </Link>
        ))}
      </div>
      <div>
        {authLinks.map((link) => (
          <Link href={link.path}>
            <LinkBox>{link.name}</LinkBox>
          </Link>
        ))}
      </div>
      <HeaderShortBtn>slide</HeaderShortBtn>
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
  display: inline;
  font-size: 33px;
  margin: 0px 40px 0px 40px;
  @media (max-width: 800px) {
    margin: 0px 15px 0px 15px;
  }
  @media (max-width: 550px) {
    margin: 0px 5px 0px 5px;
  }
  @media (max-width: 430px) {
    display: none;
  }
`;

const HeaderShortBtn = styled.div`
  font-size: 25px;
  display: none;
  @media (max-width: 430px) {
    display: flex;
  }
`;
