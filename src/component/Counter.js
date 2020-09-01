import React from "react";

import './Counter.scss';

class Counter extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: props.initValue || 0
        }
    }

    render() {
        const {caption} = this.props;
        return (
            <div className='counter'>
                <button onClick={this.increment}>+</button>
                <button onClick={this.decrement}>-</button>
                <span> {caption} value: {this.state.value}</span>
            </div>
        );
    }

    increment = () => {
        this.setState({
            value: this.state.value + 1
        })
    };

    decrement = () => {
        this.setState({
            value: this.state.value - 1
        })
    };

}

export default Counter;