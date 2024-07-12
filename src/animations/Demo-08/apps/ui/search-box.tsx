import { SearchIcon } from "lucide-react";

const SearchBox = () => {
  return (
    <search className="flex items-center gap-2 overflow-hidden rounded-md bg-[#e3e3e9] p-1">
      <SearchIcon size={20} className="text-[#818186]" />
      <input
        type="text"
        placeholder="Search"
        className="w-full bg-transparent outline-none placeholder:text-[#818186]"
      />
    </search>
  );
};

export default SearchBox;
