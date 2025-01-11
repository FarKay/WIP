function TableHeader({ children }) {
  return (
    <div className="grid grid-cols-[1fr_1fr_1fr_1fr] px-4">{children}</div>
  );
}

export default TableHeader;
