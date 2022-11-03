import styled from 'styled-components';
import OauthButton from '../../common/Button/OauthButton';
import { OauthItems } from './OauthItems';

const ButtonContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 30px;
  padding-top: 15px;
`;

const Oauths = () => {
  return (
    <ButtonContainer>
      {OauthItems.map((item, index) => (
        <OauthButton
          key={index}
          icon={item.icon}
          background={item.background}
        />
      ))}
    </ButtonContainer>
  );
};

export default Oauths;
