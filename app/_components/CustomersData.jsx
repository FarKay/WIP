import ButtonGroup from "./ButtonGroup";
import CustomersDataBody from "./CustomersDataBody";
import Heading from "./Heading";
import HeadingGroup from "./HeadingGroup";
import HeadingRow from "./HeadingRow";
import Table from "./Table";
import TableContainer from "./TableContainer";
import TableHeader from "./TableHeader";
import Text from "./Text";

const customersData = [
  {
    id: 1,
    name: "Ian Miguel",
    email: "juanmiguel@yopmail,com",
    address: " Tartu linn, Estonia",
  },
  {
    id: 2,
    name: "Ian Miguel",
    email: "juanmiguel@yopmail,com",
    address: " Tartu linn, Estonia",
  },
  {
    id: 3,
    name: "Ian Miguel",
    email: "juanmiguel@yopmail,com",
    address: " Tartu linn, Estonia",
  },
  {
    id: 4,
    name: "Ian Miguel",
    email: "juanmiguel@yopmail,com",
    address: " Tartu linn, Estonia",
  },
  {
    id: 5,
    name: "Ian Miguel",
    email: "juanmiguel@yopmail,com",
    address: " Tartu linn, Estonia",
  },
];

function CustomersData() {
  return (
    <TableContainer>
      <HeadingGroup>
        <HeadingRow>
          <Heading tag="secondary">customer's data</Heading>
          <Text variant="primary" style={{ color: "#f20493" }}>
            view all
          </Text>
        </HeadingRow>
        <ButtonGroup />
      </HeadingGroup>
      <Table>
        <TableHeader>
          <Text
            variant="primary"
            style={{ color: "#ffffff", fontWeight: "400" }}
          >
            customer's name
          </Text>
          <Text
            variant="primary"
            style={{ color: "#ffffff", fontWeight: "400" }}
          >
            email
          </Text>
          <Text
            variant="primary"
            style={{ color: "#ffffff", fontWeight: "400" }}
          >
            address
          </Text>
          <Text
            variant="primary"
            style={{ color: "#ffffff", fontWeight: "400" }}
          >
            action
          </Text>
        </TableHeader>

        {customersData.map((data) => (
          <CustomersDataBody data={data} key={data.id} />
        ))}
      </Table>
    </TableContainer>
  );
}

export default CustomersData;
