import styled from 'styled-components';
import React, { forwardRef } from 'react';

const Description = forwardRef<HTMLInputElement, any>((props, ref) => {
  return (
    <DesContainer className="description" ref={ref} id="description">
      <h1>하이</h1>
    </DesContainer>
  );
});

const DesContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: white;
  scroll-snap-align: start;
`;

export default Description;
