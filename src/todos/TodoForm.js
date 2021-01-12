import React, { useState } from "react";
import './TodoForm.css'
const TodoForm = () => {

  const [todo, setTodo] = useState("");

  return (
    <div className="new-item">
      <input
      placeholder="Type your new Todo here.."
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        className="item-text"
      />
      <button className="item-submit">Create Todo</button>
    </div>
  );
};

export default TodoForm;
