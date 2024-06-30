import { FC, PropsWithChildren } from "react";
import { Link, LinkProps } from "react-router-dom";
import { cn } from "../../utils";
import { SearchIcon } from "lucide-react";

const Anchor: FC<PropsWithChildren & LinkProps> = ({
  children,
  className,
  ...rest
}) => {
  return (
    <Link className={cn("text-[#a9a9a9]", className)} {...rest}>
      {children}
    </Link>
  );
};

const SearchBar: FC = () => {
  return (
    <search className="flex items-center gap-2 text-sm bg-[#e6e6e6] rounded-3xl overflow-hidden py-2 px-4 flex-1 max-w-md h-10">
      <SearchIcon size={20} />
      <form className="h-full flex-1">
        <input
          className="bg-transparent h-full w-full outline-none placeholder:text-[#919191]"
          type="text"
          placeholder="Try 'Lotus GT 430'"
        />
      </form>
    </search>
  );
};

const Header = () => {
  return (
    <header className="flex items-center gap-12 py-2 px-10 bg-white rounded-xl drop-shadow-sm origin-top-left">
      <h4 className="text-lg">PIXLS</h4>
      <nav className="flex gap-6 text-sm">
        <Anchor to="/">Home</Anchor>
        <Anchor to="/" className="text-black">
          Get started
        </Anchor>
        <Anchor to="/">About</Anchor>
        <Anchor to="/">Forum</Anchor>
      </nav>
      <SearchBar />
      <button className="ml-auto bg-[#dbfea3] px-6 rounded-3xl h-9 text-sm">
        Login
      </button>
    </header>
  );
};

export default Header;
