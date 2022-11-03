import styled from 'styled-components';
import { flexAround } from '../../../styles/css-style';

const OptionContainer = styled.div`
  ${flexAround}
  padding-top: 20px;
  padding-bottom: 15px;
  > span {
    display: block;
    font-size: ${({ theme }) => theme.fontSize.size12};
    color: ${({ theme }) => theme.colors.blue};
    cursor: pointer;
  }
`;

const Options = () => {
  return (
    <OptionContainer>
      <span>회원가입</span>
      <span>비밀번호 찾기</span>
    </OptionContainer>
  );
};

export default Options;
