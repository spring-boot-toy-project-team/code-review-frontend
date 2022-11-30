import styled, { css } from 'styled-components';
import { StyledProps } from '../types/types';
import { opacity, slideFromLeft } from './keyfreams';

export const WrapUI = styled.div`
  background-color: red;
  width: 100px;
  height: 100px;
`;

export const Container = styled.div<StyledProps>`
  position: relative;
  width: 100%;
  height: ${({ height }) => height || '100vh'};
  background-color: ${({ bg }) => bg || 'white'};
  scroll-snap-align: start;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: ${({ direction }) => direction || ''};
  transition: all 1s;

  ${({ show }) =>
    show &&
    css`
      animation: ${slideFromLeft} 0.7s ease-in-out;
    `};
`;

export const ContentWrap = styled.div<StyledProps>`
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
  visibility: ${(props) => props.visibility || 'visible'};

  @media (min-width: 768px) {
    margin-top: 0px;
  }
`;
export const FlexWrap = styled.div<StyledProps>`
  padding: ${({ padding }) => padding};
  display: flex;
  justify-content: ${({ justify }) => justify || 'center'};
  align-items: ${({ items }) => items || 'center'};
  flex-direction: ${({ direction }) => direction};
  margin-bottom: ${({ mb }) => mb};
  color: ${({ color }) => color};
  position: relative;
  width: ${({ width }) => width};
`;

export const H1 = styled.h1<StyledProps>`
  font-size: ${({ fontSize }) => fontSize || '45px'};
  margin-bottom: ${({ mb }) => mb || '15px'};
  font-weight: ${({ fontWeight }) => fontWeight};
  opacity: ${({ opacity }) => opacity};
  margin: ${({ mx }) => mx};
  margin-top: ${({ mt }) => mt};
  color: ${({ color }) => color};
  text-align: ${({ textAlign }) => textAlign || 'center'};

  ${({ orderToShow, show }) =>
    orderToShow === 1 &&
    show &&
    css`
      animation: ${opacity} 1s ease-in-out;
    `}

  ${({ orderToShow, show }) =>
    orderToShow === 2 &&
    show &&
    css`
      animation: ${opacity} 2s ease-in-out;
    `};

  ${({ orderToShow, show }) =>
    orderToShow === 3 &&
    show &&
    css`
      animation: ${opacity} 3s ease-in-out;
    `}

  @media (min-width: 768px) {
    font-size: ${({ mdFontSize }) => mdFontSize || '45px'};
    margin-bottom: ${({ mb }) => mb || '30px'};
    opacity: ${({ opacity }) => opacity};
    margin: ${({ mx }) => mx};
  }
`;
