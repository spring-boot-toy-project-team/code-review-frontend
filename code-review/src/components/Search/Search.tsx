import styled from 'styled-components';
import { FlexWrap } from '../../../styles/uielements';
import { BiSearch } from 'react-icons/bi';
import Dropdown from './Dropdown/Dropdown';

const Search = () => {
  return (
    <SearchContainer>
      <FlexWrap justify="center" width="100%">
        <Dropdown />
        <FlexWrap width="60%">
          <IconWrap>
            <BiSearch size={20} />
          </IconWrap>
          <Input placeholder="검색" />
        </FlexWrap>
        <Button>글쓰기</Button>
      </FlexWrap>
    </SearchContainer>
  );
};

export default Search;

const Button = styled.button`
  width: 80px;
  height: 45px;
  font-size: 15px;
  border-style: none;
  background-color: #c9d7e8;
  color: black;
  font-weight: 600;
  border-top-right-radius: 6px;
  border-bottom-right-radius: 6px;
`;

const SearchContainer = styled.div`
  position: relative;
  display: flex;
  margin-bottom: 40px;
  justify-content: space-between;
  align-items: center;
  border-radius: 6px;
  width: 70%;
  height: 150px;
`;

const Input = styled.input`
  height: 45px;

  padding-left: 30px;
  outline: none;
  border-style: none;
  font-size: 15px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  width: 100%;
`;
const IconWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 5px;
`;