import {createStore, combineReducers} from "redux";


import {reducer as todoReducer} from './todos/reducer';
import {reducer as filterReducer} from './filter/reducer';

const reducer = combineReducers({
    todos: todoReducer,
    filter: filterReducer
});

const store = createStore(reducer);

export default store;