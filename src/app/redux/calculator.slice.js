import {createSlice} from '@reduxjs/toolkit';
import { INPUT_TYPES, OPERATOR_MAP, OPERATOR_TYPES, DISPLAY_TO_TYPES, INPUT_MAP } from '../app.types';

const initialState = {
    output: "",
    first_number: "",
    answer: "",
    second_number: "",
    operator: OPERATOR_TYPES.NONE,
    input_state: INPUT_TYPES.FIRST_NUMBER
}

const calculate = (state) => {
    const {first_number, second_number, operator, input_state} = state;
    if(input_state !== INPUT_TYPES.SECOND_NUMBER)
        return null;

    const first_number_f = parseFloat(first_number);
    const second_number_f = parseFloat(second_number);

    switch(operator) {
        case OPERATOR_TYPES.PLUS:
            return (first_number_f + second_number_f).toString();
        case OPERATOR_TYPES.MINUS:
            return (first_number_f - second_number_f).toString();
        case OPERATOR_TYPES.DIV:
            return (first_number_f / second_number_f).toString();
        case OPERATOR_TYPES.MULTIPLY:
            return (first_number_f * second_number_f).toString();
        case OPERATOR_TYPES.NONE:
        default:
            return null;
    }
}

const inputNumber = (inputVal, state) => {
    const {input_state, first_number,second_number,output} = state;
    // const input_state = selectInputState(state);
    // const first_number = selectFirstNumber(state);
    // const second_number = selectSecondNumber(state);
    // const output = selectOutput(state);

    switch(input_state) {
        case INPUT_TYPES.FIRST_NUMBER:
            if(inputVal === INPUT_MAP['DOT'].display) {
                console.log('dot detected 1')
                if(first_number.includes(INPUT_MAP['DOT'].display)) {
                    console.log('dot detected 2');
                    return;
                }
            }
            if(inputVal === INPUT_MAP['NUM_0'].display) {
                console.log('dot detected 1')
                if(!first_number.length) {
                    console.log('dot detected 2');
                    return;
                }
            }


            return ({
                first_number: first_number + inputVal,
                input_state,
                output: output + inputVal,
                second_number,
            })
        case INPUT_TYPES.SECOND_NUMBER:
            if(inputVal === INPUT_MAP['DOT'].display) {
                if(second_number.includes(INPUT_MAP['DOT'].display))
                    return;
            }
            
            if(inputVal === INPUT_MAP['NUM_0'].display) {
                console.log('dot detected 1')
                if(!second_number.length) {
                    console.log('dot detected 2');
                    return;
                }
            }

            return ({
                second_number: second_number + inputVal,
                input_state,
                output: output + inputVal,
                first_number,
            })
        case INPUT_TYPES.OPERATOR:
            return ({
                first_number,
                second_number: inputVal,
                output: output + inputVal,
                input_state: INPUT_TYPES.SECOND_NUMBER
            })
        default:
            return;
    }
}

const inputOperator = (inputVal, state) => {
    // const input_state = selectInputState(state);
    // const first_number = selectFirstNumber(state);
    // const second_number = selectSecondNumber(state);
    // const output = selectOutput(state);
    // const answer = selectAnswer(state);
    const {input_state, first_number,second_number,output, answer} = state;


    switch(input_state) {
        case INPUT_TYPES.FIRST_NUMBER:
            if(!first_number.length)
                return;

            return {
                input_state: INPUT_TYPES.OPERATOR,
                first_number,
                output: output + inputVal,
                operator: DISPLAY_TO_TYPES[inputVal],
                second_number,
                answer
            }
        case INPUT_TYPES.SECOND_NUMBER:
            const result = calculate();
            if(!result)
                return;
            return {
                input_state: INPUT_TYPES.FIRST_NUMBER,
                first_number: result,
                output: result,
                operator: OPERATOR_TYPES.NONE,
                second_number: '',
                answer: result,
            }
        case INPUT_TYPES.OPERATOR:
            return {
                input_state,
                first_number,
                output: output.slice(0, -1) + inputVal,
                operator: DISPLAY_TO_TYPES[inputVal],
                second_number,
                answer,
            }
        default:
            return;
    }
}

export const calculatorSlice = createSlice({
    name: 'calculator',
    initialState,
    reducers: {
        inputNumberOrOperator : (state, action) => {
            console.log(state);
            const {inputType, inputVal} = action.payload;

            if(inputType === INPUT_TYPES.NUMBER) {
                return ({
                    ...state,
                    ...inputNumber(inputVal, state)
                })
            }
            if(inputType === INPUT_TYPES.OPERATOR) {
                return ({
                    ...state,
                    ...inputOperator(inputVal, state)
                })
            } 
        },
        deleteOutput : (state) => {
            switch(state.input_state) {
                case INPUT_TYPES.FIRST_NUMBER:
                    if(state.first_number.length > 1) {
                        state.first_number = state.first_number.slice(0,-1);
                        state.output = state.output.slice(0, -1);
                    } else {
                        state.first_number = '';
                        state.output = '';
                    }
                    break;
                case INPUT_TYPES.OPERATOR:
                    state.output = state.output.slice(0, -1);
                    state.operator = OPERATOR_TYPES.NONE;
                    state.input_state = INPUT_TYPES.FIRST_NUMBER;
                    break;
                case INPUT_TYPES.SECOND_NUMBER:
                    if(state.second_number.length > 1) {
                        state.second_number = state.second_number.slice(0,-1);
                        state.output = state.output.slice(0, -1);
                    } else {
                        state.second_number = '';
                        state.output = state.output.slice(0, -1);;
                        state.input_state = INPUT_TYPES.OPERATOR;
                    }
                    break;
            }
        },
        resetOutput: (state) => {
            return initialState;
        },
        calculateOutput: (state) => {
            const result = calculate(state);

            if(!result) {
                alert('Cannot calculate, complete expression first');
                return;
            } 

            state.answer = result.toString();
            state.input_state = INPUT_TYPES.FIRST_NUMBER;
            state.operator = OPERATOR_TYPES.NONE;
            state.second_number = '';
            state.output = result;
            state.first_number = result;
        }
    }
});

export const selectInputState = (state) => state.calculator.input_state;
export const selectFirstNumber = (state) => state.calculator.first_number;
export const selectSecondNumber = (state) => state.calculator.second_number;
export const selectOperator = (state) => state.calculator.operator;
export const selectOutput = (state) => state.calculator.output;
export const selectAnswer = (state) => state.calculator.answer;

export const {inputNumberOrOperator, deleteOutput, resetOutput, calculateOutput} = calculatorSlice.actions;

export default calculatorSlice.reducer;