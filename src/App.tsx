import React from "react";

import Todos from "./components/Todos";

function App() {
  let arrays = ["list 1", "List 2", "Nothing"];
  return (
    <div>
      <h1>hellow</h1>
      <Todos items={arrays} />
    </div>
  );
}

export default App;
