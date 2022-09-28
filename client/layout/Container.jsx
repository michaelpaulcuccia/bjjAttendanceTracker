import React from 'react';
import styled from 'styled-components';

const ComponentWrapper = styled.div`
  padding-left: 24px;
  padding-right: 24px;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
`;

export default function Container({ children }) {
  return (
    <ComponentWrapper>{children}</ComponentWrapper>
  )
}