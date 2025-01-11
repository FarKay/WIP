import Image from "next/image";

import logo from "@/public/logo.png";

function Logo() {
  return (
    <div className="text-center mt-[30px] ">
      <Image
        src={logo}
        quality={100}
        style={{ width: "auto", height: "28px" }}
        alt="logo"
        className="shadow-custom"
      />
    </div>
  );
}

export default Logo;
