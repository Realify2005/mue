import { fetchEventsInfo } from '../../components/api/fetchEventsInfo';
import UpcomingEvents from './UpcomingEventsClient';
import dayjs from 'dayjs';

const UpcomingEventsServer = async () => {
  const apiEvents = await fetchEventsInfo(); // Fetch the events data from the API

  // Get the current date
  const currentDate = dayjs();

  // Convert API events to frontend event format and filter for future events
  const events = apiEvents
    .filter(event => dayjs(event.date).isAfter(currentDate)) // Filter for future events
    .map((event, index) => ({
      id: index + 1, // Generate a unique id using the index (starting from 1)
      posterUrl: event.posterUrl,
      date: dayjs(event.date).format('D'), // Get the day of the month
      month: dayjs(event.date).format('MMM').toUpperCase(), // Get the 3-letter month abbreviation
      title: event.name, 
      isNext: false, // Initialize isNext as false
    }));

  return <UpcomingEvents events={events} />;
};

export default UpcomingEventsServer;
