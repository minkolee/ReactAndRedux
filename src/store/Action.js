import * as ActionTypes from './ActionTypes';

export const redIncrement = () =>{
    return {
        type: ActionTypes.REDPLUS
    }
}

export const redDecrement = () =>{
    return {
        type: ActionTypes.REDMINUS
    }
}

export const greenIncrement = () =>{
    return {
        type: ActionTypes.GREENPLUS
    }
}

export const greenDecrement = () =>{
    return {
        type: ActionTypes.GREENMINUS
    }
}

export const blueIncrement = () =>{
    return {
        type: ActionTypes.BLUEPLUS
    }
}

export const blueDecrement = () =>{
    return {
        type: ActionTypes.BLUEMINUS
    }
}

