import { FC, HTMLAttributes, PropsWithChildren, useRef } from "react";
import useMediaQuery from "../../hooks/useMediaQuery";
import { cn } from "../../utils";
import { gsap, useGSAP } from "../../utils/gsap";
import CapIcon from "../../assets/cap.svg?react";
import BottleIcon from "../../assets/bottle.svg?react";

const Heading: FC<HTMLAttributes<HTMLHeadingElement> & PropsWithChildren> = ({
  children,
  className,
  ...rest
}) => {
  return (
    <h1
      className={cn("text-2xl md:text-7xl/snug scale-150", className)}
      {...rest}
    >
      {children}
    </h1>
  );
};

const Circle = () => {
  return (
    <div
      id="circle"
      className="rounded-full border-2 border-teal-500 w-[600px] h-[600px] md:w-[1000px] md:h-[1000px] flex items-center justify-center shadow-md shadow-teal-500"
    >
      <div
        id="text-container"
        className="text-center flex flex-col gap-5 md:gap-10"
      >
        <div className="stagger ">
          <Heading>best mineral</Heading>
          <Heading>water you can drink</Heading>
        </div>
        <p className="stagger ">
          Lorem ipsum dolor sit amet consectetur adipisicing.
        </p>
        <button className="stagger rounded-3xl bg-[#eb6243] text-white text-lg md:text-2xl px-6 py-2 w-fit mx-auto">
          Shop Now
        </button>
      </div>
    </div>
  );
};

const Bottle = () => {
  return (
    <div
      id="bottle-container"
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center"
    >
      <div id="cap" className="z-10 relative">
        <CapIcon className="w-36 lg:w-60" />
        <div
          id="glow"
          className="h-16 lg:h-20 w-full bg-gradient-to-r from-teal-950 via-teal-500 to-teal-950 absolute top-[85%] lg:top-full blur-2xl"
        />
      </div>
      <BottleIcon id="bottle" className="w-36 lg:w-60" />
    </div>
  );
};

const Demo03 = () => {
  const timeline = useRef<gsap.core.Timeline>();
  const isMobile = useMediaQuery("sm");

  useGSAP(
    () => {
      timeline.current = gsap.timeline({
        scrollTrigger: {
          trigger: "#wrapper",
          scrub: 5,
          pin: true,
        },
      });
      timeline.current.scrollTrigger?.refresh();
      timeline.current.set("#cap", {
        yPercent: isMobile ? 120 : 180,
      });
      timeline.current.set("#bottle", {
        yPercent: isMobile ? 18 : 21,
      });
      timeline.current
        .from("#circle", { scale: 0.4 }, "<")
        .from("#text-container", { scale: 0.4, opacity: 0 }, "<")
        .from(
          ".stagger",
          { yPercent: 30, opacity: 0, stagger: 0.25, ease: "sine" },
          "<",
        )
        .to("#cap", { yPercent: isMobile ? -15 : -10 }, "<")
        .to("#bottle", { yPercent: isMobile ? 60 : 70 }, "<")
        .from("#glow", { opacity: 0 }, "<");
    },
    { dependencies: [isMobile] },
  );

  return (
    <div className="overflow-x-hidden">
      {/* <div className="h-[20vh]" /> */}
      <div id="wrapper" className="h-screen grid place-content-center relative">
        <Circle />
        <Bottle />
      </div>
      <div className="h-screen" />
    </div>
  );
};

export default Demo03;
