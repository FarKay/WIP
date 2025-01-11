function TableRow({ children }) {
  return (
    <div className="grid grid-cols-[1fr_1fr_1fr_1fr] p-4 rounded-2xl h-20 bg-[#282043] items-center">
      {children}
    </div>
  );
}

export default TableRow;
