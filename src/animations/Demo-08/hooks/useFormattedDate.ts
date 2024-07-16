import { format } from "date-fns";
import { useEffect, useRef, useState } from "react";

const useFormattedDate = () => {
  const interval = useRef(0);
  const [date, setDate] = useState(new Date());
  const formattedTime = format(date, "h:mm");
  const formattedDay = format(date, "E d");

  useEffect(() => {
    interval.current = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => {
      clearTimeout(interval.current);
    };
  }, []);

  return { formattedTime, formattedDay };
};

export default useFormattedDate;
