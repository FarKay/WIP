"use client";

import Link from "next/link";
import { useState } from "react";

const nav = [
  {
    id: 1,
    name: "dashboard",
    icon: "/dashboard-icon.png",
    link: "/",
  },
  {
    id: 2,
    name: "games",
    icon: "/games-icon.png",
    link: "/games",
  },
  {
    id: 3,
    name: "customers",
    icon: "/customers-icon.png",
    link: "/customers",
  },
  {
    id: 4,
    name: "settings",
    icon: "/settings-icon.png",
    link: "/settings",
  },
  {
    id: 5,
    name: "support",
    icon: "/support-icon.png",
    link: "/support",
  },
];

function MainNav() {
  const [isSelected, setIsSelected] = useState(nav[0]);

  console.log(isSelected, "is selected");

  function handleSelected(index) {
    setIsSelected(index);
  }

  return (
    <nav className="mt-[158px] mx-5 absolute">
      <ul className="w-[100px] flex flex-col gap-[30px] items-center justify-center">
        {nav.map((item, index) => (
          <li
            key={item.id}
            className="reltive inline-block p-[2px] rounded-2xl w-[99px] h-[73px]"
          >
            <Link
              href={item.link}
              onClick={() => handleSelected(index)}
              className={`h-full w-full flex flex-col items-center gap-2 p-3 hover:border-2 hover:rounded-2xl ${
                isSelected === index ? "bg-gradient-border rounded-2xl" : ""
              }`}
            >
              <img src={item.icon} alt={item.name} />
              <span
                className={`font-semibold text-[14px] leading-[16.59px] capitalize ${
                  isSelected === index ? "text-white" : "text-white/70"
                }`}
              >
                {item.name}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default MainNav;
