import React from "react";
import styled, {css} from "styled-components";

const commandButtonStyle = css`
    color: ${props=>props.theme.button.command.text};
    background-color: ${props=>props.theme.button.command.background};
    font-size: 22px;
    box-shadow: 0px 5px ${props=>props.theme.button.command.shadow};
`;

const calculateButtonStyle = css`
    color: ${props=>props.theme.button.calculate.text};
    background-color: ${props=>props.theme.button.calculate.background};
    box-shadow: 0px 5px ${props=>props.theme.button.calculate.shadow};
    font-size: 24px;
`;

const defaultButtonStyle = css`
    color: ${props=>props.theme.button.default.text};
    background-color: ${props=>props.theme.button.default.background};
    box-shadow: 0px 5px ${props=>props.theme.button.default.shadow};
    font-size: 40px;
`;

const getButtonStyles = (props) => {
    const {isCommand, isCalculate} = props;

    if(isCommand)
        return commandButtonStyle;
    if(isCalculate)
        return calculateButtonStyle;
    
    return defaultButtonStyle;
}

const InputButton = styled.button`
    ${getButtonStyles}
    border-radius: 5px;
    border: none;
    font-weight: 700;
    grid-area: ${props=>props.gridArea};

    &:active {
        opacity: 0.5;
        box-shadow: 0 1px;
        transform: translateY(4px);
    }
`;

export default InputButton;