import { MotionValue, motionValue, useScroll } from "framer-motion";
import { createContext, FC, HTMLProps, useRef } from "react";
import { cn } from "../../../../utils";

type AppEntryContextProps = {
  scrollY: MotionValue<number>;
  scrollYProgress: MotionValue<number>;
};

export const AppEntryContext = createContext<AppEntryContextProps>({
  scrollY: motionValue(0),
  scrollYProgress: motionValue(0),
});

const disabledVariants = {
  top: "pt-0 pb-safe-bottom",
  bottom: "pb-0 pt-safe-top",
  both: "py-0",
  none: "pb-safe-bottom pt-safe-top",
};

const App: FC<
  HTMLProps<HTMLDivElement> & {
    safeArea?: "top" | "bottom" | "both" | "none";
  }
> = ({ className, children, safeArea = "none", ...rest }) => {
  const scrollContainer = useRef<HTMLDivElement>(null);
  const { scrollY, scrollYProgress } = useScroll({
    container: scrollContainer,
  });

  return (
    <AppEntryContext.Provider
      value={{
        scrollY,
        scrollYProgress,
      }}
    >
      <div
        className={cn(
          "h-full",
          safeArea && disabledVariants[safeArea],
          className,
        )}
        {...rest}
      >
        <div
          ref={scrollContainer}
          className="lg:scrollbar-hidden flex h-full flex-col overflow-y-auto"
        >
          {children}
        </div>
      </div>
    </AppEntryContext.Provider>
  );
};

export default App;
