import styled, { css } from 'styled-components';
import { StyledProps } from '../../types/types';
import { opacity } from './keyfreams';

export const WrapUI = styled.div`
  background-color: red;
  width: 100px;
  height: 100px;
`;

export const Container = styled.div<StyledProps>`
  position: relative;
  width: 100%;
  height: ${(props) => props.height || '100vh'};
  background-color: ${(props) => props.bg || 'white'};
  scroll-snap-align: start;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: ${(props) => props.direction || ''};
`;

export const ContentWrap = styled.div<StyledProps>`
  width: 100%;
  height: 100%;
  padding: 30px;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  padding-top: 100px;
  text-align: center;
  visibility: ${(props) => props.visibility || 'visible'};
`;
export const FlexWrap = styled.div<StyledProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: ${(props) => props.direction};
  margin-bottom: ${(props) => props.mb};
`;

export const H1 = styled.h1<StyledProps>`
  font-size: ${(props) => props.fontSize || '45px'};
  margin-bottom: ${(props) => props.mb || '15px'};
  font-weight: ${(props) => props.fontWeight};
  opacity: ${(props) => props.opacity};
  margin: ${(props) => props.mx};
  margin-top: ${(props) => props.mt};
  color: ${(props) => props.color};
  text-align: center;
  /* visibility: ${(props) => (props.show === true ? 'visible' : 'hidden')}; */

  ${(props) =>
    props.orderToShow === 1 &&
    props.show &&
    css`
  animation:  animation: ${opacity} 1s ease-in-out;;

`}

  ${(props) =>
    props.orderToShow === 2 &&
    props.show &&
    css`
      animation: ${opacity} 2s ease-in-out;
    `}; // here

  ${(props) =>
    props.orderToShow === 3 &&
    props.show &&
    css`
      animation: ${opacity} 3s ease-in-out;
    `}

  @media (min-width: 768px) {
    font-size: ${(props) => props.mdFontSize || '45px'};
    margin-bottom: ${(props) => props.mb || '30px'};
    opacity: ${(props) => props.opacity};
    margin: ${(props) => props.mx};
  }
`;
