import classNames from "classnames";

function Text({ variant, children, style, type }) {
  const text = classNames("capitalize text-white/70 text-left", {
    "lg:text-[14px] lg:leading-[16.59px] text-[12px] leading-[14.22px]":
      variant === "primary",
    "text-[12px] leading-[14.22px]": variant === "secondary",
  });

  return (
    <p className={text} style={style} type={type}>
      {children}
    </p>
  );
}

export default Text;
