import React from "react";

const NewTodo = () => {
  const submitHAndler = (event: React.FormEvent) => {
    event.preventDefault();
  };
  return (
    <form onSubmit={submitHAndler}>
      <label htmlFor="text">Todo</label>
      <input type="text" id="text" />
      <button type="submit">submit</button>
    </form>
  );
};

export default NewTodo;
