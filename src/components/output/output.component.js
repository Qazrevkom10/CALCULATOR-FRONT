import React from "react";
import { OutputDisplayContainer, OutputDisplayText } from "./output.styles";
import { useSelector  } from "react-redux";
import { selectOutput } from "../../app/redux/calculator.slice";

const OutputDisplay = () => {
    const output = useSelector(selectOutput);
    console.log('im rendered');

    return(
        <OutputDisplayContainer>
            <OutputDisplayText>
                {output.length ? output : 0}
            </OutputDisplayText>
        </OutputDisplayContainer>
    );
}

export default OutputDisplay;