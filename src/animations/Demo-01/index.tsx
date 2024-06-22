import { useTheme } from "next-themes";
import { useRef, useState } from "react";
import { gsap, useGSAP } from "../../utils/gsap";
import SectionOne from "./section-01";
import SectionTwo from "./section-02";
import SectionThree from "./section-03";

const fadeIn = {
  y: 50,
  opacity: 0,
  rotation: 15,
  stagger: 0.25,
};

const FirstAnimation = () => {
  const { setTheme } = useTheme();
  const container = useRef<HTMLDivElement>(null);
  const timeline = useRef<gsap.core.Timeline>();
  const [complete, setComplete] = useState(false);

  useGSAP(() => {
    setTheme("dark");

    timeline.current = gsap
      .timeline({ defaults: { ease: "power1.inOut" } })
      .from(
        "header a, #toggle, .header-icon, .heading, #add-cart-button, #heart",
        fadeIn,
      )
      .from("#bottle-container, .collapsible, .arrow", fadeIn)
      .to("#heart", { scale: 0.6, delay: 0.25 })
      .to("#heart", {
        scale: 1.25,
        fill: "rgba(255,0,0,1)",
        color: "rgba(255,0,0,1)",
        ease: "bounce.inOut",
      })
      .fromTo(
        "#checkmark",
        { width: 0, skewX: 5, rotation: 20, marginRight: 0 },
        {
          width: "auto",
          skewX: 0,
          rotation: 0,
          marginRight: 12,
        },
      )
      .to("#toggle", { scale: 1.5, duration: 1 })
      .to("#toggle", {
        scale: 1,
        onStart: () => {
          setTheme("light");
        },
      })
      .from(".notification", {
        duration: 3,
        ease: "bounce",
        rotation: "random(-5,5)",
        // scale: 0.4,
        opacity: 0,
        stagger: 1,
        onComplete: () => {
          setComplete(true);
        },
      })
      .to("#bottle", {
        y: 100,
        rotate: "random(-2,4)",
        yoyo: true,
        repeat: -1,
        duration: 5,
      })
      .to(".notification", {
        yoyo: true,
        repeat: -1,
        duration: 10,
        y: "-1%",
        rotation: "random(-5,5)",
      });
  });

  return (
    <div
      ref={container}
      className="max-w-screen-2xl mx-auto flex flex-col justify-center"
    >
      <div className="grid grid-cols-3 items-end">
        <SectionOne />
        <SectionTwo />
        <SectionThree animationComplete={complete} />
      </div>
    </div>
  );
};

export default FirstAnimation;
