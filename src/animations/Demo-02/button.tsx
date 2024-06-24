import { ButtonHTMLAttributes, FC, PropsWithChildren } from "react";
import { cn } from "../../utils";

const Button: FC<
  { variant: "primary" | "secondary" | "tab" } & PropsWithChildren &
    ButtonHTMLAttributes<HTMLButtonElement>
> = ({ variant = "primary", className, children, ...rest }) => {
  return (
    <button
      type="button"
      className={cn(
        "border min-h-12 px-6 transition-colors duration-300 cursor-pointer leading-none",
        variant === "primary"
          ? "bg-black/75 text-white rounded-3xl border-transparent"
          : variant === "secondary"
            ? "bg-transparent rounded-lg border-black/75"
            : "bg-transparent rounded-3xl border-transparent text-base lg:text-xl",
        className,
      )}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
