import { useGSAP } from "@gsap/react";
import { FC } from "react";
import { gsap } from "../../utils/gsap";

const images = [
  { title: "Mango", bg: "#cca549" },
  { title: "Guava", bg: "#ed6a52" },
  { title: "Cherry", bg: "#a02c3f" },
];

const Section: FC<{ image: (typeof images)[0]; index: number }> = ({
  image,
  index,
}) => {
  return (
    <div
      id={`section-${index}`}
      className="bg-black section absolute top-0 left-0 w-full h-full grid grid-cols-2 overflow-hidden"
    >
      <div className="flex justify-center items-center text-white">
        <div id={`text-container-${index}`} className="max-w-sm space-y-4">
          <h1 id={`text-${index}`} className="text-8xl flex">
            {image.title.split("").map((char, index) => {
              return (
                <span key={char + index} className="char block">
                  {char}
                </span>
              );
            })}
          </h1>
          <p className="text-lg">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta
            praesentium enim et possimus temporibus ut debitis eos iste quae
            voluptate.
          </p>
          <div className="flex gap-6">
            <button className="border border-white rounded-3xl px-6 h-9">
              Order Now
            </button>
          </div>
        </div>
      </div>
      <div>
        <div id="image-wrapper" className="relative w-full h-full">
          <img
            id={`bottle-${index}`}
            className="w-[40%] absolute top-1/4 left-1/2 -translate-x-1/2 z-30"
            src={`/demo-04/fruit-${index + 1}-0.png`}
            alt=""
          />
          <img
            className={`w-[40%] absolute top-[400px] -left-[70px] z-20 fruit-${index}`}
            src={`/demo-04/fruit-${index + 1}-1.png`}
            alt=""
          />
          <img
            className={`w-[35%] absolute top-[150px] -left-[50px] z-20 fruit-${index}`}
            src={`/demo-04/fruit-${index + 1}-1.png`}
            alt=""
          />
          <img
            className={`w-[30%] absolute top-0 left-1/2 -translate-x-1/2 z-20 fruit-${index}`}
            src={`/demo-04/fruit-${index + 1}-1.png`}
            alt=""
          />
          <img
            className={`w-[35%] absolute top-[150px] right-0 z-20 fruit-${index}`}
            src={`/demo-04/fruit-${index + 1}-1.png`}
            alt=""
          />
          <img
            className={`w-[40%] absolute top-[450px] -right-[20px] z-20 fruit-${index}`}
            src={`/demo-04/fruit-${index + 1}-1.png`}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

const Demo04 = () => {
  useGSAP(() => {
    const sections = gsap.utils.toArray(".section");

    sections.forEach((sectionItem, index) => {
      const section = sectionItem as HTMLElement;
      gsap.set(section, { y: 400 * index });
    });

    sections.forEach((sectionItem, index) => {
      const section = sectionItem as HTMLElement;
      const ti = gsap.timeline({
        scrollTrigger: {
          trigger: "#wrapper",
          start: `+${400 * index} top`,
          end: `${400 * images.length} top`,
          toggleActions: "play none none reverse",
          pin: section,
          markers: true,
        },
      });

      ti.fromTo(
        section,
        {
          backgroundColor: images[index - 1]?.bg ?? "#fff",
          clipPath: "circle(0%)",
        },
        {
          backgroundColor: images[index].bg,
          clipPath: "circle(100%)",
          duration: 1,
        },
      )
        .from(`#text-container-${index}`, {
          opacity: 0,
          yPercent: 100,
          scrollTrigger: `#text-container-${index}`,
        })
        .from(
          `#text-${index} > span`,
          {
            rotation: -90,
            scale: 0,
            opacity: 0,
            stagger: 0.1,
          },
          "<",
        )
        .from(`#bottle-${index}`, { opacity: 0, y: "100vh" })
        .fromTo(
          `.fruit-${index}`,
          { opacity: 0, y: "100vh", scale: 0, rotation: -180 },
          {
            opacity: 1,
            y: "random(-10,10)",
            scale: "random(0.7,1)",
            rotation: "random(-180,180)",
          },
        );
    });
  });

  return (
    <div>
      <div className="h-[40vh]"></div>
      <div id="wrapper" className="relative h-screen">
        {images.slice(0, 3).map((image, index) => {
          return <Section key={index} image={image} index={index} />;
        })}
      </div>
      <div className="h-[200vh]"></div>
    </div>
  );
};

export default Demo04;
