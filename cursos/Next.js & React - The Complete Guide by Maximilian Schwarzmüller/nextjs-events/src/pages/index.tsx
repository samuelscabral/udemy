import Head from "next/head";

import { FeaturedEvent, getFeaturedEvents } from "helpers/apiUtil";
import EventList from "components/events/EventList";
import NewsletterRegistration from "components/input/NewsletterRegistration";

interface HomePageProps {
  events: FeaturedEvent[];
}

function HomePage(props: HomePageProps) {
  return (
    <div>
      <Head>
        <title>NextJS Events</title>
        <meta
          name="description"
          content="Find a lot of great events that allow you to evolve..."
        />
      </Head>
      <NewsletterRegistration />
      <EventList items={props.events} />
    </div>
  );
}

export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents();

  return {
    props: {
      events: featuredEvents,
    },
    revalidate: 1800,
  };
}

export default HomePage;
