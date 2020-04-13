import React from 'react';
import styled from 'styled-components';

export const StyledHeader = styled.div`
    padding: 1.5rem;
`;

export const Brand = styled.span`
    font-weight: bold;
`;

export const Slogan = styled.span`
    &::before {
    content: ' - ';
    }
`;

export default function Header() {
    return <StyledHeader>
        <Brand>
            Botvy
        </Brand>
        <Slogan>
            Your personal chatbot
        </Slogan>
    </StyledHeader>;
};
