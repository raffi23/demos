import { HeartIcon, InboxIcon, UserCircle2 } from "lucide-react";
import { AnchorHTMLAttributes, FC, PropsWithChildren } from "react";
import { cn } from "../../utils";
import Toggle from "./Toggle";

const Anchor: FC<
  PropsWithChildren & AnchorHTMLAttributes<HTMLAnchorElement>
> = ({ children, className, ...rest }) => {
  return (
    <a className={cn("text-lg", className)} {...rest}>
      {children}
    </a>
  );
};

const Header = () => {
  return (
    <header className="max-w-screen-2xl mx-auto mb-28 flex justify-between items-center h-28 relative">
      <nav className="flex gap-14">
        <Anchor href="#">Category</Anchor>
        <Anchor href="#">Lifestyle</Anchor>
        <Anchor href="#">Books</Anchor>
      </nav>

      <div
        id="toggle"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <Toggle />
      </div>

      <div className="flex items-center gap-14">
        <HeartIcon className="header-icon" />
        <InboxIcon className="header-icon" />
        <UserCircle2 className="header-icon" />
      </div>
    </header>
  );
};

export default Header;
