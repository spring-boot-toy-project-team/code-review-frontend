import styled from 'styled-components';

const Button = styled.button`
  width: 100%;
  border: none;
  border-radius: 6px;
  padding: 13px 0 13px;
  font-size: 20px;
  font-weight: 700;
`;

interface Props {
  children: string;
}

const SubmitButton = (props: Props) => {
  return <Button type="submit">{props.children}</Button>;
};

export default SubmitButton;
