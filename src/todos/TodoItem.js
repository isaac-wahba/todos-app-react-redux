import React from "react";
import './TodoItem.css'
const TodoItem = ({ item }) => {
  return (
    <div>
      <h3>{item.text}</h3>
      <div className="buttons-container">
        <button className="completed">Mark as Completed</button>
        <button className="remove">Remove</button>
    
      </div>
    </div>
  );
};

export default TodoItem;
