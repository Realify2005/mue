import { fetchEventsInfo } from '../api/fetchEventsInfo';
import UpcomingEventsSkeleton from './UpcomingEventsSkeleton';
import dayjs from 'dayjs';

const UpcomingEvents = async () => {
  const apiEvents = await fetchEventsInfo();
  const currentDate = dayjs();

  const events = apiEvents
    .filter(evt => dayjs(evt.date).isAfter(currentDate))
    .map((evt, idx) => ({
      id:                     idx,
      affiliatedThirdParties: evt.affiliatedThirdParties,
      tags:                   evt.tags,
      location:               evt.location,
      finalised:              evt.finalised,
      name:                   evt.name,
      posterUrl:              evt.posterUrl,
      externalLink:           evt.externalLink ?? null,
      isNext:                 idx === 0,

      // date + time together:
      datetime: dayjs(evt.date).format('D MMM YYYY, h:mm A'),
    }));

  return <UpcomingEventsSkeleton events={events} />;
};

export default UpcomingEvents;
