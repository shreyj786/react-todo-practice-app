import React from "react";
import Todo from "./Todo";
import PropTypes from "prop-types";

function Todos(props) {
  return (
    <div className="container">
      <h3 className="text-center mt-4"> Todos List </h3>

{props.todos.length === 0 ? 'No Todos left to display' :  props.todos.map((todo) => ( <Todo todo={todo} key = {todo.sno}  onDelete={props.onDelete} /> ))   }  

    
    </div>
  );
}

export default Todos;

Todos.prototype = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
  onDelete: PropTypes.func
};
