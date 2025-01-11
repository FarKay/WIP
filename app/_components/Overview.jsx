import Heading from "./Heading";
import OverviewTab from "./OverviewTab";

const tabs = [
  {
    id: 1,
    image: "/game.png",
    value: 115,
    description: "total games",
    icon: "/zig-zag-pink.png",
    rate: 58.12,
  },
  {
    id: 2,
    image: "/user.png",
    value: 115,
    description: "total customers",
    icon: "/zig-zag-orange.png",
    rate: 58.12,
  },
  {
    id: 3,
    image: "/wallet.png",
    value: 115,
    description: "total revenues",
    icon: "/zig-zag-green.png",
    rate: 58.12,
  },
  {
    id: 4,
    image: "/chart.png",
    value: 115,
    description: "total game categories",
    icon: "/zig-zag-pink.png",
    rate: 58.12,
  },
  {
    id: 5,
    image: "/system.png",
    value: 115,
    description: "total games",
    icon: "/zig-zag-blue.png",
    rate: 58.12,
  },
];

function Overview() {
  return (
    <div className="flex flex-col gap-[15px] pl-4 lg:p-0 ">
      <Heading tag="secondary">Overview</Heading>
      <div className="flex flex-row lg:gap-[30px] gap-4 overflow-x-hidden min-w-[1424px]">
        {tabs.map((tab) => (
          <OverviewTab tab={tab} key={tab.id} />
        ))}
      </div>
    </div>
  );
}

export default Overview;
