import React, { useState } from "react";

import "./todo-add-item.css";

const TodoAddItem = ({onAddItem}) => {

  const [inputTodo, setInputTodo] = useState({
    label: ''
  })

  const onLabelChange = eventFormChange => {
    setInputTodo((prev) => {return { ...prev, label: eventFormChange.target.value}})
  }

  const onSubmit = (event) => {
    event.preventDefault();
    if (inputTodo.label) onAddItem(inputTodo.label);
    setInputTodo((prev) => {return { ...prev, label: ''}});
  };

  return (
    <form className="input-group mb-3 todo-add-item"
          onSubmit={onSubmit}>
        <input type="text" 
          className="form-control" 
          placeholder="Enter your todo"  
          onChange={onLabelChange}
          value={inputTodo.label}
        />

        <div className="input-group-append">
          <button 
            className="btn btn-outline-primary" 
            type="submit"
            >
            Add Todo
          </button>

        </div>
    </form>
    );
}

export default TodoAddItem;