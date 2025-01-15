"use client";

import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import Text from "./Text";
import { useState } from "react";

const dateList = [
  {
    id: 1,
    date: "today",
    icon: "/list_icon_active.png",
  },
  {
    id: 2,
    date: "this week",
    icon: "/list_icon.png",
  },
  {
    id: 3,
    date: "this month",
    icon: "/list_icon.png",
  },
  {
    id: 4,
    date: "this year",
    icon: "/list_icon.png",
  },
  {
    id: 5,
    date: "set up",
    icon: "/list_icon.png",
  },
];

const categoryList = [
  {
    id: 1,
    category: "easy",
    icon: "/bullet_icon_active.png",
  },
  {
    id: 2,
    category: "hard",
    icon: "/bullet_icon_active.png",
  },
  {
    id: 3,
    category: "easy hard",
    icon: "/bullet_icon_active.png",
  },
  {
    id: 4,
    category: "difficult",
    icon: "/bullet_icon_active.png",
  },
  {
    id: 5,
    category: "expert",
    icon: "/bullet_icon_active.png",
  },
];

function ListBox() {
  const [selected, setSelected] = useState(dateList[0]);
  const [selected2, setSelected2] = useState(categoryList[0]);

  const [isOpen, setIsOpen] = useState(false);
  const [isActive, SetIsActive] = useState(null);
  const [isActiveCategory, setIsActiveCategory] = useState(null);

  function handleActive(index) {
    SetIsActive(index);
  }

  function handleActiveCategory(index) {
    setIsActiveCategory(index);
  }

  return (
    <div className="sm:flex flex-row gap-5 items-center hidden">
      <Listbox value={selected} onChange={setSelected}>
        <ListboxButton
          onClick={() => {
            setIsOpen(!isOpen);
          }}
          className="flex flex-row h-[52px] w-[302.5px] rounded-2xl p-4 justify-between bg-[#332e59] items-center"
        >
          <div className="flex flex-row gap-4 items-center">
            <div className="h-5 w-5 flex justify-center items-center">
              <img src="/calender.png" alt="icon" />
            </div>
            <Text variant="primary" style={{ color: "#ffffff" }}>
              {selected.date}
            </Text>
          </div>
          <div className="flex items-center justify-center h-5 w-5">
            <img src="/arrow-down.png" alt="icon" />
          </div>
        </ListboxButton>
        <ListboxOptions
          anchor="bottom"
          transition
          className="w-[238px] h-[245px] rounded-lg bg-[#332e59] divide-y divide-[#282043]"
        >
          {dateList.map((item, index) => (
            <ListboxOption
              item={item}
              key={item.id}
              value={item}
              onClick={() => handleActive(index)}
              className={`flex flex-row py-1 pl-4 pr-6 gap-4 items-center h-12 focus:bg-[#282043] hover:bg-[#282043] ${
                isActive === index ? "bg-[#282043]" : "bg-[#332e59]"
              }`}
            >
              {isActive === index ? (
                <img src="/list_icon_active.png" alt="icon" />
              ) : (
                <img src="/list_icon.png" alt="icon" />
              )}

              <span
                className={`font-normal text-[14px] leading-[16.59px] capitalize ${
                  isActive === index ? "text-[#f20493]" : "text-[#fafafa]"
                }`}
              >
                {item.date}
              </span>
            </ListboxOption>
          ))}
        </ListboxOptions>
      </Listbox>

      <Listbox value={selected2} onChange={setSelected2}>
        <ListboxButton
          onClick={() => {
            setIsOpen(!isOpen);
          }}
          className="flex flex-row h-[52px] w-[302.5px] rounded-2xl p-4 justify-between bg-[#332e59] items-center"
        >
          <div className="flex flex-row gap-4 items-center">
            <div className="h-5 w-5 flex justify-center items-center">
              <img src="/chart_bar_fill.png" alt="icon" />
            </div>
            <Text variant="primary" style={{ color: "#ffffff" }}>
              {selected2.category}
            </Text>
          </div>
          <div className="flex items-center justify-center h-5 w-5">
            <img src="/arrow-down.png" alt="icon" />
          </div>
        </ListboxButton>
        <ListboxOptions
          anchor="bottom"
          transition
          className="w-[238px] h-[245px] rounded-lg bg-[#332e59] divide-y divide-[#282043]"
        >
          {categoryList.map((item, index) => (
            <ListboxOption
              item={item}
              key={item.id}
              onClick={() => handleActiveCategory(index)}
              className={`flex flex-row py-1 pl-4 pr-6 gap-4 items-center h-12 focus:bg-[#282043] hover:bg-[#282043] ${
                isActiveCategory === index ? "bg-[#282043]" : "bg-[#332e59]"
              }`}
            >
              {isActiveCategory === index ? (
                <img
                  src="/bullet_icon_active.png"
                  alt="icon"
                  className="w-6 h-6"
                />
              ) : (
                <div className="w-6 h-6"></div>
              )}

              <span
                className={`font-normal text-[14px] leading-[16.59px] capitalize ${
                  isActiveCategory === index
                    ? "text-[#f20493]"
                    : "text-[#fafafa]"
                }`}
              >
                {item.category}
              </span>
            </ListboxOption>
          ))}
        </ListboxOptions>
      </Listbox>
    </div>
  );
}

export default ListBox;
