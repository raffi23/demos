import { faker } from "@faker-js/faker";
import { format, isSameWeek, isToday, isYesterday } from "date-fns";
import { AnimatePresence } from "framer-motion";
import { SquarePen } from "lucide-react";
import { useState } from "react";
import ActionButton from "../ui/action-button";
import Animate from "../ui/animate";
import Content from "../ui/content";
import NavigationBar from "../ui/navigation-bar";
import Toolbar from "../ui/toolbar";

const tintColor = "#d7ac22";

type Note = {
  date: Date;
  title: string;
  content: string;
};

const formatDate = (date: Date) => {
  switch (true) {
    case isToday(date):
      return format(date, "p");
    case isYesterday(date):
      return "Yesterday";
    case isSameWeek(date, new Date()):
      return format(date, "EEEE");
    default:
      return format(date, "P");
  }
};

const Main = () => {
  const [notes, setNotes] = useState<Note[]>([]);

  const clickHandler = () => {
    setNotes((prev) => [
      ...prev,
      {
        date: new Date(),
        title: faker.word.sample(),
        content: faker.word.words({ count: 20 }),
      },
    ]);
  };

  return (
    <>
      <NavigationBar title="notes" tintColor={tintColor} />
      <Content>
        <div className="flex flex-col gap-2">
          <AnimatePresence initial={false}>
            {notes.map((note, i) => {
              return (
                <Animate
                  key={note.date.toISOString()}
                  layout="position"
                  animation="slideRightFull"
                  className="rounded-lg bg-white px-sm py-xs"
                  onClick={() =>
                    setNotes((prev) => prev.filter((_, index) => i !== index))
                  }
                >
                  <h6>{note.title}</h6>
                  <p className="leading-none text-neutral-400">
                    <small className="flex gap-2 whitespace-nowrap">
                      <span>{formatDate(note.date)}</span>
                      <span className="overflow-hidden text-ellipsis">
                        {note.content}
                      </span>
                    </small>
                  </p>
                </Animate>
              );
            })}
          </AnimatePresence>
        </div>
      </Content>
      <Toolbar
        description="96 notes"
        tintColor={tintColor}
        actionRight={<ActionButton Icon={SquarePen} onClick={clickHandler} />}
      />
    </>
  );
};

export default Main;
