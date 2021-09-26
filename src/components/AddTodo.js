import React, { useState } from "react";

function AddTodo(props) {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const submit = (e) => {
e.preventDefault();
// console.log('title => $title');
if (!title || !desc) {
    alert("Fields cannot be blank")
}else{
// console.log('title => $title');
props.addTodo(title, desc); 

}
  };

  return (
    <div className="container mt-5">
      <h3 className="mb-4">Add a Todo</h3>
      <form onSubmit={submit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Todo Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="desc" className="form-label">
            Todo Description
          </label>

          <input
            type="type"
            className="form-control"
            id="desc"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-primary btn-sm" >
          Submit
        </button>
      </form>
    </div>
  );
}

export default AddTodo;
