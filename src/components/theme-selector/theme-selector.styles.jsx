import React from "react";
import styled from "styled-components";

export const ThemeSelectorContainer = styled.div `
    width: 160px;
    height: 60px;
    display: grid;
    grid-template-columns : 1fr 1fr;
    grid-template-rows : 1fr 1fr;
    column-gap : 5px;
    row-gap : 5px;
    grid-template-areas :
        '. number'
        'title button';
`;

export const ThemeSelectorTitle = styled.div`
    grid-area: title;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ThemeSelectorSliderButtonContainer = styled.div`
    border-radius: 12px;
    grid-area: button;
    display: flex;
    justify-content: space-evenly;
    background-color: ${props=>props.theme.background.toggle};
    align-items: center;
`;

export const ThemeSelectorSliderNumberContainer = styled.div`
    grid-area: number;
    display: flex;
    justify-content: space-evenly;
    align-items: flex-end;
`;

export const ThemeSelectorSliderButton = styled.span`
    height: 18px;
    width: 18px;
    background-color: ${props=>(props.isHidden ? 'transparent' : props.theme.toggle)};
    border-radius: 100%;
    cursor: pointer;
`;
export const ThemeSelectorSliderNumber = styled.span`
    height: 18px;
    width: 18px;
    font-size: 14px;
    text-align: center;
    position: relative;
    top: 5px;
`;