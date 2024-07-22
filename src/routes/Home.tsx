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
      className={cn("underline-offset-3 text-teal-900 underline", className)}
      {...rest}
    >
      {children}
    </Link>
  );
};

const Home = () => {
  return (
    <div className="p-4 md:p-10">
      <h1 className="mx-auto mb-3 text-center text-2xl md:text-4xl">
        Raffi Chamakian's Demos
      </h1>
      <div className="mb-10 flex flex-wrap justify-between gap-4 text-xl md:justify-center">
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
        {demoRoutes
          .map((demo, index) => {
            return (
              <Link to={demo.urlPath} key={demo.urlPath}>
                <div className="overflow-hidden rounded-xl border border-black">
                  {demo.imagePath && (
                    <img
                      src={demo.imagePath}
                      className="aspect-video w-full object-cover"
                    />
                  )}
                  <div className="flex justify-between border-t border-black bg-white p-4">
                    <p>{demo.title ? demo.title : `demo-${index + 1}`}</p>
                    <p>Optimized for: {demo.responsive ? "🖥️📱" : "🖥️"}</p>
                  </div>
                </div>
              </Link>
            );
          })
          .reverse()}
      </div>
    </div>
  );
};

export default Home;
