import React from "react";

const ListItem: React.FC<{ name: string }> = (props) => {
  return <li>{props.name}</li>;
};

export default ListItem;
