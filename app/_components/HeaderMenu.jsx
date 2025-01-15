"use client";

import DatePickerComponent from "./DatePickerComponent";
import Heading from "./Heading";

function HeaderMenu() {
  return (
    <div className="lg:flex lg:flex-row lg:gap-[30px] text-[#fff] items-center">
      <div className="flex items-center gap-4">
        <div className="sm:hidden flex w-5 h-5 items-center">
          <img src="/menu-icon.png" alt="icon" />
        </div>
        <div>
          <Heading tag="primary">Dashboard</Heading>
        </div>
      </div>
      <DatePickerComponent />
    </div>
  );
}

export default HeaderMenu;
