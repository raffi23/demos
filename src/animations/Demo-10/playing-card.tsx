import clsx from "clsx";
import { HTMLMotionProps, motion } from "framer-motion";
import { FC } from "react";
import { cn } from "../../utils";

export type CardSymbol = "♥" | "♦" | "♠️" | "♣";
type Props = {
  letter: string;
  symbol: CardSymbol;
};

const filter =
  "invert(64%) sepia(66%) saturate(1212%) hue-rotate(6deg) brightness(103%) contrast(94%)";

const Item: FC<{ position?: "top" | "bottom" } & Props> = ({
  position = "top",
  letter,
  symbol,
}) => {
  return (
    <div
      className={clsx(
        position !== "top" && "rotate-180",
        "flex flex-col items-center justify-center gap-1",
      )}
    >
      <p className="leading-none">{letter}</p>
      <p className="text-[length:0.8em] leading-none" style={{ filter }}>
        {symbol}
      </p>
    </div>
  );
};

const PlayingCard: FC<Props & HTMLMotionProps<"div">> = ({
  letter,
  symbol,
  className,
  style,
  ...rest
}) => {
  return (
    <motion.div
      className={cn(
        "absolute aspect-[9/16] h-96 overflow-hidden rounded-3xl border-l border-white/25 bg-black",
        className,
      )}
      style={{ ...style }}
      {...rest}
    >
      <div className="absolute inset-0 bg-gradient-to-tr from-white/15 to-white/25" />
      <div className="absolute left-6 top-6 text-yellow-500">
        <Item letter={letter} symbol={symbol} />
      </div>
      <div className="absolute bottom-6 right-6 text-yellow-500">
        <Item letter={letter} symbol={symbol} position="bottom" />
      </div>

      <div
        style={{ filter }}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-5xl"
      >
        <p>{symbol}</p>
      </div>
    </motion.div>
  );
};

export default PlayingCard;
