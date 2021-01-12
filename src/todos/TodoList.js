import React from 'react';
import TodoForm from './TodoForm';
import TodoItem from './TodoItem';

const TodoList = ({todos =[{text: 'Hello Ziko, I Love you!'}]}) => {

    return (
        <div className="list-wrapper">
            <TodoForm/>
            {todos.map(todo=>
                <TodoItem item={todo}/>
            )}
        </div>
    )

}

export default TodoList;