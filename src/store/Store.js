import {createStore} from "redux";
import reducer from "./Reducer";

const initValue = {
    'red': 128,
    'green': 128,
    'blue': 128
}

const store = createStore(reducer, initValue);

export default store;


