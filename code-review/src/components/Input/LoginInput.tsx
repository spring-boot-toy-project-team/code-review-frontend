import React from 'react';
import styled from 'styled-components';
import { flexCenter } from '../../../styles/css-style';

const InputContainer = styled.div`
  width: 100%;
  margin-bottom: 15px;

  > label {
    display: block;
  }

  > input {
    width: 100%;
    border: none;
    padding: 11px 70px 8px 0;
    border-bottom: 1px solid #9e9e9e;
    font-size: 15px;
    cursor: pointer;
  }
  > input:focus {
    outline: none;
    border-bottom: 1px solid black;
  }
`;

interface Props {
  placeHloder: string;
  type: string;
  onChangeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const LoginInput = (props: Props) => {
  return (
    <InputContainer>
      <input
        placeholder={props.placeHloder}
        type={props.type}
        onChange={props.onChangeHandler}
      />
    </InputContainer>
  );
};

export default LoginInput;
