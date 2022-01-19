import React from "react";

import classes from "./styles.module.scss";

interface EventContentProps {
  children: React.ReactNode;
}

function EventContent({ children }: EventContentProps) {
  return <section className={classes.content}>{children}</section>;
}

export default EventContent;
