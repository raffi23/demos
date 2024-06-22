import { useTheme } from "next-themes";
import { useRef } from "react";
import { gsap, useGSAP } from "../../utils/gsap";

const Toggle = () => {
  const { setTheme, resolvedTheme } = useTheme();
  const container = useRef<HTMLButtonElement>(null);

  const clickHandler = () => {
    if (resolvedTheme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  useGSAP(
    () => {
      if (resolvedTheme === "dark") {
        gsap.to(".toggle", { margin: "0 0 0 1rem" });
      } else {
        gsap.to(".toggle", { margin: "0 1rem 0 0" });
      }
    },
    { scope: container, dependencies: [resolvedTheme] },
  );

  return (
    <button ref={container} onClick={clickHandler}>
      <div
        className="grid items-center"
        style={{ gridTemplateAreas: "'stack'" }}
      >
        <div
          className="bg-secondary dark:bg-primary h-2 w-10 rounded-3xl"
          style={{ gridArea: "stack" }}
        />
        <div
          className="bg-secondary dark:bg-primary h-6 w-6 rounded-full toggle"
          style={{ gridArea: "stack" }}
        />
      </div>
    </button>
  );
};

export default Toggle;
