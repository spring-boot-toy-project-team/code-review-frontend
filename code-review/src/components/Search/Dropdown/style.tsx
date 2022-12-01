import styled from 'styled-components';
import { StyledProps } from '../../../../types/types';

export const Wrapper = styled.div`
  width: 90px;
  display: inline-block;
  z-index: 1;
  position: relative;
  border-radius: 6px;
  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;
  height: 45px;
`;
export const SelectBtn = styled.div<StyledProps>`
  display: flex;
  justify-content: space-between;
  width: 90px;
  height: 100%;
  position: relative;
  align-items: center;
  overflow: visible;
  border-radius: 6px;
  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;

  & > input {
    outline: none;
    width: 100%;
    height: 100%;
    border-style: none;
    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px;
    background-color: #c9d7e8;
    padding: 3px 25px;

    box-sizing: border-box;
    cursor: pointer;
    font-size: 15px;
    font-weight: 600;
    text-align: end;
  }
  & > svg {
    color: black;
    position: absolute;
    left: 15px;
    top: 12px;
  }
`;
export const Content = styled.div<StyledProps>`
  position: absolute;
  display: ${(props) => props.display};
  height: 168px;
  width: 130px;
  background: #ffffff;
  box-shadow: 0px 10px 27px rgba(0, 0, 0, 0.08);
  border-radius: 6px;
  margin-top: 15px;
`;
export const Options = styled.ul`
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: column;
  font-size: 14px;
  color: #333333;
  border-radius: 6px;

  & > li:first-child {
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
  }
  & > li:last-child {
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
  }
`;
export const Option = styled.li<{ select?: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${({ select }) => (select ? '#c9d7e8' : '')};
  width: 100%;
  height: 100%;
  cursor: pointer;
  &:hover {
    background-color: #c9d7e8;
  }
`;
