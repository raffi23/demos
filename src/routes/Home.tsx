import { Link, LinkProps } from "react-router-dom";
import { demoRoutes } from "../utils/static";
import { FC, PropsWithChildren } from "react";
import { cn } from "../utils";

const NavLink: FC<PropsWithChildren & LinkProps> = ({
  children,
  className,
  ...rest
}) => {
  return (
    <Link
      className={cn("underline underline-offset-3 text-teal-900", className)}
      {...rest}
    >
      {children}
    </Link>
  );
};

const Home = () => {
  return (
    <div className="p-10">
      <h1 className="text-2xl text-center md:text-4xl mx-auto mb-3">
        Raffi Chamakian Demos
      </h1>
      <div className="flex justify-between md:justify-center gap-4 mb-10 text-xl flex-wrap">
        <NavLink to={"https://rhymecode.net"}>Website</NavLink>
        <span className="hidden md:block">-</span>
        <NavLink to={"https://instagram.com/raffiwebdev"}>Instagram</NavLink>
        <span className="hidden md:block">-</span>
        <NavLink to={"https://www.linkedin.com/in/raffi-chamakian/"}>
          LinkedIn
        </NavLink>
        <span className="hidden md:block">-</span>
        <NavLink to={"https://x.com/raffiwebdev"}>X (Twitter)</NavLink>
      </div>
      <div className="grid grid-cols-[repeat(auto-fill,_minmax(18.75rem,_1fr))] gap-4">
        {demoRoutes.map((demo, index) => {
          return (
            <Link to={demo.urlPath} key={demo.urlPath}>
              <div className="border border-black rounded-xl overflow-hidden">
                {demo.imagePath && (
                  <img
                    src={demo.imagePath}
                    className="w-full aspect-video object-cover"
                  />
                )}
                <div className="bg-white p-4 border-t border-black flex justify-between">
                  <p>{demo.title ? demo.title : `demo-${index + 1}`}</p>
                  <p>Optimized for: {demo.responsive ? "🖥️📱" : "🖥️"}</p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
