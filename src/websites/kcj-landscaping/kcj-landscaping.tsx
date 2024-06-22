import clsx from "clsx";
import { AnimatePresence, motion, useAnimate } from "framer-motion";
import {
  FC,
  PropsWithChildren,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import burger from "../../assets/icons/burger.png";
import location from "../../assets/icons/location.png";
import logo from "../../assets/icons/logo.webp";
import phone from "../../assets/icons/phone.png";
import icon1 from "../../assets/icons/icon-1.png";
import icon2 from "../../assets/icons/icon-2.png";
import icon3 from "../../assets/icons/icon-3.png";
import AnimateVisibility from "../../components/AnimateVisibility";
import "./styles.css";

const Banner = () => {
  return (
    <div className="flex items-center justify-around bg-[var(--color-primary)] p-2 text-[length:19px] text-white">
      <div className="flex gap-2">
        <img src={location} width={15} height={15} className="object-contain" />
        <p className="pb-1">Dubai, UAE</p>
      </div>
      <div className="flex gap-2">
        <img src={phone} width={15} height={15} className="object-contain" />
        <p className="pb-1">+971-505478110</p>
      </div>
    </div>
  );
};

const Navbar = () => (
  <div id="navbar" className="flex justify-between px-5 pt-5 mb-3">
    <img src={logo} className="h-[64.7px] object-contain" />
    <button className="cursor-pointer">
      <img src={burger} className="h-6 object-contain" />
    </button>
  </div>
);

const carouselImages = [
  "/carousel/carousel-1.webp",
  "/carousel/carousel-2.webp",
  "/carousel/carousel-3.webp",
];

const Carousel: FC<{ headingVisible?: boolean }> = ({ headingVisible }) => {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent((prev) => {
      if (prev + 1 >= carouselImages.length) {
        return 0;
      } else return prev + 1;
    });
  };

  const prev = () => {
    setCurrent((prev) => {
      if (prev - 1 < 0) {
        return carouselImages.length - 1;
      } else return prev - 1;
    });
  };

  return (
    <div id="carousel" className="mb-6">
      <ul className="flex mb-2 relative">
        <div
          id="carousel-navigation"
          className="absolute w-full h-full flex justify-between items-center px-3 z-50"
        >
          <button onClick={prev}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              className="opacity-50"
            >
              <path
                fillRule="evenodd"
                d="M12 21a9 9 0 1 0 0-18a9 9 0 0 0 0 18m1.707-11.293a1 1 0 0 0-1.414-1.414l-3 3a1 1 0 0 0 0 1.414l3 3a1 1 0 0 0 1.414-1.414L11.414 12z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <button onClick={next}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              className="opacity-50"
            >
              <path
                fillRule="evenodd"
                d="M12 21a9 9 0 1 0 0-18a9 9 0 0 0 0 18M10.293 9.707a1 1 0 1 1 1.414-1.414l3 3a1 1 0 0 1 0 1.414l-3 3a1 1 0 0 1-1.414-1.414L12.586 12z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
        <AnimatePresence mode="popLayout">
          <motion.li
            id="carousel-item"
            key={carouselImages[current]}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="h-[145.57px] w-full flex-shrink-0"
          >
            <div
              style={{ backgroundImage: `url('${carouselImages[current]}')` }}
              className="relative w-full h-full bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center gap-6"
            >
              <div
                id="carousel-overlay"
                className="absolute inset-0 opacity-0 bg-black"
              ></div>
              {headingVisible && (
                <Heading bolder id="carousel-heading">
                  Bring Life to Your
                  <br />
                  Dream Garden
                </Heading>
              )}
              <button
                id="carousel-button"
                className="font-medium uppercase bg-[var(--color-primary)] text-white w-fit text-2xl py-2 px-6 rounded-3xl opacity-0 overflow-hidden z-10"
              >
                Get a quote
              </button>
            </div>
          </motion.li>
        </AnimatePresence>
      </ul>

      <ul
        id="carousel-buttons"
        className="flex gap-4 justify-center leading-none overflow-hidden"
      >
        {carouselImages.map((_, i) => (
          <li key={i}>
            <button
              className={clsx(
                "w-3 h-3",
                current === i ? "bg-[#191919]" : "bg-[#7f7f7f]",
              )}
              style={{ clipPath: "circle()" }}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

const Heading: FC<PropsWithChildren & { bolder?: boolean; id?: string }> = ({
  children,
  bolder,
  id,
}) => {
  return (
    <motion.h4
      id={id}
      layoutId={id}
      className={clsx(
        "text-3xl text-center mx-auto font-['Nunito'] text-[var(--color-primary)]",
        bolder ? "font-extrabold" : "font-semibold",
      )}
    >
      {children}
    </motion.h4>
  );
};

const Paragraph: FC<PropsWithChildren> = ({ children }) => {
  return <p className="text-justify text-base/[26px]">{children}</p>;
};

const Content: FC<{ headingVisible: boolean }> = ({ headingVisible }) => {
  return (
    <div className="flex flex-col px-4">
      <div className="flex flex-col gap-2 mb-8">
        {headingVisible && (
          <Heading bolder id="carousel-heading">
            KCJ Landscaping – Bring Life to Your Dream Garden!
          </Heading>
        )}

        <div className="flex flex-col gap-8">
          <Paragraph>
            KCJ Landscaping LLC, the best landscape contractors in Dubai which
            has transformed several gardens into heavens through our magical
            touch since 2012. We offer{" "}
            <a className="inline-block">residential</a>{" "}
            <a className="inline-block">landscaping</a> and{" "}
            <a className="inline-block">commercial</a>{" "}
            <a className="inline-block">landscaping</a>
            services to homeowners and commercial property owners in Dubai and
            across the UAE.
          </Paragraph>

          <Paragraph>
            We are backed by a team of skillful and creative landscape
            architects, civil engineers and more dedicated professionals who
            strive hard to make the best tailor-made & fascinating designs that
            always exceed our client’s expectations!
          </Paragraph>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <div className="w-full max-w-[96%] mx-auto">
          <Heading>
            Top Rated Landscaping & Swimming Pool Company in Dubai, UAE
          </Heading>
        </div>

        <Paragraph>
          We works in line with mother nature! Our touch enhances the beauty of
          nature and adds a great aesthetic to your building. We understands our
          client’s expectation and follows it religiously. KCJ Landscaping is
          the best swimming pool & landscaping company in Dubai, Abu Dhabi,
          Sharjah & across UAE. Big or small we take care of all your
          landscaping needs inside out!
        </Paragraph>
      </div>
    </div>
  );
};

const FloatingButtons = () => {
  return (
    <div
      id="floating-buttons"
      className="fixed bottom-0 left-0 w-full px-5 pb-2 flex"
    >
      <button
        id="call-button"
        className="w-[50px] h-[50px] bg-no-repeat bg-center bg-[length:35px_35px] bg-[#2ca31d] drop-shadow-lg"
        style={{
          backgroundImage:
            "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMiAzMiI+PHBhdGggZD0iTTI3LjAxMzU1LDIzLjQ4ODU5bC0xLjc1MywxLjc1MzA1YTUuMDAxLDUuMDAxLDAsMCwxLTUuMTk5MjgsMS4xODI0M2MtMS45NzE5My0uNjkzNzItNC44NzMzNS0yLjM2NDM4LTguNDM4NDgtNS45Mjk1UzYuMzg3LDE0LjAyOCw1LjY5MzMsMTIuMDU2MTVBNS4wMDA3OCw1LjAwMDc4LDAsMCwxLDYuODc1NzMsNi44NTY4N0w4LjYyODc4LDUuMTAzNzZhMSwxLDAsMCwxLDEuNDE0MzEuMDAwMTJsMi44MjgsMi44Mjg4QTEsMSwwLDAsMSwxMi44NzEsOS4zNDY4TDExLjA2NDcsMTEuMTUzYTEuMDAzOCwxLjAwMzgsMCwwLDAtLjA4MjEsMS4zMjE3MSw0MC43NDI3OCw0MC43NDI3OCwwLDAsMCw0LjA3NjI0LDQuNTgzNzQsNDAuNzQxNDMsNDAuNzQxNDMsMCwwLDAsNC41ODM3NCw0LjA3NjIzLDEuMDAzNzksMS4wMDM3OSwwLDAsMCwxLjMyMTcxLS4wODIwOWwxLjgwNjIyLTEuODA2MjdhMSwxLDAsMCwxLDEuNDE0MTItLjAwMDEybDIuODI4OCwyLjgyOEExLjAwMDA3LDEuMDAwMDcsMCwwLDEsMjcuMDEzNTUsMjMuNDg4NTlaIiBmaWxsPSIjZmZmZmZmIi8+PC9zdmc+')",
          clipPath: "circle()",
        }}
      />

      <button
        id="whatsapp-button"
        className="bg-[#2ca31d] rounded-3xl h-[3.125rem] w-auto px-6 text-white flex items-center text-lg drop-shadow-lg ml-auto"
      >
        <svg
          id="whatsapp-icon"
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 24 24"
        >
          <path
            fill="white"
            d="M19.05 4.91A9.816 9.816 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01m-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18l-3.12.82l.83-3.04l-.2-.31a8.264 8.264 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24c2.2 0 4.27.86 5.82 2.42a8.183 8.183 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23m4.52-6.16c-.25-.12-1.47-.72-1.69-.81c-.23-.08-.39-.12-.56.12c-.17.25-.64.81-.78.97c-.14.17-.29.19-.54.06c-.25-.12-1.05-.39-1.99-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.14-.25-.02-.38.11-.51c.11-.11.25-.29.37-.43s.17-.25.25-.41c.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31c-.22.25-.86.85-.86 2.07c0 1.22.89 2.4 1.01 2.56c.12.17 1.75 2.67 4.23 3.74c.59.26 1.05.41 1.41.52c.59.19 1.13.16 1.56.1c.48-.07 1.47-.6 1.67-1.18c.21-.58.21-1.07.14-1.18s-.22-.16-.47-.28"
          />
        </svg>{" "}
        <span id="chat-text" className="overflow-hidden ml-2">
          Chat With Us
        </span>
      </button>
    </div>
  );
};

const services = [
  {
    title: "Landscape & Gardening",
    description:
      "With the best landscapers in Dubai we help you transform your space for the better.",
    icon: icon1,
  },
  {
    title: "Swimming Pool Construction",
    description:
      "We design, build and maintain swimming pools in world class in Dubai.",
    icon: icon2,
  },
  {
    title: "Building Renovation Services",
    description:
      "We do the best home and commercial space renovation services in Dubai and the UAE.",
    icon: icon3,
  },
];

const Service: FC<{
  title: string;
  description: string;
  icon: string;
}> = ({ title, description, icon }) => {
  return (
    <div className="flex gap-4 shadow p-4">
      <img src={icon} width={60} height={60} className="object-contain" />
      <div>
        <h4 className="font-medium text-lg mb-2">{title}</h4>
        <p className="text-md">{description}</p>
      </div>
    </div>
  );
};

const Services = () => {
  return (
    <div className="grid gap-4 px-4">
      <h2 className="text-2xl font-medium mb-2">Our Services</h2>
      {services.map((s, i) => (
        <Service {...s} key={i} />
      ))}
    </div>
  );
};

const KCJLandscaping = () => {
  const [scope, animate] = useAnimate();
  const [current, setCurrent] = useState(0);
  const [banner, setBanner] = useState(true);
  const [carouselHeading, setCarouselHeading] = useState(false);
  const [content, setContent] = useState(true);

  const animations = useMemo(
    () => [
      () => setBanner(false),
      () =>
        animate("#navbar", {
          paddingBottom: "0.5rem",
        }),
      () =>
        animate([
          ["#carousel-navigation", { opacity: 0 }],
          ["#carousel-buttons", { height: 0 }, { at: "<" }],
        ]),
      () =>
        animate("#carousel-item", {
          height: 450,
        }),
      () =>
        animate("#carousel-item > div", {
          backgroundImage: `url('/villa.webp')`,
          color: "#ffffff",
        }),
      () => {
        setCarouselHeading(true);
      },
      () =>
        animate("#carousel-heading", {
          color: "#ffffff",
          textShadow: "1px 1px 3px #000",
          zIndex: 10,
        }),
      () =>
        animate("#carousel-heading", {
          fontFamily: "Poppins",
          fontWeight: 600,
          letterSpacing: "0.05rem",
        }),
      () =>
        animate("#carousel-overlay", {
          opacity: 0.25,
        }),
      () =>
        animate("#carousel-button", {
          height: "auto",
          opacity: 1,
        }),
      () => setContent(false),
      () => {
        animate([
          ["#chat-text", { width: 0, marginLeft: 0 }],
          [
            "#whatsapp-icon",
            { width: 35, height: 35, margin: "0 auto" },
            { at: "<" },
          ],
        ]);
      },
      () =>
        animate([
          [
            "#whatsapp-button",
            {
              padding: 0,
              width: "3.125rem",
              lineHeight: 1,
              borderRadius: 0,
              clipPath: "circle()",
              marginLeft: 0,
              marginTop: "0.5rem",
            },
          ],
          ["#call-button", { marginLeft: "auto" }, { at: "<" }],
          [
            "#floating-buttons",
            {
              flexDirection: "column",
              alignItems: "end",
              justifyContent: "center",
              opacity: 0.8,
            },
          ],
        ]),
    ],
    [animate],
  );

  const animationHandler = useCallback(
    (event: KeyboardEvent) => {
      if (event.key !== "ArrowRight") return;
      const animation = animations[current];
      if (animation) {
        animation();
        setCurrent((prev) => (prev += 1));
      }
    },
    [current, animations],
  );

  useEffect(() => {
    window.addEventListener("keydown", animationHandler);
    return () => {
      window.removeEventListener("keydown", animationHandler);
    };
  }, [animationHandler]);

  return (
    <div
      ref={scope}
      className="font-['Poppins'] font-light relative"
      style={{}}
    >
      <AnimateVisibility visible={banner}>
        <Banner />
      </AnimateVisibility>
      <Navbar />
      <Carousel headingVisible={carouselHeading} />
      <AnimateVisibility visible={content}>
        <Content headingVisible={!carouselHeading} />
      </AnimateVisibility>
      <Services />
      <FloatingButtons />
    </div>
  );
};

export default KCJLandscaping;
