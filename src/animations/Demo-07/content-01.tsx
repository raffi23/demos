import { FC, HTMLAttributes, PropsWithChildren } from "react";
import { cn } from "../../utils";
import { ArrowRightIcon } from "lucide-react";

const Heading: FC<PropsWithChildren & HTMLAttributes<HTMLHeadingElement>> = ({
  children,
  className,
  ...rest
}) => {
  return (
    <h1 className={cn("uppercase text-5xl", className)} {...rest}>
      {children}
    </h1>
  );
};

const Circle: FC<PropsWithChildren & HTMLAttributes<HTMLDivElement>> = ({
  children,
  className,
  style,
  ...rest
}) => {
  return (
    <div
      className={cn("w-10 h-10 first:ml-2 -ml-5 inline-block", className)}
      style={{ clipPath: "circle()", ...style }}
      {...rest}
    >
      {children}
    </div>
  );
};

const Content01 = () => {
  return (
    <div
      id="content-01"
      className="flex flex-col justify-center gap-24 py-20 px-10"
    >
      <div className="text-center flex flex-col gap-4">
        <h4 className="uppercase">largest image source</h4>
        <Heading>powered by</Heading>
        <div>
          <Heading className="relative">
            creators around
            <span className="absolute top-2/3 left-1/2 -translate-x-1/2 -z-10 h-5 w-2/3 bg-lime-200 rounded-3xl"></span>
          </Heading>
        </div>
        <Heading>
          the world.
          <Circle className="bg-lime-950 circle" />
          <Circle className="bg-lime-800 circle" />
          <Circle className="bg-lime-600 circle" />
          <Circle className="bg-lime-300 circle" />
        </Heading>
      </div>
      <div className="flex flex-col gap-3">
        <p className="text-[#9c9c9c] text-center">Don't have an account?</p>
        <button className="mx-auto flex items-center justify-center gap-2 relative">
          <span>Create account</span>
          <ArrowRightIcon size={18} />
          <span className="absolute top-[110%] left-1/2 -translate-x-1/2 h-px w-[120%] bg-black"></span>
        </button>
      </div>
    </div>
  );
};

export default Content01;
