import { FC, HTMLProps, useEffect, useMemo, useRef, useState } from "react";
import { cn } from "../../utils";
import { ArrowUp } from "lucide-react";

const Header: FC<HTMLProps<HTMLElement> & { placedInFooter?: boolean }> = ({
  placedInFooter,
  className,
  ...rest
}) => {
  const interval = useRef(0);
  const [time, setTime] = useState(new Date());
  const formattedTime = useMemo(() => {
    return `${time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds()}`;
  }, [time]);

  useEffect(() => {
    interval.current = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(interval.current);
    };
  }, []);
  return (
    <header
      className={cn(
        "mb-10 flex items-center justify-between px-2 py-4",
        className,
      )}
      {...rest}
    >
      <h6 className="text-xl font-normal uppercase">mone</h6>
      <p>Dubai, UAE</p>
      <p>{formattedTime}</p>
      {placedInFooter ? (
        <a href="#hero">
          <ArrowUp size={20} />
        </a>
      ) : (
        <div className="h-4 w-4 bg-black" style={{ clipPath: "circle()" }} />
      )}
    </header>
  );
};

export default Header;
