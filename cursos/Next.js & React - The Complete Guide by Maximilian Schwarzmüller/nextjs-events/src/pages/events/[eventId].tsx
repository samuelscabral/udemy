import { Fragment } from "react";
import Head from "next/head";
import {
  FeaturedEvent,
  getEventById,
  getFeaturedEvents,
} from "helpers/apiUtil";
import EventSummary from "components/EventDetail/EventSummary";
import EventLogistics from "components/EventDetail/EventLogistics";
import EventContent from "components/EventDetail/EventContent";
import Comments from "components/input/Comments";
import { GetStaticPropsContext, GetStaticPropsResult } from "next";

interface EventDetailPageProps {
  selectedEvent?: FeaturedEvent;
}

function EventDetailPage({ selectedEvent: event }: EventDetailPageProps) {
  if (!event) {
    return (
      <div className="center">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <Fragment>
      <Head>
        <title>{event.title}</title>
        <meta name="description" content={event.description} />
      </Head>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
      <Comments eventId={event.id} />
    </Fragment>
  );
}

export async function getStaticProps(
  context: GetStaticPropsContext
): Promise<GetStaticPropsResult<EventDetailPageProps>> {
  const eventId = context.params?.eventId;

  const event =
    eventId && typeof eventId === "string"
      ? await getEventById(eventId)
      : undefined;

  return {
    props: {
      selectedEvent: event,
    },
    revalidate: 30,
  };
}

export async function getStaticPaths() {
  const events = await getFeaturedEvents();

  const paths = events.map((event) => ({ params: { eventId: event.id } }));

  return {
    paths: paths,
    fallback: "blocking",
  };
}

export default EventDetailPage;
