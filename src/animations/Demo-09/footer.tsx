import { stagger, useAnimate, useInView } from "framer-motion";
import { useEffect } from "react";
import Header from "./header";

const Footer = () => {
  const [scope, animate] = useAnimate();
  const inView = useInView(scope, { once: true, amount: "all" });

  useEffect(() => {
    if (inView) {
      animate(
        ".ainos",
        { y: [100, 0], opacity: [0, 1] },
        { delay: stagger(0.2) },
      );
    }
  }, [inView, animate]);

  return (
    <footer className="mb-8">
      <div className="mb-8 grid grid-cols-1 gap-12 px-2 text-center md:grid-cols-2 md:text-start">
        <div
          ref={scope}
          className="text-8xl font-bold uppercase leading-[0.9] tracking-tighter md:text-9xl"
        >
          <h1 className="ainos relative z-30 bg-white">ainos</h1>
          <h1 className="ainos relative z-20 -mt-12 bg-white text-neutral-400 md:-mt-16">
            ainos
          </h1>
          <h1 className="ainos relative z-10 -mt-12 bg-white text-neutral-400 md:-mt-16">
            ainos
          </h1>
        </div>
        <div className="ml-auto mt-auto flex max-w-96 flex-col">
          <search className="relative mb-8 w-full rounded-full border p-4 px-8 text-white md:w-96">
            <input
              type="text"
              placeholder="Enter your email here"
              className="w-full bg-transparent"
            />
            <button className="absolute right-1 top-1/2 h-3/4 -translate-x-1 -translate-y-1/2 rounded-full bg-yellow-600 px-4">
              Send
            </button>
          </search>
          <p className="text-neutral-400">
            <small>
              Send us your email, we will tell you what surprises there will be
              in the future. Greetings{" "}
              <span className="text-black">
                <strong>MONE</strong>
              </span>
            </small>
          </p>
        </div>
      </div>

      <hr />
      <Header placedInFooter className="mb-0 pb-0" />
    </footer>
  );
};

export default Footer;
