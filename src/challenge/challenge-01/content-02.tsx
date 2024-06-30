const Content02 = () => {
  return (
    <div
      id="content-02"
      className="flex items-center justify-center h-80 rounded-3xl overflow-hidden text-sm px-[6.25rem] relative"
    >
      <img
        id="image-01"
        src="/challenges/01/300sl-2.webp"
        className="absolute -z-10 brightness-[20%]"
      />
      <div className="grid grid-cols-[0.5fr_1.5fr] gap-10">
        <p className="text-end text-white">About us</p>
        <p className="text-[#7c7c7c]">
          Over <span className="span-white">3 million</span> free
          <span className="span-white"> high-resolution</span> images brought to
          you by the world's most generous community of{" "}
          <span className="span-white">photographers</span>.
        </p>
      </div>
    </div>
  );
};

export default Content02;
