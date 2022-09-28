import React from 'react';
import styled from 'styled-components';

const Root = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    padding-top: 225px;
    position: relative;

    img {
        max-width: 100%;
        height: auto;
    }
`;

const SelectContainer = styled.div`
    position: absolute;
    top: 60%;

    @media (max-width: 700px) {
        top: 70%;
    }
`;

export default function HeroWithDrop() {
  return (
    <Root>
        <img src='/assets/leandrolo.jpeg' alt='leandro lo' />
        <SelectContainer>
            <select>
                <option value="">--Please Find Your Name--</option>
            </select>
        </SelectContainer>
    </Root>
  )
}
