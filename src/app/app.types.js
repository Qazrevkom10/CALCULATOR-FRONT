import { inputNumberOrOperator, deleteOutput, resetOutput, calculateOutput } from "./redux/calculator.slice";

export const INPUT_TYPES = {
    FIRST_NUMBER: 'FIRST_NUMBER',
    OPERATOR: 'OPERATOR',
    SECOND_NUMBER: 'SECOND_NUMBER',
    NUMBER: 'NUMBER',
    COMMAND: 'COMMAND'
}

export const OPERATOR_TYPES = {
    PLUS: 'PLUS',
    MINUS: 'MINUS',
    DIV : 'DIV',
    MULTIPLY: 'MULTIPLY',
    NONE: 'NONE'
};

export const DISPLAY_TO_TYPES = {
    '+' : OPERATOR_TYPES.PLUS,
    '-' : OPERATOR_TYPES.MINUS,
    '/' : OPERATOR_TYPES.DIV,
    'x' : OPERATOR_TYPES.MULTIPLY,
}

export const OPERATOR_MAP = {
    PLUS : {
        id: 21,
        type: INPUT_TYPES.OPERATOR,
        display: '+',
        name: OPERATOR_TYPES.PLUS.toLowerCase(),
    },
    MINUS : {
        id: 22,
        type: INPUT_TYPES.OPERATOR,
        display: '-',
        name: OPERATOR_TYPES.MINUS.toLowerCase(),
    },
    DIV : {
        id: 23,
        type: INPUT_TYPES.OPERATOR,
        display: '/',
        name: OPERATOR_TYPES.DIV.toLowerCase(),
    },
    MULTIPLY : {
        id: 24,
        type: INPUT_TYPES.OPERATOR,
        display: 'x',
        name: OPERATOR_TYPES.MULTIPLY.toLowerCase(),
    },
};

export const INPUT_MAP = {
    NUM_0 : {
        id: 0,
        type: INPUT_TYPES.NUMBER,
        display: '0',
        name: 'num0',
    },
    NUM_1 : {
        id: 1,
        type: INPUT_TYPES.NUMBER,
        display: '1',
        name: 'num1',
    },
    NUM_2 : {
        id: 2,
        type: INPUT_TYPES.NUMBER,
        display: '2',
        name: 'num2',
    },
    NUM_3 : {
        id: 3,
        type: INPUT_TYPES.NUMBER,
        display: '3',
        name: 'num3',
    },
    NUM_4 : {
        id: 4,
        type: INPUT_TYPES.NUMBER,
        display: '4',
        name: 'num4',
    },
    NUM_5 : {
        id: 5,
        type: INPUT_TYPES.NUMBER,
        display: '5',
        name: 'num5',
    },
    NUM_6 : {
        id: 6,
        type: INPUT_TYPES.NUMBER,
        display: '6',
        name: 'num6',
    },
    NUM_7 : {
        id: 7,
        type: INPUT_TYPES.NUMBER,
        display: '7',
        name: 'num7',
    },
    NUM_8 : {
        id: 8,
        type: INPUT_TYPES.NUMBER,
        display: '8',
        name: 'num8',
    },
    NUM_9 : {
        id: 9,
        type: INPUT_TYPES.NUMBER,
        display: '9',
        name: 'num9',
    },
    DOT : {
        id: 10,
        type: INPUT_TYPES.NUMBER,
        display: '.',
        name: 'dot',
    },
    CALC : {
        id: 11,
        type: INPUT_TYPES.COMMAND,
        display: '=',
        name: 'calc',
    },
    RESET : {
        id: 12,
        type: INPUT_TYPES.COMMAND,
        display: 'RESET',
        name: 'reset',
    },
    DELETE : {
        id: 13,
        type: INPUT_TYPES.COMMAND,
        display: 'DEL',
        name: 'del',
    },
    ...OPERATOR_MAP
};


export const THEME = [
    // theme 1
    {
        background: {
            main: 'hsl(222, 26%, 31%)',
            toggle: 'hsl(223, 31%, 20%)',
            keypad: 'hsl(223, 31%, 20%)',
            screen: 'hsl(224, 36%, 15%)'    
        },
        button: {
            default: {
                background: 'hsl(30, 25%, 89%)',
                shadow: 'hsl(28, 16%, 65%)',
                text: 'hsl(221, 14%, 31%)'
            },
            command: {
                background: 'hsl(225, 21%, 49%)',
                shadow: 'hsl(224, 28%, 35%)',
                text: 'white',
            },
            calculate: {
                background: 'hsl(6, 63%, 50%)',
                shadow: 'hsl(6, 70%, 34%)',
                text: 'white'
            },
        },
        toggle: 'hsl(6, 63%, 50%)',
        text: 'white',
    },
    // theme 2
    {
        background: {
            main: 'hsl(0, 0%, 90%)',
            toggle: 'hsl(0, 5%, 81%)',
            keypad: 'hsl(0, 5%, 81%)',
            screen: 'hsl(0, 0%, 93%)'    
        },
        button: {
            default: {
                background: 'hsl(45, 7%, 89%)',
                shadow: 'hsl(35, 11%, 61%)',
                text: 'hsl(60, 10%, 19%)'
            },
            command: {
                background: 'hsl(185, 42%, 37%)',
                shadow: 'hsl(185, 58%, 25%)',
                text: 'white',
            },
            calculate: {
                background: 'hsl(25, 98%, 40%)',
                shadow: 'hsl(25, 99%, 27%)',
                text: 'white'
            },
        },
        toggle: 'hsl(25, 98%, 40%)',
        text: 'hsl(60, 10%, 19%)',
    },    // theme 3
    {
        background: {
            main: 'hsl(268, 75%, 9%)',
            toggle: 'hsl(268, 71%, 12%)',
            keypad: 'hsl(268, 71%, 12%)',
            screen: 'hsl(268, 71%, 12%)'    
        },
        button: {
            default: {
                background: 'hsl(268, 47%, 21%)',
                shadow: 'hsl(290, 70%, 36%)',
                text: 'hsl(52, 100%, 62%)'
            },
            command: {
                background: 'hsl(281, 89%, 26%)',
                shadow: 'hsl(285, 91%, 52%)',
                text: 'white',
            },
            calculate: {
                background: 'hsl(176, 100%, 44%)',
                shadow: 'hsl(177, 92%, 70%)',
                text: 'hsl(198, 20%, 13%)'
            },
        },
        toggle: 'hsl(176, 100%, 44%)',
        text: 'hsl(52, 100%, 62%)',
    },
];