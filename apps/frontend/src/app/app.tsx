import React from 'react';
import { LeftSidebar, RigthSidebar } from './layout/Sidebar';
import Header from './layout/Header';
import Footer from './layout/Footer';
import styled from 'styled-components';

export const StyledApp = styled.div`
    width: 100vw;
`;

export const Wrapper = styled.div`
    display: inline-flex;
`;

export const StyledContent = styled.div`
    width: 60vw;
    float: left;
`;

export const App = () => {
    return <StyledApp id="app">
        <Header/>
        <Wrapper>
            <LeftSidebar/>
            <StyledContent id="content">
                Content
            </StyledContent>
            <RigthSidebar/>
        </Wrapper>
        <Footer/>
    </StyledApp>;
};

export default App;
