import React from "react";

// import Todos from "./components/Todos";
// import Todo from "./models/Todo";
import Greeting from "./components/youtube/Greeting";
import PersonList from "./components/youtube/PersonList";
import Heading from "./components/youtube/Heading";
import personList from "./components/youtube/Data/personList";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./components/Home";
function App() {
  type routerType = { path: string; element: Element };
  const router: routerType =
    createBrowserRouter[
      {
        path: "/",
        element: <Home />,
      }
    ];
  // let todo = [new Todo("swimm"), new Todo("dance")];
  return (
    <div>
      {/* <Todos items={todo} /> */}
      <Greeting name="Nidheesh" messageCount={10} isLoggedin={false} />
      <PersonList names={personList} />
      <Heading> what a heading</Heading>
    </div>
  );
}

export default App;
