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

export default function HeroWithDrop({ data }) {
  return (
    <Root>
        <img src='/assets/leandrolo.jpeg' alt='leandro lo' />
        <SelectContainer>
            <select>
                <option value="">--Please Find Your Name--</option>
                {
                    data &&
                    data.map((item, i) => (
                        <option key={i} value={item.firstName + ' ' + item.LastName }>{item.firstName + ' ' + item.lastName }</option>
                    ))
                }
            </select>
        </SelectContainer>
    </Root>
  )
}
