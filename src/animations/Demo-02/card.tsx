import { FC, HTMLAttributes, PropsWithChildren } from "react";
import Button from "./button";
import { cn } from "../../utils";

interface Props extends PropsWithChildren {
  title: string;
  imagePath: string;
  tint: string;
}

const Card: FC<Props & HTMLAttributes<HTMLDivElement>> = ({
  title,
  imagePath,
  tint,
  children,
  className,
  style,
  ...rest
}) => {
  return (
    <div
      className={cn(
        "card grid grid-cols-2 rounded-[3rem] p-20 py-10 saturate-[1.15]",
        className,
      )}
      style={{
        backgroundColor: tint,
        ...style,
      }}
      {...rest}
    >
      <div className="flex flex-col items-start my-auto h-fit">
        <h2
          className="xl:text-6xl 2xl:text-8xl pb-2 mb-4 max-w-2xl whitespace-pre-wrap bg-black/70 font-medium"
          style={{
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          {title}
        </h2>
        <p className="text-lg mb-8 max-w-[30rem]">{children}</p>
        <div className="flex gap-3">
          <Button variant="primary">Test Drive Now</Button>
          <Button variant="secondary">Learn More</Button>
        </div>
      </div>
      <div className="h-full flex justify-center items-center">
        <img src={imagePath} />
      </div>
    </div>
  );
};

export default Card;
