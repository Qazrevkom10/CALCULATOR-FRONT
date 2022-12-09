import React from "react";
import { useDispatch } from "react-redux";
import { InputGroupContainer, InputGroupCalcContainer, InputGroupResetContainer } from "./input-group.styles";
import InputButton from "../input-button/input-button.component";
import { INPUT_MAP } from "../../app/app.types";
import { inputNumberOrOperator, resetOutput, deleteOutput, calculateOutput } from "../../app/redux/calculator.slice";

const InputGroup = () => {
    //convert input map object to array
    const input_map_array = Object.values(INPUT_MAP)

    const dispatch = useDispatch();

    console.log(input_map_array);

    return(
        <InputGroupContainer>
            {input_map_array.map(
                input_map => {
                    if(input_map.display === "RESET") 
                        return(
                            <InputButton 
                                key={input_map.id} 
                                onClick={()=> dispatch(resetOutput())}
                                gridArea={input_map.name}
                                isCommand
                            >
                                {input_map.display}
                            </InputButton>
                        );
                    if(input_map.display === "DEL") 
                        return(
                            <InputButton 
                                key={input_map.id} 
                                onClick={()=> dispatch(deleteOutput())}
                                gridArea={input_map.name}
                                isCommand
                            >
                                {input_map.display}
                            </InputButton>
                        );
                    if(input_map.display === "=") 
                        return(
                            <InputButton 
                                key={input_map.id} 
                                onClick={()=> dispatch(calculateOutput())}
                                gridArea={input_map.name}
                                isCalculate
                            >
                                {input_map.display}
                            </InputButton>
                        );

                    return(
                        <InputButton 
                            key={input_map.id} 
                            onClick={()=> dispatch(inputNumberOrOperator({inputType: input_map.type, inputVal: input_map.display}))}
                            gridArea={input_map.name}
                        >
                            {input_map.display}
                        </InputButton>
                    );
                }
            )}
        </InputGroupContainer>
    );
}

export default InputGroup;