import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import { ButtonHTMLAttributes, FC, MouseEvent, useState } from "react";
import { cn } from "../../utils";
import { Hangup } from "./icons/hang-up";
import { useiOSStore } from "./helpers/store";

const Button: FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({
  children,
  className,
  ...rest
}) => {
  return (
    <button
      type="button"
      className={cn(
        "flex h-12 w-12 items-center justify-center rounded-full saturate-[1.25]",
        className,
      )}
      {...rest}
    >
      {children}
    </button>
  );
};

const DynamicIsland: FC<{ onDecline: () => void; onAccept: () => void }> = ({
  onDecline,
  onAccept,
}) => {
  const activeApp = useiOSStore((state) => state.activeApp);
  const [active, setActive] = useState(false);

  const declineHandler = (event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    setActive(false);
    onDecline();
  };

  const acceptHandler = (event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    setActive(false);
    onAccept();
  };

  return (
    <motion.div
      style={{ x: "-50%", transformOrigin: "top center" }}
      initial={false}
      animate={{
        width: active ? "110%" : "32%",
        height: active ? "auto" : "2rem",
        filter: active
          ? "drop-shadow(0 25px 25px rgb(0 0 0 / 0.15))"
          : "drop-shadow(0 25px 25px rgb(0 0 0 / 0))",
      }}
      className="absolute left-1/2 top-0 z-50 h-8 w-28 cursor-pointer rounded-full bg-black text-start drop-shadow-2xl"
      onClick={() => {
        if (activeApp) return;
        setActive((prev) => !prev);
      }}
    >
      <motion.div
        initial={false}
        animate={{ opacity: active ? 1 : 0, scale: active ? 1 : 0 }}
        className="flex h-full justify-between p-4"
      >
        <div className="flex gap-2">
          <img src="/raffi.jpg" className="h-12 w-12" />
          <div className="flex flex-col justify-end leading-none">
            <p className="text-xs text-neutral-400">home</p>
            <p className="text-sm">raffiwebdev</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Button
            className="bg-red-500"
            onClick={(event) => declineHandler(event)}
          >
            <Hangup width={28} height={28} />
          </Button>
          <Button
            className="bg-green-500"
            onClick={(event) => acceptHandler(event)}
          >
            <Phone size={24} fill="white" stroke="none" />
          </Button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default DynamicIsland;
