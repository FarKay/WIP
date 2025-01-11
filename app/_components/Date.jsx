import Text from "./Text";

function Date() {
  return (
    <div className="lg:flex lg:items-center lg:gap-[10px] lg:p-4 lg:rounded-2xl lg:border lg:border-white/70 hidden">
      <div>
        <img src="/calender.png" alt="calender-icon" />
      </div>
      <Text variant="primary" style={{ color: "#ffffff" }}>
        Monday, 4th September
      </Text>
      <div>
        <img src="/arrow-down.png" alt="" />
      </div>
    </div>
  );
}

export default Date;
