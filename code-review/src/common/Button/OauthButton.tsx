import styled from 'styled-components';

interface OauthButtonContainer {
  background: string;
}

const OauthBtn = styled.button<OauthButtonContainer>`
  width: 50px;
  height: 50px;
  background-color: ${({ background }) => background};
  border: none;
  border-radius: 100%;
  padding-top: 5px;
`;

interface Props {
  icon: JSX.Element;
  background: string;
}

const OauthButton = (props: Props) => {
  return <OauthBtn background={props.background}> {props.icon}</OauthBtn>;
};

export default OauthButton;
