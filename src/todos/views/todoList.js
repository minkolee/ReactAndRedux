import React from "react";

import store from "../../Store";
import * as Actions from '../actions';

class TodoList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ul className='todo-list'>
                {
                    this.props.todos.map(
                        item => (
                            <TodoItem
                                key = {item.id}
                                text = {item.text}
                                completed = {item.completed}
                                toogleAction = {Actions.toggleTodo(item.id)}
                                removeAction = {Actions.removeTodo(item.id)}
                            />

                        )
                    )
                }
            </ul>
        )
    }
}

export default TodoList;