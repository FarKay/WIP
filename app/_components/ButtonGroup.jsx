import Text from "./Text";

function ButtonGroup() {
  return (
    <div className="flex gap-4">
      <button className="lg:w-[105px] lg:h-[52px] lg:rounded-2xl lg:border-2 lg:border-solid lg:p-4 lg:flex lg:gap-2 lg:items-center lg:justify-center hidden">
        <img src="/filter_line.png" alt="filter" className="h-5 w-5" />
        <Text variant="primary" style={{ color: "#ffffff", fontWeight: "600" }}>
          Filters
        </Text>
      </button>
      <button className="w-[130px] h-[52px] rounded-2xl py-4 px-5 lg:flex gap-[10px] items-center justify-center bg-custom-gradient hidden">
        <img src="/plus_icon.png" alt="icon" className="h-5 w-5" />
        <Text variant="primary" style={{ color: "#ffffff", fontWeight: "600" }}>
          Add new
        </Text>
      </button>

      <button className="h-10 w-10 rounded-lg border-2 p-[10px] sm:hidden">
        <img src="/filter_line.png" alt="filter" className="h-5 w-5" />
      </button>
      <button className="h-10 w-10 rounded-lg border-2 p-[10px] bg-custom-gradient sm:hidden">
        <img src="/plus_icon.png" alt="filter" className="h-5 w-5" />
      </button>
    </div>
  );
}

export default ButtonGroup;
