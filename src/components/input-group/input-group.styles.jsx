import React from "react";
import styled from "styled-components";
import InputButton from "../input-button/input-button.component";

export const InputGroupContainer = styled.div`
    height: 400px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
    grid-template-areas:
        'num7 num8 num9 del'
        'num4 num5 num6 plus'
        'num1 num2 num3 minus'
        'dot num0 div multiply'
        'reset reset calc calc';
    gap: 15px 15px;
    padding: 20px 20px;
    background-color: ${props=>props.theme.background.keypad};
    border-radius: 15px;
`;

export const InputGroupResetContainer = styled(InputButton)`
    grid-area: reset;
`;

export const InputGroupCalcContainer = styled(InputButton)`
    grid-area: calc;
`;
