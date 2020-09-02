import * as ActionTypes from './ActionTypes';

const reducer = (state, action) =>{
    console.log("Reducer进行执行, 当前的state是", state, "action是", action);
    switch (action.type) {
        case ActionTypes.REDPLUS:
            if (state.red === 255) {
                return {...state};
            } else {
                return {...state, red: state.red + 1}
            }

        case ActionTypes.REDMINUS:
            if (state.red === 0) {
                return {...state};
            } else {
                return {...state, red: state.red - 1}
            }

        case ActionTypes.GREENPLUS:
            if (state.green === 255) {
                return {...state};
            } else {
                return {...state, green: state.green + 1}
            }

        case ActionTypes.GREENMINUS:
            if (state.green === 0) {
                return {...state};
            } else {
                return {...state, green: state.green - 1}
            }
            
        case ActionTypes.BLUEPLUS:
            if (state.blue === 255) {
                return {...state};
            } else {
                return {...state, blue: state.blue + 1}
            }

        case ActionTypes.BLUEMINUS:
            if (state.blue === 0) {
                return {...state};
            } else {
                return {...state, blue: state.blue - 1}
            }

        default:
            return {...state};
    }
}

export default reducer;