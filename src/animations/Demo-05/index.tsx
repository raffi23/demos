import {
  createContext,
  FC,
  HtmlHTMLAttributes,
  HTMLProps,
  PropsWithChildren,
  useContext,
  useRef,
  useState,
} from "react";
import { cn } from "../../utils";
import { gsap } from "../../utils/gsap";
import { useGSAP } from "@gsap/react";

const ActiveContext = createContext<number>(1);

const Heading: FC<
  HtmlHTMLAttributes<HTMLHeadingElement> & PropsWithChildren
> = ({ children, className, ...rest }) => {
  return (
    <h1 className={cn("leading-none text-3xl font-bold", className)} {...rest}>
      {children}
    </h1>
  );
};
const Header = () => {
  return (
    <header className="flex justify-between items-center py-6">
      <div>
        <div className="-space-y-3">
          <Heading>Dental</Heading>
          <Heading>Health</Heading>
        </div>
        <p className="leading-none -mt-1 text-[50%]">quality healthcare</p>
      </div>
      <button className="border border-black py-3 px-5 rounded-full">
        Menu
      </button>
      <p>Dental Emergency</p>
    </header>
  );
};

const Image: FC<HTMLProps<HTMLImageElement>> = ({ className, ...rest }) => {
  return (
    <img
      className={cn(
        "absolute top-0 left-0 w-full h-full object-cover rounded-3xl",
        className,
      )}
      {...rest}
    />
  );
};

const ImageContainer: FC = () => {
  const active = useContext(ActiveContext) ?? 2;

  useGSAP(
    () => {
      const images = gsap.utils.toArray(".image");
      images.forEach((image, index) => {
        const element = image as HTMLImageElement;
        gsap.to(element, { opacity: index === active ? 1 : 0 });
      });
    },
    { dependencies: [active] },
  );

  return (
    <div className="h-full relative">
      {Array(3)
        .fill(null)
        .map((_, index) => {
          return (
            <Image
              id={`image-${index}`}
              key={index}
              src={`/demo-05/face-${index + 1}.png`}
              className="image"
            />
          );
        })}
    </div>
  );
};

const Number: FC<
  PropsWithChildren<{ index: number }> & HTMLProps<HTMLHeadingElement>
> = ({ index, children, className, ...rest }) => {
  const active = useContext(ActiveContext);
  const mainRef = useRef<HTMLHeadingElement>(null);
  const ref = useRef<HTMLDivElement>(null);
  const tl = useRef(gsap.timeline());

  useGSAP(
    () => {
      const refActive = index === active;
      gsap.set(".cat", { opacity: 0 });
      tl.current.clear();
      tl.current
        .to(
          ref.current,
          { opacity: refActive ? 1 : 0, yPercent: refActive ? -70 : -50 },
          "<",
        )
        .to(mainRef.current, { opacity: refActive ? 0 : 1 }, "<")
        .to(".cat", { opacity: active === 1 ? 1 : 0 }, "<");
    },
    { dependencies: [active, index] },
  );

  return (
    <div className="relative">
      <h1
        ref={mainRef}
        className={cn(
          "text-[180px] text-neutral-300 select-none leading-none",
          className,
        )}
      >
        {children}
      </h1>

      <div
        ref={ref}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-8 rounded-3xl drop-shadow-2xl z-10"
      >
        <h1
          className={cn("text-[180px] select-none leading-none", className)}
          {...rest}
        >
          {children}
        </h1>

        {active === index && index === 1 && (
          <>
            <img
              src="/demo-05/cat-0.png"
              alt=""
              className="cat absolute bottom-full left-1/2 -translate-x-1/2 w-24 object-contain"
            />
            <img
              src="/demo-05/cat-1.png"
              alt=""
              className="cat absolute top-full left-1/2 -translate-x-1/2 w-32 object-contain"
            />
          </>
        )}
      </div>
    </div>
  );
};
const numbers = ["4", "0", "4"];
const NumbersContainer: FC<{
  onActiveChange: (index: number) => void;
}> = ({ onActiveChange }) => {
  return (
    <div className="flex items-center justify-center">
      <div className="flex flex-col">
        <div className="flex gap-4 justify-center">
          {numbers.map((x, index) => (
            <Number
              index={index}
              onMouseEnter={() => onActiveChange(index)}
              onMouseLeave={() => onActiveChange(1)}
            >
              {x}
            </Number>
          ))}
        </div>
        <div className="text-center">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
      </div>
    </div>
  );
};

const Demo05 = () => {
  const [active, setActive] = useState<number>(1);

  return (
    <ActiveContext.Provider value={active}>
      <div className="px-6 h-screen flex flex-col">
        <Header />
        <div className="grid grid-cols-2 flex-1 pb-6">
          <NumbersContainer onActiveChange={setActive} />
          <ImageContainer />
        </div>
      </div>
    </ActiveContext.Provider>
  );
};

export default Demo05;
