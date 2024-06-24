import clsx from "clsx";
import { HeartIcon, ShoppingBasketIcon } from "lucide-react";
import {
  FC,
  HTMLAttributes,
  PropsWithChildren,
  ReactNode,
  useRef,
} from "react";
import { cn } from "../../utils";
import { gsap, useGSAP } from "../../utils/gsap";

const Notification: FC<
  { title: string; imgSrc: string; icon: ReactNode } & PropsWithChildren &
    HTMLAttributes<HTMLDivElement>
> = ({ title, imgSrc, children, className, icon, ...rest }) => {
  return (
    <div
      className={cn(
        "notification absolute bg-primary dark:bg-secondary drop-shadow-2xl flex items-center gap-3 p-3 rounded-3xl w-52",
        className,
      )}
      {...rest}
    >
      <img
        src={imgSrc}
        className="w-10 h-10"
        style={{ clipPath: "circle()" }}
      />
      <p className="text-sm">
        <span>
          <strong>{title}</strong>
        </span>{" "}
        <span className="text-neutral-400">{children}</span>
      </p>
      <div className="absolute -top-1 right-1 bg-primary dark:bg-secondary drop-shadow-md p-1 rounded-full">
        {icon}
      </div>
    </div>
  );
};

const SectionTwo: FC<{ timeline?: gsap.core.Timeline }> = () => {
  const container = useRef<HTMLDivElement>(null);
  const bottle = useRef<HTMLDivElement>(null);

  const { contextSafe } = useGSAP(
    () => {
      container.current?.addEventListener("mousemove", zoomHandler);
      container.current?.addEventListener("mouseleave", zoomExitHandler);

      return () => {
        container.current?.removeEventListener("mousemove", zoomHandler);
        container.current?.removeEventListener("mouseleave", zoomExitHandler);
      };
    },
    { scope: container },
  );

  const zoomHandler = contextSafe((event: MouseEvent) => {
    gsap.to(bottle.current, {
      x: event.clientX - window.innerWidth / 2,
      y: event.clientY - window.innerHeight / 2,
      scale: 1.15,
      rotate: 5,
      duration: 1,
    });
  });

  const zoomExitHandler = contextSafe(() => {
    gsap.to(bottle.current, {
      x: 0,
      y: 0,
      scale: 1,
      rotate: 0,
      duration: 1,
    });
  });

  return (
    <div
      ref={container}
      id="bottle-container"
      className={clsx(
        "bg-gradient-to-t from-[#919ea4] to-[#6f7a7d] dark:from-[#6f7a7d] dark:to-[#919ea4]",
        "rounded-tl-full rounded-tr-full relative h-screen max-h-[600px] 2xl:max-h-[700px]",
      )}
    >
      <div
        ref={bottle}
        id="bottle"
        className={clsx(
          "bg-[url('/demo-01/black-bottle.webp')] dark:bg-[url('/demo-01/white-bottle.webp')]",
          "absolute translate-y-28 h-full inset-0 bg-contain bg-no-repeat bg-center pointer-events-none",
        )}
      />
      <Notification
        title="raffi"
        imgSrc={"/demo-01/raffi.png"}
        className="top-1/3 left-full -translate-x-1/3 -translate-y-full"
        icon={<HeartIcon size={14} className="text-red-600 fill-red-600" />}
      >
        has liked this item
      </Notification>

      <Notification
        title="mary"
        imgSrc={"/demo-01/mary.jpg"}
        className="top-3/4 left-1/4 -translate-x-3/4 -translate-y-1/4"
        icon={
          <ShoppingBasketIcon
            size={14}
            className="text-teal-600 fill-teal-600"
          />
        }
      >
        has just purchased this item
      </Notification>
    </div>
  );
};

export default SectionTwo;
