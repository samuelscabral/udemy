import React from "react";
import classes from "./styles.module.scss";

interface LogisticsItemProps {
  // eslint-disable-next-line no-undef
  icon: () => JSX.Element;
  children: React.ReactNode;
}

function LogisticsItem({ icon: Icon, children }: LogisticsItemProps) {
  return (
    <li className={classes.item}>
      <span className={classes.icon}>
        <Icon />
      </span>
      <span className={classes.content}>{children}</span>
    </li>
  );
}

export default LogisticsItem;
