import Link from 'next/link';
import styled from 'styled-components';

interface OauthButtonContainer {
  background: string;
}

const OauthBtn = styled(Link)<OauthButtonContainer>`
  display: block;
  width: 50px;
  height: 50px;
  background-color: ${({ background }) => background};
  border-radius: 100%;
  padding-top: 7px;
  padding-left: 8px;
`;

interface Props {
  icon: JSX.Element;
  background: string;
  type: string;
  href: string;
}

const OauthButton = (props: Props) => {
  return (
    <OauthBtn href={props.href} background={props.background}>
      {props.icon}
    </OauthBtn>
  );
};

export default OauthButton;
