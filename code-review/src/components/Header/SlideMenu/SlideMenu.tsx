import React from 'react';
import styled from 'styled-components';
import { StyledProps } from '../../../types/types';
import Link from 'next/link';
import { MiniLinkUl, LinkBox, Logo } from '../header';

interface Props {
  links: { name: string; path: string }[];
  handleNav: () => void;
  nav: boolean;
}

const SlideMenu = ({ links, handleNav, nav }: Props) => {
  return (
    <Slide left={nav ? '0' : '-100%'}>
      <Logo pt={'2rem'} pl={'1rem'} mb={'4rem'}>
        <Link onClick={handleNav} href="/">
          <h1>Code Review</h1>
        </Link>
      </Logo>
      <MiniLinkUl>
        {links.map((link) => (
          <LinkBox
            key={link.name}
            fontWeight={'400'}
            padding={'20px'}
            mb={'20px'}
          >
            <Link onClick={handleNav} href={link.path}>
              {link.name}
            </Link>
          </LinkBox>
        ))}
      </MiniLinkUl>
    </Slide>
  );
};

export default SlideMenu;

const Slide = styled.div<StyledProps>`
  z-index: 2;
  position: fixed;
  left: ${(props) => props.left};
  top: 0;
  width: 75%;
  height: 100%;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  transition: ease-in-out;
  transition-duration: 0.3s;
  background-color: white;
`;
