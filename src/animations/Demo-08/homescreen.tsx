import { FC } from "react";
import { homeIcons } from "./helpers/constants";
import AppIcon from "./icon";

const HomeScreen: FC<{
  lastActiveId: string;
  onIconClick: (id: string, pathId?: string) => void;
}> = ({ lastActiveId, onIconClick }) => {
  return (
    <div
      className="grid flex-1 grid-cols-[repeat(4,auto)] grid-rows-[repeat(4,minmax(auto,5rem))] justify-between gap-y-4"
      style={{ perspective: 2000, transformStyle: "preserve-3d" }}
    >
      {homeIcons.slice(0, 24).map((app, i) => {
        return (
          <AppIcon
            key={app.id + i}
            layoutId={app.id}
            title={app.title}
            iconImage={app.imageUrl}
            style={{
              zIndex: lastActiveId === app.id ? 10 : "auto",
            }}
            onClick={() => onIconClick(app.id, app.appPathId)}
          />
        );
      })}
    </div>
  );
};

export default HomeScreen;
