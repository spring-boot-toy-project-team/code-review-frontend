import React, { useState, useRef } from 'react';
import { BsFilterLeft } from 'react-icons/bs';
import useClickOutsie from '../../../hooks/useClickOutside';
import { Wrapper, SelectBtn, Content, Options, Option } from './style';

const Dropdown = () => {
  const [show, setShow] = useState(false);
  const [filter, setFilter] = useState('');
  const filterList = ['최신순', '댓글순', '스크랩순', '조회순'];

  const dropRef = useRef<HTMLDivElement>(null);
  useClickOutsie(show, setShow, dropRef); // 바깥클릭감지
  function handleSelect(event: React.MouseEvent<HTMLElement>) {
    const eventTarget = event.target as HTMLElement;
    if (!eventTarget.innerText) return;
    setFilter(eventTarget.innerText);
    setShow(!show);
  }

  return (
    <Wrapper ref={dropRef} onClick={handleSelect}>
      <SelectBtn
        datatype="select"
        onClick={() => {
          setShow(!show);
        }}
      >
        <BsFilterLeft size={20} />
        <input placeholder="필터" readOnly value={'정렬'} />
      </SelectBtn>
      <Content display={show ? 'block' : 'none'}>
        <Options>
          {filterList.map((filterItem, idx) => {
            return (
              <Option select={filterItem === filter} key={idx}>
                {filterItem}
              </Option>
            );
          })}
        </Options>
      </Content>
    </Wrapper>
  );
};

export default Dropdown;
