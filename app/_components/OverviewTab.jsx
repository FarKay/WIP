import Heading from "./Heading";
import Text from "./Text";

function OverviewTab({ tab }) {
  return (
    <div className="h-[82px] rounded-2xl p-4 flex flex-row gap-4 bg-[#332e59] sm:h-[145px] sm:p-5 sm:gap-5 sm:w-[224px] sm:justify-between">
      <div className="flex flex-row gap-4 items-center sm:flex-col sm:items-start">
        <div>
          <img src={tab.image} alt="" className="h-6 w-6" />
        </div>
        <div className="flex flex-col gap-2">
          <Heading tag="primary">{tab.value}</Heading>
          <Text variant="primary">{tab.description}</Text>
        </div>
      </div>

      <div className="flex lg:items-end items-start justify-center gap-[2px]">
        <div className="w-5 h-5">
          <img src={tab.icon} alt="" className="w-5 h-5" />
        </div>
        <Text variant="secondary" style={{ color: "#ee0bd7" }}>
          {tab.rate}
        </Text>
      </div>
    </div>
  );
}

export default OverviewTab;
