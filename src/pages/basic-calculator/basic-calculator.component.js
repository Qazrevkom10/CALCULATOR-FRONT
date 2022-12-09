import React from "react";
import Header from "../../components/header/header.component";
import OutputDisplay from "../../components/output/output.component";
import { BasicCalculatorContainer } from "./basic-calculator.styles";
import InputGroup from "../../components/input-group/input-group.component";

const BasicCalculator = () => {
    return(
        <BasicCalculatorContainer>            
            <Header/>
                <OutputDisplay/>
            <InputGroup/>
        </BasicCalculatorContainer>
    );
}

export default BasicCalculator;