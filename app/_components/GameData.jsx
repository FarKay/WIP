import ButtonGroup from "./ButtonGroup";
import GameDataBody from "./GameDataBody";
import Heading from "./Heading";
import HeadingGroup from "./HeadingGroup";
import HeadingRow from "./HeadingRow";
import ListBox from "./ListBox";
import Table from "./Table";
import TableContainer from "./TableContainer";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";
import Text from "./Text";

const gameData = [
  {
    id: 1,
    name: "arcade box",
    category: "easy",
    date: "may 23 2020",
    time: "20:20PM",
  },
  {
    id: 2,
    name: "arcade box",
    category: "easy",
    date: "may 23 2020",
    time: "20:20PM",
  },
  {
    id: 3,
    name: "arcade box",
    category: "easy",
    date: "may 23 2020",
    time: "20:20PM",
  },
  {
    id: 4,
    name: "arcade box",
    category: "easy",
    date: "may 23 2020",
    time: "20:20PM",
  },
  {
    id: 5,
    name: "arcade box",
    category: "easy",
    date: "may 23 2020",
    time: "20:20PM",
  },
];

function GameData() {
  return (
    <TableContainer>
      <HeadingGroup>
        <HeadingRow>
          <Heading tag="secondary">game data</Heading>
          <Text variant="primary" style={{ color: "#f20493" }}>
            view all
          </Text>
        </HeadingRow>
        <ButtonGroup />
      </HeadingGroup>
      <ListBox />
      <Table>
        <TableHeader>
          <Text
            variant="primary"
            style={{ color: "#ffffff", fontWeight: "400" }}
          >
            game name
          </Text>
          <Text
            variant="primary"
            style={{ color: "#ffffff", fontWeight: "400" }}
          >
            game category
          </Text>
          <Text
            variant="primary"
            style={{ color: "#ffffff", fontWeight: "400" }}
          >
            creation date
          </Text>
          <Text
            variant="primary"
            style={{ color: "#ffffff", fontWeight: "400" }}
          >
            action
          </Text>
        </TableHeader>

        {gameData.map((data) => (
          <GameDataBody data={data} key={data.id} />
        ))}
      </Table>
    </TableContainer>
  );
}

export default GameData;
