import CustomersData from "./_components/CustomersData";
import GameData from "./_components/GameData";
import Overview from "./_components/Overview";

export const metadata = {
  title: "Dashboard",
};

export default function Page() {
  return (
    <>
      <Overview />
      <GameData />
      <CustomersData />
    </>
  );
}
