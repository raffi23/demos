import {
  motion,
  useAnimate,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import Carousel from "./carousel";
import Slider from "./slider";
import TV from "./tv";
import BuyButton from "./buy-button";

const items = [
  "https://unsplash.com/photos/qowyMze7jqg/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTF8fHNvY2NlcnxlbnwwfDB8fHwxNzIwMzc1MDMyfDA&force=true&w=1920",
  "https://unsplash.com/photos/6dRiUBjRvsM/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTZ8fHNvY2NlcnxlbnwwfDB8fHwxNzIwMzc1MDMyfDA&force=true&w=1920",
  "https://unsplash.com/photos/Y__ZYcowSo0/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8NTV8fGZvcm11bGElMjAxfGVufDB8MHx8fDE3MjA0MjAxMjR8MA&force=true&w=1920",
  "https://unsplash.com/photos/f-Mt4BeNjiI/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8NzR8fG5iYXxlbnwwfDB8fHwxNzIwMzc1MTc1fDA&force=true&w=1920",
  "https://unsplash.com/photos/VqaMuiWkCw4/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTJ8fGZvcm11bGElMjAxfGVufDB8fHx8MTcyMDQyMDA3N3ww&force=true&w=1920",
];

const Demo06 = () => {
  const [scope] = useAnimate<HTMLDivElement>();
  const { scrollYProgress } = useScroll({
    target: scope,
    offset: ["start start", "end start"],
    smooth: 1,
  });
  const scrollProgress = useSpring(scrollYProgress, {
    bounce: 0,
  });
  const top = useTransform(scrollProgress, [0, 0.25], ["0%", "5%"]);

  return (
    <div className="bg-black text-white">
      <TV />
      <div ref={scope} id="container" className="h-[175vh]">
        <motion.div className="sticky flex flex-col gap-6" style={{ top }}>
          <Carousel scrollYProgress={scrollProgress} carouselItems={items} />
          <Slider
            scrollYProgress={scrollProgress}
            sliderItems={items}
            direction="right"
            range={[0.05, 1]}
          />
          <Slider
            scrollYProgress={scrollProgress}
            sliderItems={items}
            direction="left"
            range={[0.05, 1]}
          />
        </motion.div>
      </div>
      <BuyButton />
    </div>
  );
};

export default Demo06;
