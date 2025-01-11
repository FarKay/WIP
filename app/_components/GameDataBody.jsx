import TableRow from "./TableRow";
import Text from "./Text";

function GameDataBody({ data }) {
  return (
    <>
      <TableRow>
        <div className="flex gap-3 items-center">
          <img src="/arcade-image.png" alt="image" className="w-12 h-12" />
          <Text
            variant="primary"
            style={{ fontWeight: "600", color: "#ffffff" }}
          >
            {data.name}
          </Text>
        </div>
        <Text variant="primary" style={{ color: "#ffffff" }}>
          {data.category}
        </Text>
        <div className="flex flex-col gap-1">
          <Text variant="primary" style={{ color: "#ffffff" }}>
            {data.date}
          </Text>
          <Text variant="secondary" style={{ fontWeight: "400" }}>
            {data.time}
          </Text>
        </div>
        <div className="flex flex-row gap-4 h-10">
          <button className="flex items-center gap-2 rounded-lg border border-white/50 py-[10px] px-3">
            <img src="/edit.png" alt="icon" className="w-5 h-5" />
            <Text variant="secondary" style={{ fontWeight: "600" }}>
              edit
            </Text>
          </button>
          <button className="rounded-lg border border-white/50 p-[10px]">
            <img src="/trash.png" alt="icon" className="w-5 h-5" />
          </button>
        </div>
      </TableRow>
    </>
  );
}

export default GameDataBody;
