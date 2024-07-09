import { useRef } from "react";
import Content01 from "./content-01";
import Content02 from "./content-02";
import Content03 from "./content-03";
import Header from "./header";
import { gsap, useGSAP } from "../../utils/gsap";

const Challenge01 = () => {
  const timeline = useRef<gsap.core.Timeline>();

  useGSAP(() => {
    timeline.current = gsap.timeline();

    timeline.current
      .from("header", {
        yPercent: -100,
        rotation: -30,
        ease: "expo.inOut",
        duration: 1,
      })
      .from(
        "header *",
        {
          ease: "sine",
          opacity: 0,
          yPercent: -100,
          rotation: -5,
          stagger: 0.2,
        },
        "<",
      )
      .from("#content-01 *:not(.circle)", {
        yPercent: -100,
        opacity: 0,
        stagger: 0.1,
      })
      .from("#content-01 .circle", {
        xPercent: -100,
        opacity: 0,
        stagger: 0.15,
      })
      .from("#content-02", { yPercent: -10, opacity: 0 })
      .to("#content-02 .span-white", { color: "#fff", stagger: 0.2 })
      .from("#content-03", { opacity: 0 })
      .from("#content-03 #form", { yPercent: -5 })
      .from("#content-03 #form, #content-03 #drawer", { opacity: 0 }, "<+0.5")
      .from("#content-03 #form *", { opacity: 0, yPercent: -5, stagger: 0.2 })
      .from("#content-03 #drawer", { yPercent: -85, delay: 1 });
  });

  return (
    <div className="p-4 max-w-screen-2xl mx-auto">
      <Header />
      <div className="px-4 py-6 grid grid-cols-2 gap-6">
        <div>
          <Content01 />
          <Content02 />
        </div>
        <Content03 />
      </div>
    </div>
  );
};

export default Challenge01;
