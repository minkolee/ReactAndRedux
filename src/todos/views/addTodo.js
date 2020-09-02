import React from "react";
import * as Actions from '../actions';
import store from "../../Store";



class AddTodo extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='add-todo'>
                <form onSubmit={this.onSubmit}>
                    <input type="text" className='new-todo' ref={this.refInput}/>
                    <button className="add-btn" type='submit'>添加</button>
                </form>
            </div>
        )
    }

    onSubmit = (event) => {
        event.preventDefault();

        const input = this.input;
        if (!input.value.trim()) {
            return;
        }

        //需要更新一条记录
        store.dispatch(Actions.addTodo(input.value));

        //更新之后设置为空白
        input.value = '';
    };

    refInput = (node) => {
        this.input = node;
    };
}

export default AddTodo;