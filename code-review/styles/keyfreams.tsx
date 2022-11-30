import { keyframes } from 'styled-components';

export const opacity2 = keyframes`
  0% {
    opacity: 0;
  }
  100%{
    opacity: 0.6;
  }

`;

export const opacity = keyframes`
 0% {
    opacity: 0;
  }
 70% {
    opacity: 0.5;
   
  }
  100% {
    opacity: 0.8;
   
  }
`;

export const movingArrow = keyframes`
    0% {
    opacity: 0;
    transform: translateY(0)
  }
  30% {
    opacity: 0.3;
    transform: translateY(1.5em)
  }
  50% {
    opacity: 0.8;
    transform: translateY(0em)
  }
  70% {
    opacity: 0.9;
    transform: translateY(1.5em)
  }
  100% {
    opacity: 1;
    transform: translateY(0em)
  }
`;
