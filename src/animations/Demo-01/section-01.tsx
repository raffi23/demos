import { CheckIcon, HeartIcon } from "lucide-react";
import { FC, HTMLAttributes, PropsWithChildren } from "react";
import { cn } from "../../utils";

const Heading: FC<PropsWithChildren & HTMLAttributes<HTMLHeadingElement>> = ({
  children,
  className,
  ...rest
}) => {
  return (
    <h1
      className={cn(
        "text-[length:5.3125rem] font-normal leading-[1.05]",
        className,
      )}
      {...rest}
    >
      {children}
    </h1>
  );
};

const SectionOne = () => {
  return (
    <div className="max-w-xs grid gap-16">
      <div className="">
        <Heading className="heading -ml-1">Organic</Heading>
        <Heading className="heading ">energy</Heading>
        <div className="flex mb-8 items-center">
          <Heading className="heading ">water</Heading>
          <Heading className="heading text-[2.8rem] leading-none mt-4 ml-2">
            🔋
          </Heading>
        </div>
        <h3 className="heading text-5xl font-light">$34.99</h3>
      </div>

      <p className="heading text-[#757776]">
        Fresh, tangy and zesty lime with refreshing minty notes
      </p>

      <div className="flex gap-6 items-center">
        <button
          id="add-cart-button"
          className="bg-secondary text-primary dark:bg-primary dark:text-secondary rounded-full h-12 px-7 flex items-center text-lg"
        >
          <CheckIcon id="checkmark" className="w-0 mr-3" />{" "}
          <span id="text" className="overflow-x-hidden whitespace-nowrap">
            Add to cart
          </span>
        </button>
        <button>
          <HeartIcon id="heart" size={18} className="dark:text-white" />
        </button>
      </div>
    </div>
  );
};

export default SectionOne;
