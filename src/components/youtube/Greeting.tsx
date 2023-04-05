import React from "react";
type greetrops = {
  name: string;
  messageCount?: number;
  isLoggedin: boolean;
};
const Greeting = (props: greetrops) => {
  return (
    <div>
      {props.isLoggedin ? (
        <h1>
          Welcome {props.name},you have {props.messageCount} unread mesage
        </h1>
      ) : (
        <h1>Please Login</h1>
      )}
    </div>
  );
};

export default Greeting;
