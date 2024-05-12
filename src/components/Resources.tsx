import Container from "./Container";
import data from "../data/Resources.json";

const Resources = () => {
  return (
    <Container classes="mt-[6.25rem]">
      <h2 className="text-[#00D448] text-[2.875rem] leading-[3.625rem] tracking-[0.125rem] font-[700] mb-[1.875rem] lg:mb-[6.25rem]">
        Resources
      </h2>
      <div className="flex flex-col lg:flex-row gap-[1.875rem] lg:gap-[3.125rem] justify-center items-start">
        {data.map((item) => {
          return (
            <div
              className="bg-[#2A2A2A] p-[1.875rem] rounded-[1.25rem] lg:w-[19.531rem]"
              key={item.title}
            >
              <img
                src={item.logo}
                alt={item.title}
                className="w-[4.375rem] h-[4.375rem] mb-[2.5rem]"
              />
              <h3 className="text-[1.375rem] leading-[1.75rem] tracking-[0.063rem] text-[#F6F6F7] font-[700]">
                {item.title}
              </h3>
              <p className="text-[1rem] leading-[1.563rem] tracking-[0.063rem] text-[#F6F6F7] font-[300]">
                {item.desc}
              </p>
              <button className="flex items-center justify-center py-[0.438rem] bg-transparent border border-[#F2F3F5] rounded-[2.5rem] gap-[0.625rem] mt-[2.5rem] px-[0.625rem]">
                <span className="font-[600] text-[1rem] text-white leading-[1.563rem]">
                  Detail
                </span>
                <img
                  src="/assets/icons/go.svg"
                  alt="goArrow"
                  className="w-[1.5rem] h-[1.5rem]"
                />
              </button>
            </div>
          );
        })}
      </div>
    </Container>
  );
};

export default Resources;
