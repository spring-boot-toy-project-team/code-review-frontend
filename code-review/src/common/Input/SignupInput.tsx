import React from 'react';
import styled from 'styled-components';

const InputContainer = styled.div`
  width: 100%;
  margin-bottom: 30px;

  > label {
    display: block;
    margin-bottom: 5px;
    font-weight: 700;
  }

  > input {
    width: 100%;
    border: none;
    padding: 11px 70px 8px 0;
    border-bottom: 1px solid #9e9e9e;
    font-size: ${({ theme }) => theme.fontSize.size15};
    cursor: pointer;
  }
  > input:focus {
    outline: none;
    border-bottom: 1px solid black;
  }
  > span {
    display: block;
    margin-top: 15px;
    color: red;
  }
`;

interface Props {
  placeHloder: string;
  type: string;
  onChangeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  label: string;
  useRef: React.RefObject<HTMLInputElement>;
  validation: string;
  visible: boolean;
}

const SignupInput = (props: Props) => {
  return (
    <InputContainer>
      <label>{props.label}</label>
      <input
        ref={props.useRef}
        placeholder={props.placeHloder}
        type={props.type}
        onChange={props.onChangeHandler}
        value={props.value}
      />
      {props.visible && <span>{props.validation}</span>}
    </InputContainer>
  );
};

export default SignupInput;
