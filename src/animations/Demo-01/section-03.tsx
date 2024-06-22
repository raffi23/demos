import clsx from "clsx";
import { ArrowLeft, ArrowRight, MinusIcon, PlusIcon } from "lucide-react";
import {
  FC,
  MouseEventHandler,
  PropsWithChildren,
  useEffect,
  useState,
} from "react";
import AnimateVisibility from "../../components/AnimateVisibility";

const Collapsible: FC<
  {
    title: string;
    visible?: boolean;
    onClick?: MouseEventHandler<HTMLButtonElement>;
  } & PropsWithChildren
> = ({ title, children, visible = false, onClick }) => {
  return (
    <div
      className={clsx(
        "collapsible flex flex-col hover:text-foreground transition-colors duration-300 mb-4",
        !visible && "text-neutral-400",
      )}
    >
      <button
        className={clsx(
          "flex justify-between items-center transition-all duration-300",
          visible && "mb-4",
        )}
        onClick={onClick}
      >
        <p className={clsx("text-3xl")}>{title}</p>
        <div>{visible ? <MinusIcon /> : <PlusIcon />}</div>
      </button>

      <AnimateVisibility visible={visible}>
        <p>{children}</p>
      </AnimateVisibility>

      <div
        className={clsx(
          "h-px bg-neutral-400 mt-6 transition-opacity duration-300",
          visible && "opacity-0",
        )}
      ></div>
    </div>
  );
};

const SectionThree: FC<{ animationComplete?: boolean }> = ({
  animationComplete,
}) => {
  const [active, setActive] = useState<number>();

  const clickHandler = (index: number) => {
    if (index === active) {
      setActive(undefined);
    } else setActive(index);
  };

  useEffect(() => {
    if (animationComplete) setActive(2);
  }, [animationComplete]);

  return (
    <div className="max-w-xs ml-auto grid gap-44">
      <div className="flex gap-8">
        <ArrowLeft size={32} className="opacity-50 arrow" />{" "}
        <ArrowRight size={32} className="arrow" />
      </div>
      <div>
        {["Description", "Nutrition", "Ingredients"].map((item, index) => {
          return (
            <Collapsible
              key={index}
              title={item}
              visible={active === index}
              onClick={() => clickHandler(index)}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero a,
              quos soluta enim voluptatem neque. Sunt sint velit quo, minus, at
              porro distinctio, amet molestiae ullam impedit aliquam itaque
              voluptates.
            </Collapsible>
          );
        })}
      </div>
    </div>
  );
};

export default SectionThree;
