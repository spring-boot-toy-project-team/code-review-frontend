import styled from 'styled-components';
import Link from 'next/link';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { useState } from 'react';
import { StyledProps } from '../../types/types';
import Coding from '../../public/assets/code.png';
import Image from 'next/image';

const links = [
  { name: '질문', path: '/question' },
  { name: '리뷰어', path: '/reviewer' },
  { name: '로그인', path: '/login' },
  { name: '회원가입', path: '/signup' },
];

const Header = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav((prev) => !prev);
  };
  return (
    <HeaderContainer>
      <HeaderWrap>
        <Logo mb={'0px'}>
          <Image src={Coding} width={30} height={30} alt={'logo'} />
          <Link href={'/'}>
            <h1>Code Review</h1>
          </Link>
        </Logo>
        <LinkUl display="none" mdDisplay="flex" padding="0px">
          {links.map((link) => (
            <Link key={link.name} href={link.path}>
              <LinkBox fontWeight="400">{link.name}</LinkBox>
            </Link>
          ))}
        </LinkUl>
        <OutlineMenu onClick={handleNav}>
          {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
        </OutlineMenu>
        <SlideMenu left={nav ? '0' : '-100%'}>
          <Logo pt={'2rem'} pl={'1rem'} mb={'4rem'}>
            <h1>Code Review</h1>
          </Logo>
          <MiniLinkUl>
            {links.map((link) => (
              <LinkBox
                key={link.name}
                fontWeight={'400'}
                padding={'20px'}
                mb={'20px'}
              >
                <Link href={link.path}>{link.name}</Link>
              </LinkBox>
            ))}
          </MiniLinkUl>
        </SlideMenu>
      </HeaderWrap>
    </HeaderContainer>
  );
};

export default Header;

const SlideMenu = styled.div<StyledProps>`
  z-index: 1;
  position: fixed;
  left: ${(props) => props.left};
  top: 0;
  width: 60%;
  height: 100%;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  transition: ease-in-out;
  transition-duration: 0.3s;
  background-color: white;
`;

const OutlineMenu = styled.div`
  display: block;
  cursor: pointer;

  @media (min-width: 768px) {
    display: none;
  }
`;

const LinkUl = styled.div<StyledProps>`
  display: ${(props) => props.display};
  flex-direction: ${(props) => props.direction || ''};
  padding: ${(props) => props.padding || ''};
  @media (min-width: 768px) {
    display: ${(props) => props.mdDisplay};
  }
`;

const Logo = styled.div<StyledProps>`
  display: flex;
  align-items: center;
  padding-top: ${(props) => props.pt};
  padding-left: ${(props) => props.pl};
  font-size: 35px;
  color: #2a51dd;
  font-weight: 800;
  margin-bottom: ${(props) => props.mb};

  & > img {
    margin-right: 10px;
    margin-bottom: 5px;
  }
`;

const HeaderContainer = styled.div`
  z-index: 1;
  width: 100vw;
  height: 100px;
  background-color: white;
  position: fixed;
`;

const HeaderWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100px;
  max-width: 1240px;
  margin-left: auto;
  margin-right: auto;
  padding: 0px 2.5rem 0 2.5rem;

  @media (min-width: 768px) {
    padding: 0px 1rem 0 1rem;
  }
`;
const LinkBox = styled.span<StyledProps>`
  width: 90%;
  height: 100%;
  display: inline;
  font-size: 17px;
  margin: 0px 40px 0px 40px;
  padding: ${(props) => props.padding};
  border-bottom: ${(props) => props.bt};
  margin-bottom: ${(props) => props.mb};
  font-weight: ${(props) => props.fontWeight};
`;

const MiniLinkUl = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const HeaderShortBtn = styled.div`
  font-size: 25px;
  display: none;
`;
