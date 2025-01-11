function Table({ children }) {
  return (
    <div className="rounded-2xl py-5 px-4 flex flex-col gap-4 bg-[#332e59] overflow-hidden w-[1241px]">
      {children}
    </div>
  );
}

export default Table;
