import { BsChevronDown } from 'react-icons/bs';
import { StyledProps } from '../../../../../types/types';

import styled from 'styled-components';
// import { StylesProps, StakeholderForm } from '../types/type';
import { useState } from 'react';

// interface Props {
//   showOptions: boolean;
//   setShowOptions: React.Dispatch<React.SetStateAction<boolean>>;
//   setStakeholderForm: React.Dispatch<React.SetStateAction<StakeholderForm>>;
//   stakeholderForm: StakeholderForm;
//   setValidateMessage: React.Dispatch<React.SetStateAction<string>>;
// }

const Dropdown = () => {
  const [show, setShow] = useState(false);
  const toggleOptions = () => {
    setShow(!show);
  };

  const [filter, setFilter] = useState('');

  function handleSelect(event: React.MouseEvent<HTMLElement>) {
    const eventTarget = event.target as HTMLElement;
    setFilter(eventTarget.innerText);
    setShow(!show);
  }

  return (
    <Wrapper onClick={handleSelect}>
      <SelectBtn datatype="select" onClick={toggleOptions}>
        <input placeholder="필터" readOnly value={filter} />
        <BsChevronDown size={15} />
      </SelectBtn>
      <Content display={show ? 'block' : 'none'}>
        <Options>
          <Option>최신순</Option>
          <Option>댓글순</Option>
          <Option>스크랩순</Option>
          <Option>조회순</Option>
        </Options>
      </Content>
    </Wrapper>
  );
};

export default Dropdown;

const Wrapper = styled.div`
  width: 90px;
  display: inline-block;
  z-index: 1;
  position: relative;

  border-radius: 6px;
  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;
  height: 45px;
`;
const SelectBtn = styled.div<StyledProps>`
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
    padding: 3px 8px;
    padding-left: 15px;
    box-sizing: border-box;
    cursor: pointer;
  }
  & > svg {
    color: black;
    position: absolute;
    right: 12px;
    top: 15px;
  }
`;
const Content = styled.div<StyledProps>`
  position: absolute;
  display: ${(props) => props.display};
  height: 168px;
  width: 100px;
  background: #ffffff;
  box-shadow: 0px 10px 27px rgba(0, 0, 0, 0.08);
  border-radius: 4px;
  padding: 15px 16px;
`;
const Options = styled.ul`
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: column;
  font-size: 14px;
  color: #333333;
`;
const Option = styled.li`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 100%;
  cursor: pointer;
  &:hover {
    background-color: gray;
  }
`;
