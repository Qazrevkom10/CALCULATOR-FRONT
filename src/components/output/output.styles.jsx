import React from "react";
import styled from "styled-components"

export const OutputDisplayContainer = styled.div`
    border-radius: 15px;
    background-color: ${props=>props.theme.background.screen};
    color: ${props=>props.theme.text};
    font-size: 36px;
    height: 100px;
    display: flex;
    justify-content: flex-end;
    padding-right: 20px;
    padding-left: 20px;
    font-weight: 700;
`;

export const OutputDisplayText = styled.div`
    align-self: center;
    overflow-x: scroll;
    overflow-y: hidden;

    scrollbar-color: ${props=>props.theme.background.screen} ${props=>props.theme.text};

    &::-webkit-scrollbar {
        width: 0.5em;
        height: 0.2em;
    }

    &::-webkit-scrollbar-thumb {
        background: ${props=>props.theme.text};
        border-radius: 3px;
    }

    &::-webkit-scrollbar-track {
        background: ${props=>props.theme.background.screen}
    }

`;