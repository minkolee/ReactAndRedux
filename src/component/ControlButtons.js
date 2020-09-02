import React from "react";
import './ControlButtons.scss';
import store from "../store/Store";
import * as Actions from '../store/Action';

class ControlButtons extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='buttons'>
                <button onClick={this.increment}>+</button>
                <button onClick={this.decrement}>-</button>
            </div>
        );
    }

    increment = ()=>{
        switch (this.props.caption) {
            case 'red':
                store.dispatch(Actions.redIncrement());
                break;
            case 'green':
                store.dispatch(Actions.greenIncrement());
                break;
            case 'blue':
                store.dispatch(Actions.blueIncrement());
                break;
            default:
        }
    }

    decrement = ()=>{
        switch (this.props.caption) {
            case 'red':
                store.dispatch(Actions.redDecrement());
                break;
            case 'green':
                store.dispatch(Actions.greenDecrement());
                break;
            case 'blue':
                store.dispatch(Actions.blueDecrement());
                break;
            default:
        }
    }

}

export default ControlButtons;
