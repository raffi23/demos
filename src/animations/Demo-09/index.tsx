import { DynamicAnimationOptions, m, stagger, useAnimate } from "framer-motion";
import { useEffect } from "react";
import Footer from "./footer";
import Header from "./header";
import Hero from "./hero";
import ImageCard from "./image-card";
import Marquee from "./marquee";
import ProductCard from "./product-card";

const groupOne = [
  { title: "Textured cotton-linen t-shirt", price: 28.99 },
  { title: "Basic cotton stretch T-shirt", price: 22.99 },
  { title: "Basic lightweight cotton t-shirt", price: 21.99 },
  { title: "100% linen slim-fit t-shirt", price: 19.99 },
  { title: "Basic cotton V-neck T-shirt", price: 24.99 },
  { title: "Basic cotton stretch T-shirt", price: 22.99 },
];

const groupTwo = [
  { title: "Zipper cotton sweater", price: 40.99 },
  { title: "Zipper cotton sweater", price: 40.99 },
  { title: "Cotton polo sweatshirt", price: 38.99 },
  { title: "Lightweight cotton sweatshirt", price: 29.99 },
  { title: "Patch cotton sweatshirt", price: 32.99 },
  { title: "Hoodie cotton sweatshirt", price: 29.99 },
];

const transition: DynamicAnimationOptions = {
  type: "spring",
  bounce: 0,
  duration: 0.35,
};

const Demo09 = () => {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate([
      [
        "#text-1",
        { marginLeft: [0, "40%"], opacity: [0, 1] },
        { delay: stagger(0.25), ...transition },
      ],
      [
        "#text-2",
        { marginLeft: [0, "80%"], opacity: [0, 1] },
        { delay: stagger(0.25), ...transition },
      ],
      [
        "#hero-title span",
        { rotate: [-180, 0], y: [100, 0], opacity: [0, 1] },
        { delay: stagger(0.25), ...transition, duration: 0.75 },
      ],
      ["#hero-barcode", { opacity: [0, 1] }, { ease: "linear", ...transition }],
      [
        "#hero-line, #hero-below-line",
        { y: [100, 0], opacity: [0, 1] },
        transition,
      ],
      ["#cards", { y: [100, 0], opacity: [0, 1] }, transition],
    ]);
  }, [animate]);

  return (
    <div ref={scope} className="mx-auto max-w-screen-xl">
      <Header />
      <Hero />
      <div id="cards" className="mb-10 grid grid-cols-2 gap-1 px-2">
        <div className="col-span-2 aspect-video">
          <ImageCard src="/demo-09/card-1.webp" />
        </div>
        <ImageCard src="/demo-09/card-2.webp" />
        <ImageCard src="/demo-09/card-3.webp" />
      </div>
      <Marquee text={"Basic Cotton Shirts"} />
      <div className="grid grid-cols-2 gap-1 px-2 md:grid-cols-3">
        {groupOne.map((product, i) => (
          <ProductCard
            key={i}
            title={product.title}
            price={product.price}
            imagePath={`/demo-09/product-${i + 1}.webp`}
          />
        ))}
      </div>
      <div className="mb-40">
        <Marquee text={"Sweatshirts"} />
        <div className="grid grid-cols-2 gap-1 px-2 md:grid-cols-3">
          {groupTwo.map((product, i) => (
            <ProductCard
              key={i}
              title={product.title}
              price={product.price}
              imagePath={`/demo-09/product-${i + 7}.webp`}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Demo09;
