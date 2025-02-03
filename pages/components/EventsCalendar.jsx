import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useState } from "react";

const EventsCalendar = () => {
  const [date, setDate] = useState(new Date());

  return (
    <div>
      <Calendar onChange={setDate} value={date} />
      <p className="mt-2">Selected date: {date.toDateString()}</p>
    </div>
  );
};

export default EventsCalendar;
