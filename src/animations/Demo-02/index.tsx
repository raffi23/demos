import clsx from "clsx";
import { FC, forwardRef, useRef, useState } from "react";
import { gsap, useGSAP } from "../../utils/gsap";
import Button from "./button";
import Card from "./card";

const cards = [
  {
    title: "Mclaren P1",
    description:
      "The McLaren P1 is a pinnacle of automotive engineering, with a hybrid powertrain producing 903 horsepower. It accelerates from 0 to 100 km/h in just 2.8 seconds, delivering an exhilarating experience. Built in limited numbers, it sets new standards for supercars.",
    imagePath: "/demo-02/mclaren.webp",
    tint: "#f3b280",
  },
  {
    title: "Prosche\nGT3 RS",
    description:
      "The Porsche 911 GT3 RS is a track-focused marvel, with a naturally aspirated engine delivering 520 horsepower. It accelerates from 0 to 100 km/h in just 3.0 seconds, offering precision handling and unmatched driving thrills.",
    imagePath: "/demo-02/porsche.png",
    tint: "#acacb5",
  },
  {
    title: "Lamborghini Aventador",
    description:
      "The Lamborghini Aventador is a pinnacle of automotive design and performance. With its iconic styling and powerful V12 engine, it offers an exhilarating driving experience. The Aventador's aggressive looks and blistering performance make it a true supercar icon.",
    imagePath: "/demo-02/lambo.webp",
    tint: "#cd7b78",
  },
  {
    title: "Pagani Huayra",
    description:
      "The Pagani Huayra is a pinnacle of automotive art and engineering. With a 730-horsepower twin-turbo V12 engine, carbon-titanium body, and luxurious interior, it's a masterpiece of performance and design, tailor-made for enthusiasts and collectors.",
    imagePath: "/demo-02/pagani.webp",
    tint: "#f6d055",
  },
];

const buttons = [
  "Mclaren P1",
  "Prosche 911 GT3 RS",
  "Lamborghini Aventador",
  "Pagani Huayra",
];

const Cards = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <div
      id="cards"
      ref={ref}
      className="grid gap gap-6 h-1/2"
      style={{
        gridTemplateAreas: "'stack'",
      }}
    >
      {cards.map(({ title, description, imagePath, tint }, index) => {
        return (
          <Card
            key={index}
            id={`card-${index}`}
            title={title}
            imagePath={imagePath}
            tint={tint}
            style={{
              marginTop: index * 40,
              gridArea: "stack",
            }}
            className="origin-[50%_0%]"
          >
            {description}
          </Card>
        );
      })}
    </div>
  );
});

const Buttons: FC<{ active: number; onClick: (index: number) => void }> = ({
  active,
  onClick,
}) => {
  return (
    <div id="buttons" className="flex gap-4 justify-center">
      {buttons.map((title, index) => (
        <Button
          key={index}
          variant="tab"
          className={clsx(active === index && "border-black", "button")}
          onClick={() => onClick(index)}
        >
          {title}
        </Button>
      ))}
    </div>
  );
};

const DemoTwo = () => {
  const [active, setActive] = useState(0);
  const timeline = useRef<gsap.core.Timeline>();
  const timeline2 = useRef<gsap.core.Timeline>();

  const { contextSafe } = useGSAP(() => {
    gsap.to("#hint", {
      yoyo: true,
      repeat: -1,
      ease: "power1",
      y: "random(-20,20)",
      opacity: "random(0.5,1)",
      duration: 1,
    });

    timeline2.current = gsap
      .timeline({
        scrollTrigger: {
          trigger: "#container",
          start: "top top",
          toggleActions: "play none none reverse",
        },
      })
      .from(".button", {
        stagger: 0.1,
        y: 100,
        rotation: 10,
        opacity: 0,
      })
      .from("#cards", { opacity: 0 });

    timeline.current = gsap.timeline({
      scrollTrigger: {
        trigger: "#container",
        start: "top top",
        end: "bottom -=25%",
        scrub: 3,
        pin: true,
      },
    });

    const cards = gsap.utils.toArray(".card");
    cards.forEach((card, index) => {
      const element = card as HTMLDivElement;
      const previous = cards[index - 1] as HTMLDivElement;

      timeline.current
        ?.from(element, {
          y: index === 0 ? 0 : "100vh",
          onStart: function () {
            setActive(index);
          },
          onReverseComplete: function () {
            const prev = index - 1;
            if (prev < 0) return;
            setActive(prev);
          },
        })
        .addLabel(`card-${index}`);

      timeline.current?.to(
        previous ?? element,
        { scale: previous ? 1 - (cards.length - index) / 18 : 1 },
        `card-${index + 1}-=0.2`,
      );
    });
  });

  const clickHandler = contextSafe((index: number) => {
    if (!timeline.current?.scrollTrigger) return;
    gsap.to(window, {
      scrollTo: timeline.current.scrollTrigger.labelToScroll(`card-${index}`),
    });
  });

  return (
    <div className="px-20">
      <div className="h-[40vh] flex flex-col justify-center items-center">
        <h1 id="hint" className="text-4xl">
          ↕️👇🏻
        </h1>
      </div>
      <div className="max-w-[1669px] mx-auto">
        <div
          id="container"
          className="h-screen flex flex-col justify-center gap-12"
        >
          <Buttons active={active} onClick={clickHandler} />
          <Cards />
        </div>
      </div>
      <div className="h-[40vh]"></div>
    </div>
  );
};

export default DemoTwo;
