import styled from 'styled-components';
import { H1 } from '../../../styles/uielements';
import { flexCenter } from '../../../styles/css-style';
import Board from './Board/Board';
import Search from './Search/Search';

const Question = () => {
  return (
    <Container>
      <H1 mt="100px" mb="50px" fontWeight="bold" color="#2a51dd">
        Q&A
      </H1>
      <Search />
      <Board />
    </Container>
  );
};

export default Question;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  padding: 24px 0;
  background-color: white;
  flex-direction: column;
`;
