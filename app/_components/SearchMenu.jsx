import NotificationLine from "./NotificationLine";
import Notifications from "./Notifications";
import SearchInput from "./SearchInput";

function SearchMenu() {
  return (
    <div className="flex lg:gap-[30px] gap-4 items-center">
      <SearchInput />
      <Notifications />
      <NotificationLine />
      <div className="lg:flex lg:items-center lg:gap-2">
        <div className="lg:font-semibold lg:text-[14px] lg:leading-[16.59px] lg:text-[#fff] lg:block hidden">
          Yash Yash
        </div>
        <div>
          <img
            src="/avatar.png"
            alt="avatar"
            className="lg:h-10 lg:w-10 h-6 w-6"
          />
        </div>
      </div>
    </div>
  );
}

export default SearchMenu;
