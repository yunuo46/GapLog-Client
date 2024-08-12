import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
    display: flex; 
    justify-content: left; 
`;

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    height: 50px;
    font-size: 18px;
    color: #30180d;
    font-family: "Inter", sans-serif;
    font-weight: 800;
`;

const NavItem = styled(NavLink)`
    text-decoration: none;
    color: inherit;
    opacity: 0.5;
    padding-left: 20px;

    &.active {
        opacity: 1;
    }

    &:hover {
        text-decoration: underline;
    }
`;

function MyPageBar() {
    return (
        <Container>
            <Wrapper>
                <nav>
                    <NavItem to="/" exact>개요</NavItem>
                    <NavItem to="/post">게시글</NavItem>
                    <NavItem to="/scrab">스크랩</NavItem>
                    <NavItem to="/comment">댓글</NavItem>
                </nav>
            </Wrapper>
        </Container>
    );
}

export default MyPageBar;
