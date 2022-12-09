import React from "react";
import styled from "styled-components"

export const BasicCalculatorContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 350px;
    row-gap: 30px;
    margin: 20px auto;
    color: ${props => props.theme.text};
    background-color: ${props => props.theme.background.main};
`;
