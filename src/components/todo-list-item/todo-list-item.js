import React from "react";
import "./todo-list-item.css";

const TodoListItem = ({ label, important = false, onDeleted,
                        onToggleImportant, onToggleDone,
                        done }) => {

    let className = "todo-list-item d-flex";

    if (done) className += ' done';

    if (important) className += ' important';

    return (
        <span className={className}>
            <span
                 className="todo-list-item-label"
                 onClick = {onToggleDone}
                 >
                {label}
           </span>

           <span>
                <button type="button"
                            className="btn btn-outline-success btn-sm"
                            onClick={onToggleImportant}>
                        <i className="fa fa-exclamation"></i>
                </button>

                <button type="button"
                            className="btn btn-outline-danger btn-sm"
                            onClick={onDeleted}>
                        <i className="fa fa-trash"></i>
                </button>
           </span>
        </span>
    )
}           

export default TodoListItem;