"use client";

import { forwardRef, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns";

function DatePickerComponent() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const CustomInput = forwardRef(({ value, onClick }, ref) => (
    <div
      onClick={onClick}
      ref={ref}
      className="flex items-center gap-[10px] p-4"
    >
      <div>
        <img src="/calender.png" alt="calender-icon" />
      </div>
      <span className="text-[14px] font-medium leading-[16.59px]">
        {value || format(selectedDate, "EEEE, dd MMMM")}
      </span>
      <div>
        <img src="/arrow-down.png" alt="" />
      </div>
    </div>
  ));

  return (
    <div className="lg:flex lg:items-center lg:gap-[10px] lg:rounded-2xl lg:border lg:border-white/70 hidden">
      <DatePicker
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        customInput={<CustomInput />}
        dateFormat="EEEE, dd MMMM"
      />
    </div>
  );
}

export default DatePickerComponent;
