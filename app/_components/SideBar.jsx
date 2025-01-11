import Logo from "./Logo";
import MainNav from "./MainNav";

function SideBar() {
  return (
    <aside className="lg:row-span-full lg:w-[140px] lg:bg-[#332e59] lg:flex-col lg:items-center lg:relative hidden lg:flex">
      <Logo />
      <MainNav />
    </aside>
  );
}

export default SideBar;
