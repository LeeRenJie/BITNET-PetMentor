import React, { useState } from "react";
import { Calendar as Cal } from "react-calendar";
import "react-calendar/dist/Calendar.css";
import styles from "./calendar.module.css";

function Calendar() {
  const [value, onChange] = useState(new Date());
  return (
    <div>
      <Cal className={styles.calendar} onChange={onChange} value={value} />
    </div>
  );
}

export default Calendar;
