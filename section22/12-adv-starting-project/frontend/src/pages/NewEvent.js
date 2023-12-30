import { json, redirect } from 'react-router-dom';
import EventForm from '../components/EventForm';

const NewEventsPage = () => {
  return <EventForm method="post"></EventForm>;
};

export default NewEventsPage;
