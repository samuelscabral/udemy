import Link from "next/link";
import { ButtonHTMLAttributes } from "react";
import { useTheme } from "hooks/UseTheme";

import classes from "./styles.module.scss";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  link?: string;
}

function Button({ link, children, onClick, ...rest }: ButtonProps) {
  // const { theme } = useTheme();

  if (link) {
    return (
      <Link href={link} {...rest}>
        <a className={classes.btn}>{children}</a>
      </Link>
    );
  }

  return (
    <button className={classes.btn} onClick={onClick} {...rest}>
      {children}
    </button>
  );
}

export default Button;
