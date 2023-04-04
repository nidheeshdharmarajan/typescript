import React from "react";
import Todo from "../models/Todo";
import ListItem from "./ListItem";

// function Todos(props: { items: string[] }) {
//   return (
//     <ul>
//       {props.items.map((item) => (
//         <li key={item}>{item}</li>
//       ))}
//     </ul>
//   );
// }

const Todos: React.FC<{ items: Todo[] }> = (props) => {
  return (
    <ul>
      {props.items.map((item) => (
        // <li key={item.id}>{item.name}</li>
        <ListItem name={item.name} />
      ))}
    </ul>
  );
};

export default Todos;
