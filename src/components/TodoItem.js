import React from 'react';

const TodoItem = (props) => {
    const completedStyle = {
        fontStyle: "italic",
        color: "#cdcdcd",
        textDecoration: "line-through"
    };

    return (<div className="todo-item">
        <input className="todo__checkbox" 
            type="checkbox" 
            checked={props.item.completed}
            onChange={() => props.change(props.item.id)}
        />
        <p style={props.item.completed ? completedStyle : null} className="todo__text">{props.item.text}</p>
    </div>);
};

export default TodoItem;