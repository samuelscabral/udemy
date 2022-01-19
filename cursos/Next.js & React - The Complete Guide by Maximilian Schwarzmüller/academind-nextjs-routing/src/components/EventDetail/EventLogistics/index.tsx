import Image from "next/image";

import AddressIcon from "components/icons/Addressicon";
import DateIcon from "components/icons/DateIcon";
import LogisticsItem from "../LogisticsItem";
import classes from "./styles.module.scss";

interface EventLogisticsProps {
  date: string;
  address: string;
  image: string;
  imageAlt: string;
}

function EventLogistics({
  date,
  address,
  image,
  imageAlt,
}: EventLogisticsProps) {
  const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const addressText = address?.replace(", ", "\n");

  return (
    <section className={classes.logistics}>
      <div className={classes.image}>
        <Image src={`/${image}`} alt={imageAlt} width={400} height={400} />
      </div>
      <ul className={classes.list}>
        <LogisticsItem icon={DateIcon}>
          <time>{humanReadableDate}</time>
        </LogisticsItem>
        <LogisticsItem icon={AddressIcon}>
          <address>{addressText}</address>
        </LogisticsItem>
      </ul>
    </section>
  );
}

export default EventLogistics;
