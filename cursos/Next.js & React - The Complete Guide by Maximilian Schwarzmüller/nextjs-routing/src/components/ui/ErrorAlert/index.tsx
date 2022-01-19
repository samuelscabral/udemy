import React from "react";
import classes from "./styles.module.scss";

interface ErrorAlertProps {
  children: React.ReactNode;
}

function ErrorAlert({ children }: ErrorAlertProps) {
  return <div className={classes.alert}>{children}</div>;
}

export default ErrorAlert;
