import Image from "next/image";

import Button from "components/ui/Button";
import DateIcon from "components/icons/DateIcon";
import AddressIcon from "components/icons/Addressicon";
import ArrowRightIcon from "components/icons/ArrowRightIcon";

import classes from "./styles.module.scss";

interface EventItemProps {
  title: string;
  image: string;
  date: string;
  location: string;
  id: string;
}

function EventItem({ title, image, date, location, id }: EventItemProps) {
  const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const formattedAddress = location?.replace(", ", "\n");
  const exploreLink = `/events/${id}`;

  return (
    <li className={classes.item}>
      <Image src={"/" + image} alt={title} width={250} height={160} />
      <div className={classes.content}>
        <div className={classes.summary}>
          <h2>{title}</h2>
          <div className={classes.date}>
            <DateIcon />
            <time>{humanReadableDate}</time>
          </div>
          <div className={classes.address}>
            <AddressIcon />
            <address>{formattedAddress}</address>
          </div>
        </div>
        <div className={classes.actions}>
          <Button link={exploreLink}>
            <span>Explore Event</span>
            <span className={classes.icon}>
              <ArrowRightIcon />
            </span>
          </Button>
        </div>
      </div>
    </li>
  );
}

export default EventItem;
