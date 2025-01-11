import Link from "next/link";

const nav = [
  {
    name: "dashboard",
    icon: "/dashboard-icon.png",
    link: "/dashboard",
  },
  {
    name: "games",
    icon: "/games-icon.png",
    link: "/games",
  },
  {
    name: "customers",
    icon: "/customers-icon.png",
    link: "/customers",
  },
  {
    name: "settings",
    icon: "/settings-icon.png",
    link: "/settings",
  },
  {
    name: "support",
    icon: "/support-icon.png",
    link: "/support",
  },
];

function MainNav() {
  return (
    <nav className="mt-[158px] mx-5 absolute">
      <ul className="w-[100px] flex flex-col gap-[30px] items-center justify-center">
        {nav.map((item) => (
          <li key={item.name}>
            <Link
              href={item.link}
              className="flex flex-col items-center gap-2 p-3"
            >
              <img src={item.icon} alt={item.name} />
              <span className="font-semibold text-[#fff] text-[14px] leading-[16.59px] capitalize">
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
