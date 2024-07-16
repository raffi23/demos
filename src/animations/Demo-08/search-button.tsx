import { SearchIcon } from "lucide-react";
import { useiOSStore } from "./helpers/store";
import { motion } from "framer-motion";

const SearchButton = () => {
  const locked = useiOSStore((state) => state.notificationCenter.locked);

  return (
    <motion.div
      animate={{ z: locked ? 2000 : 0 }}
      className="mx-auto mb-5 flex w-fit items-center justify-center gap-1 rounded-full bg-white/40 px-2 py-1 backdrop-blur-2xl"
    >
      <SearchIcon size={11} className="rotate-6" />{" "}
      <p className="select-none text-[0.6875rem]">Search</p>
    </motion.div>
  );
};

export default SearchButton;
