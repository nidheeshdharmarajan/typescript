import React from "react";
type headingProp = {
  children: string;
};
const Heading = (props: headingProp) => {
  return <h3>{props.children}</h3>;
};

export default Heading;
