import { AnimatePresence } from "framer-motion";
import { FC, ReactNode, useId } from "react";
import Animate from "./animate";

type Props = {
  actionLeft?: ReactNode;
  actionRight?: ReactNode;
  description?: string;
  tintColor?: string;
};

const Toolbar: FC<Props> = ({
  actionLeft,
  actionRight,
  description,
  tintColor,
}) => {
  const id = useId();
  return (
    <div
      className="sticky bottom-0 z-20 mt-auto select-none border-t border-black/10 bg-app px-sm pb-safe-bottom"
      style={{ color: tintColor ?? "inherit" }}
    >
      <div className="relative flex items-center py-xs">
        {actionLeft && <div>{actionLeft}</div>}
        <AnimatePresence initial={false}>
          {description && (
            <Animate
              key={`toolbar-description-${id}`}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            >
              <p className="capitalize leading-none text-black">
                <small>{description}</small>
              </p>
            </Animate>
          )}
        </AnimatePresence>
        {actionRight && <div className="ml-auto">{actionRight}</div>}
      </div>
    </div>
  );
};

export default Toolbar;
