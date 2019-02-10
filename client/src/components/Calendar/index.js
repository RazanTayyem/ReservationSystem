import React from 'react';
import bigCalendar from "react-big-calendar";
import moment from "moment";

const localizer = bigCalendar.momentLocalizer(moment);

const Calendar = () =>{
  return(
    <bigCalendar
    localizer={localizer} />
  )
}
export default Calendar;
