import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";
import { useState } from "react";

function App() {
  let [todos, setTodos] = useState([
    { sno: 1, title: "go to market", desc: "your need " },
    { sno: 2, title: "go to gym", desc: "gym is important" },
    { sno: 3, title: "go to boxing", desc: "Learn boxing" },
    { sno: 4, title: "traveling", desc: "Got to new place " },
  ]);

  const onDelete = (todo) => {
    console.log("Delete function worked", todo);

    setTodos(
      todos.filter((e) => {
        console.log("checking which method is deleted", todo);
        return e !== todo;
      })
    );
  };

  return (
    <div>
      <Header title="MyTodoList" searchBar={false} />

      <AddTodo addTodo={todos} />

      <Todos todos={todos} onDelete={onDelete} />

      <Footer />
    </div>
  );
}

export default App;
