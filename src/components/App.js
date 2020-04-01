import React from 'react';
import TodoItem from './TodoItem';

import todosData from '../todosData';


class App extends React.Component {
    constructor() {
        super();
        this.state = {
            todos: todosData
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(id) {
        this.setState(prevState => {
            const updatedTodo = prevState.todos.map(todo => {
                if (todo.id === id)
                    todo.completed = !todo.completed;
                return todo;
            });
            return {todo: updatedTodo};
        })
    }

    render() {
        const TodoItemList = this.state.todos.map(item => <TodoItem 
            key={item.id}
            item={item}
            change={this.handleChange}
        />);

        return (
            <div className="todo-list">
                {TodoItemList}
            </div>
        );    
    }
}

export default App;
