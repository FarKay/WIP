import classNames from "classnames";

function Heading({ tag, children }) {
  const heading = classNames("font-semibold text-[#fff] text-left capitalize", {
    "lg:text-[30px] lg:leading-[35.55px] text-[24px] leading-[28.44px]":
      tag === "primary",
    "lg:text-[20px] lg:leading-[23.7px] text-[16px] leading-[18.96px]":
      tag === "secondary",
  });

  return <h1 className={heading}>{children}</h1>;
}

export default Heading;
