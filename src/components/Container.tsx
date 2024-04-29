import React, { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  classes?: string;
}

const Container: React.FC<ContainerProps> = ({ children, classes }) => {
  return <div className={"lg:px-[6.25rem] " + classes}>{children}</div>;
};

export default Container;
