import { motion } from "framer-motion";
import PlayingCard, { CardSymbol } from "./playing-card";

type PlayingCard = {
  symbol: CardSymbol;
  letter: string;
};

const symbols: CardSymbol[] = ["♥"];
const deck: PlayingCard[][] = symbols.map((symbol) => [
  { symbol, letter: "A" },
  { symbol, letter: "2" },
  { symbol, letter: "3" },
  { symbol, letter: "4" },
  { symbol, letter: "5" },
  { symbol, letter: "6" },
  { symbol, letter: "7" },
  { symbol, letter: "8" },
  { symbol, letter: "9" },
  { symbol, letter: "10" },
  { symbol, letter: "J" },
  { symbol, letter: "Q" },
  { symbol, letter: "K" },
]);

const Demo10 = () => {
  return (
    <div className="relative flex h-screen items-center justify-center overflow-hidden bg-orange-100">
      <div className="relative flex h-96 w-full justify-center">
        {deck.map((group, x) => {
          return group.map((card, y) => {
            const index = x * group.length + y;
            const percentage = index / (deck.length * group.length - 1);

            let currentX;
            let currentY;

            if (percentage <= 0.5) {
              const localPercentage = percentage / 0.5;
              currentX = -10 * (1 - localPercentage);
              currentY = 10 * (1 - localPercentage) - 10 * localPercentage;
            } else {
              const localPercentage = (percentage - 0.5) / 0.5;
              currentX = 10 * localPercentage;
              currentY = -10 * (1 - localPercentage) + 10 * localPercentage;
            }

            return (
              <PlayingCard
                id={card.letter + card.symbol}
                key={card.letter + card.symbol}
                letter={card.letter}
                symbol={card.symbol}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{
                  opacity: 1,
                  x: currentX * 15,
                  y: currentY * 3,
                  rotate: (percentage - 0.5) * 100,
                }}
                whileHover={{
                  y: currentY * 3 - 100,
                  rotate: 0,
                }}
                transition={{ duration: 1 }}
                style={{ zIndex: deck.length * group.length - index * -1 }}
              />
            );
          });
        })}

        <motion.img
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          style={{ x: "-50%" }}
          transition={{ duration: 1 }}
          className="absolute -bottom-64 left-1/2 h-96 w-96 -translate-x-1/2"
          src="/hand.png"
        />
      </div>
    </div>
  );
};

export default Demo10;
