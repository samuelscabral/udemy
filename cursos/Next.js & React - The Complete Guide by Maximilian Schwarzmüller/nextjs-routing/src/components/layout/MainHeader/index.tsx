import { useTheme } from "hooks/UseTheme";
import Link from "next/link";

import classes from "./styles.module.scss";

const themeTest: { [key: string]: string } = {
  "color-primary": "#000",
  "color-primary-dark": "#000",
  "color-on-primary": "#000",
};

function MainHeader() {
  const { switchTheme, themes } = useTheme();

  return (
    <header className={classes.header} onClick={() => switchTheme(themes.dark)}>
      <div className={classes.logo}>
        <Link href="/">NextEvents</Link>
      </div>
      <nav className={classes.navigation}>
        <ul>
          <li>
            <Link href="/events">Browse All Events</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainHeader;
