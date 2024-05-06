import Container from "./Container";

const Governed = () => {
  return (
    <Container classes="flex flex-col lg:flex-row items-center justify-between mt-[6.25rem]">
      <h2 className="text-[1rem] leading-[1.563rem] lg:text-[2.875rem] lg:leading-[3.625rem] font-[300] text-white">
        Governed by
        <span className="text-[1rem] leading-[1.563rem] lg:block 3xl:inline lg:text-[2.5rem] lg:leading-[3.17rem] font-[700] text-[#FF0083] tracking-[0.125rem]">
          RingDAO
        </span>
      </h2>
      <div className="flex flex-col lg:flex-row items-center gap-[1.25rem]">
        <p className="text-[0.875rem] leading-[1.4rem] lg:text-[1.5rem] italic lg:leading-[1.902rem] text-[#F2F3F5] tracking-[0.125rem] opacity-50">
          Other projects by RingDAO
        </p>
        <div className="flex gap-[1.875rem]">
          <img
            src="/images/GovernedLogo1.png"
            alt=""
            className="w-[2.75rem] h-[2.75rem] lg:w-[4.625rem] lg:h-[4.625rem]"
          />
          <img
            src="/images/GovernedLogo2.png"
            alt=""
            className="w-[2.75rem] h-[2.75rem] lg:w-[4.625rem] lg:h-[4.625rem]"
          />
        </div>
      </div>
    </Container>
  );
};

export default Governed;
