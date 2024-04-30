import Container from "./Container";

const Governed = () => {
  return (
    <Container classes="flex items-center justify-between mt-[6.25rem]">
      <h2 className="text-[2.875rem] leading-[3.625rem] font-[300] text-white">
        Governed by
        <span className="text-[2.5rem] leading-[3.17rem] font-[700] text-[#FF0083] tracking-[0.125rem]">
          RingDAO
        </span>
      </h2>
      <div className="flex items-center gap-[1.25rem]">
        <p className="text-[1.5rem] italic leading-[1.902rem] text-[#F2F3F5] tracking-[0.125rem]">
          Other projects by RingDAO
        </p>
        <img
          src="/images/GovernedLogo1.png"
          alt=""
          className="w-[4.625rem] h-[4.625rem]"
        />
        <img
          src="/images/GovernedLogo2.png"
          alt=""
          className="w-[4.625rem] h-[4.625rem]"
        />
      </div>
    </Container>
  );
};

export default Governed;
