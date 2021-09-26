import React from "react";
import PropTypes from "prop-types";
function Todo(props) {
  return (
    <div>
      <h4>{props.todo.title} </h4>
      <p>{props.todo.desc} </p>
      <button className="btn btn-sm btn-danger" onClick={() => props.onDelete(props.todo)}>Delete</button>
    </div>
  );
}

export default Todo;

Todo.prototype = {
    todos: PropTypes.object.isRequired,
    onDelete: PropTypes.func
  };
  

