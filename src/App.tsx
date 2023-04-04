import React from "react";

import Todos from "./components/Todos";
import Todo from "./models/Todo";

function App() {
  let todo = [new Todo("swimm"), new Todo("dance")];
  return (
    <div>
      <Todos items={todo} />
    </div>
  );
}

export default App;
