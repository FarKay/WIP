function SearchInput() {
  return (
    <>
      <div className="lg:flex lg:justify-between bg-[#332e59] lg:p-4 lg:rounded-2xl lg:items-center lg:w-[300px] hidden">
        <input
          type="search"
          name="search"
          id="search"
          className="lg:flex bg-[#332e59] outline-none border-none flex-grow font-normal text-[14px] leading-[16.59px] text-white/50 placeholder:font-normal placeholder:text-[14px] placeholder:leading-[16.59px] placeholder:text-white/50"
          placeholder="search here"
        />
        <img src="/search-icon.png" alt="" className="lg:h-5 lg:w-5 h-3 w-3" />
      </div>
      <div>
        <img
          src="/search.png"
          alt="icon"
          className="flex items-center justify-center sm:hidden"
        />
      </div>
    </>
  );
}

export default SearchInput;
