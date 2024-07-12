import { FC, HTMLProps } from "react";
import { cn } from "../../../../utils";

const Content: FC<HTMLProps<HTMLDivElement>> = ({
  children,
  className,
  style,
  ...rest
}) => {
  return (
    <div
      className={cn("bg-app px-4", className)}
      style={{ ...style }}
      {...rest}
    >
      {children}
    </div>
  );
};

export default Content;
