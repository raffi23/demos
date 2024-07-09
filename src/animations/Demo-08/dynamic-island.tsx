import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import { ButtonHTMLAttributes, FC, useState } from "react";
import { cn } from "../../utils";
import { Hangup } from "./hang-up";
import { useSystemContext } from ".";

const Button: FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({
  children,
  className,
  ...rest
}) => {
  return (
    <button
      type="button"
      className={cn(
        "flex aspect-square h-full items-center justify-center rounded-full saturate-[1.25]",
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
  const { phoneOpen } = useSystemContext();
  const [active, setActive] = useState(false);

  const declineHandler = () => {
    setActive(false);
    onDecline();
  };

  const acceptHandler = () => {
    setActive(false);
    onAccept();
  };

  return (
    <motion.div
      style={{ x: "-50%", transformOrigin: "top center" }}
      initial={false}
      animate={{
        width: active ? "110%" : "32%",
        height: active ? "5rem" : "2rem",
        filter: active
          ? "drop-shadow(0 25px 25px rgb(0 0 0 / 0.15))"
          : "drop-shadow(0 25px 25px rgb(0 0 0 / 0))",
      }}
      className="absolute left-1/2 top-0 z-50 h-8 w-28 rounded-full bg-black drop-shadow-2xl"
      onClick={() => {
        if (phoneOpen) return;
        if (!active) setActive(true);
      }}
    >
      <motion.div
        initial={false}
        animate={{ opacity: active ? 1 : 0 }}
        className="flex h-full justify-between p-4"
      >
        <div className="flex h-full gap-2">
          <img src="/raffi.jpg" className="aspect-square h-full" />
          <div className="flex flex-col justify-end leading-none">
            <p className="text-xs text-neutral-400">home</p>
            <p className="text-sm">raffiwebdev</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Button className="bg-red-500" onClick={() => declineHandler()}>
            <Hangup width={28} height={28} />
          </Button>
          <Button className="bg-green-500" onClick={() => acceptHandler()}>
            <Phone size={24} fill="white" stroke="none" />
          </Button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default DynamicIsland;
