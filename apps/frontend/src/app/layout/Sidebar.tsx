import React from 'react';
import styled from 'styled-components';

export const StyledSidebar = styled.div`
    width: 20vw;
`;

export const LeftSidebar: React.FC = () => (
    <StyledSidebar className={`sidebar left`}/>
);

export const RigthSidebar: React.FC = () => (
    <StyledSidebar className={`sidebar right`}/>
);
