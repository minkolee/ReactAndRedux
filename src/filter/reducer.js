import {SET_FILTER} from './actionTypes.js';
import {FilterTypes} from "./constants";

const reducer = (state = FilterTypes.ALL, action) => {
    if (action.type === SET_FILTER) {
        return action.filter;
    } else {
        return state;
    }
};

export default reducer;