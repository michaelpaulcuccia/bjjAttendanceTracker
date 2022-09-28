import React from 'react';
import styled from 'styled-components';

const Root = styled.div`
    width: 100%;
    border-radius: 8px;
    padding: 25px 10px;
    background: whitesmoke;
    display: flex;
`;

const Title = styled.div`
    font-size: 36px;
    line-height: 24px;
    width: 60%;
`;

const Links = styled.div`
    width: 40%;
    display: flex;
    justify-content: space-evenly;
`;

export default function NavBar() {
  return (
    <Root>
        <Title>Brazilian Jiu Jitsu</Title>
        <Links>
            <a href='/newstudent'>New Student</a>
            <a href='/admin'>Admin</a>
        </Links>
    </Root>
  )
}
