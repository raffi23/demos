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
        "card grid md:grid-cols-2 rounded-[3rem] p-10 lg:p-20 py-10 saturate-[1.15]",
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
          className="text-5xl xl:text-6xl 2xl:text-8xl pb-2 mb-4 max-w-2xl whitespace-pre-wrap bg-black/70 font-medium"
          style={{
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          {title}
        </h2>
        <p className="text-lg mb-8 max-w-[30rem]">{children}</p>
        <div className="hidden gap-3 lg:flex">
          <Button variant="primary">Test Drive Now</Button>
          <Button variant="secondary">Learn More</Button>
        </div>
      </div>
      <div className="lg:h-full flex justify-center items-center mb-8 lg:mb-0">
        <img src={imagePath} />
      </div>
      <div className="flex items-start gap-3 lg:hidden">
        <Button variant="primary">Test Drive Now</Button>
        <Button variant="secondary">Learn More</Button>
      </div>
    </div>
  );
};

export default Card;
