const Hero = () => {
  return (
    <section id="hero" className="mb-4 flex flex-col gap-2">
      <div className="grid grid-cols-1 px-2 md:grid-cols-[3fr_1fr] md:gap-10">
        <div className="flex flex-col gap-5">
          <div id="text-1" className="ml-[24vw] text-xs">
            <p>With High</p>
            <p>Quality Materials.</p>
          </div>
          <div id="text-2" className="ml-auto whitespace-nowrap text-xs">
            <p>Simple and</p>
            <p>Elegant Design.</p>
          </div>
          <h1
            id="hero-title"
            className="flex text-[length:22vw] uppercase leading-none xl:text-[length:21rem]"
          >
            {"ainos".split("").map((char) => (
              <span key={char}>{char}</span>
            ))}
            <span className="mb-auto text-base">®</span>
          </h1>
        </div>
        <div className="hidden md:block" id="hero-barcode">
          <img
            className="h-20 w-full object-contain contrast-200"
            src="/demo-09/barcode.png"
          />
        </div>
      </div>
      <hr id="hero-line" />
      <div
        id="hero-below-line"
        className="flex justify-between px-2 text-[7px] uppercase"
      >
        <div>
          <p>sense of pose</p>
          <p>and a graceful, presence</p>
        </div>
        <div className="text-neutral-400">
          <p>Unveil a world where each piece is a narrative,</p>
          <p>a manifestation of personal style, and an ode to individuality</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
