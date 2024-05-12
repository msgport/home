import data from "../data/RollingLogo.json";

const RollingLogos = () => {
  return (
    <div className="w-full py-[1.875rem] lg:py-[2.5rem] mt-[6.25rem] lg:mt-0">
      <div className="flex overflow-hidden space-x-[3.75rem] lg:space-x-[5rem]">
        <div className="flex space-x-16 animate-loop-scroll">
          {data.map((item, index) => {
            return (
              <img
                src={item.src}
                alt={item.alt}
                key={index}
                className="max-w-none object-contain w-[10.875rem] lg:w-[13.188rem]"
              />
            );
          })}
        </div>
        <div className="flex space-x-16 animate-loop-scroll" aria-hidden="true">
          {data.map((item, index) => {
            return (
              <img
                src={item.src}
                alt={item.alt}
                key={index}
                className="max-w-none object-contain w-[10.875rem] lg:w-[13.188rem]"
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default RollingLogos;
