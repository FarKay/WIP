import HeaderMenu from "./HeaderMenu";
import SearchMenu from "./SearchMenu";

function Header() {
  return (
    <header className="lg:max-w-[1300px] lg:h-[52px] lg:my-[30px] flex flex-row justify-between lg:px-[30px] py-6 px-4 lg:py-0 items-center h-[76px]">
      <HeaderMenu />
      <SearchMenu />
    </header>
  );
}

export default Header;
