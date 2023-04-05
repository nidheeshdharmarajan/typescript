import React from "react";
type personListProps = {
  names: { firstName: string; secondName: string }[];
};
const PersonList = (props: personListProps) => {
  return (
    <div>
      {props.names.map((name) => {
        return (
          <div>
            <h1>{name.firstName}</h1>
            <h2>{name.secondName}</h2>
          </div>
        );
      })}
    </div>
  );
};

export default PersonList;
