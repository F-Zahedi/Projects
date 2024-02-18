import { useState } from "react";
import Calendar from "react-calendar";

const Calender = ({onSelectDate }) => {
  const [date, setDate] = useState(new Date());

  return (
    <>
      <div className="calendar">
        <p className="text-center">انتخاب تاریخ</p>
        <div className="calendar-container">
        <Calendar className="calen" onChange={(date) => onSelectDate(date)} value={date} />
        </div>
        <p className="text-center">{date.toDateString()}</p>
      </div>
    </>
  );
};

export default Calender;
