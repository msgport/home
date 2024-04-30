import Container from "./Container";

const Hero = () => {
  return (
    <Container classes='bg-[url("/images/heroBG.png")] bg-cover lg:relative min-h-[44.188rem] lg:min-h-[59.75rem]'>
      <img
        src="/images/hero1.png"
        alt="heroimage"
        className="lg:w-[56.25rem] lg:h-[32.813rem] absolute top-[6.25rem] right-[6.25rem]"
      />
      <div className="lg:w-[51.688rem] lg:h-[22.188rem] lg:absolute lg:top-[28.125rem] lg:right-[42.063rem]">
        <h4 className="text-[#fff] lg:text-[3.75rem] font-[300] lg:leading-[4.755rem] lg:tracking-[0.125rem]">
          Programmable
        </h4>
        <h1 className="text-[#00D448] lg:text-[5.625rem] font-bold lg:leading-[5.625rem] lg:tracking-[0.125rem] italic">
          Cross-Chain Messaging Port
        </h1>
        <button className="flex items-center pr-[0.625rem] pl-[0.938rem] py-[1.094rem] bg-transparent border border-[#F2F3F5] rounded-[2.5rem] gap-[0.625rem] mt-[1.25rem]">
          <span className="font-[500] text-[1.25rem] text-white">
            Get Started
          </span>
          <img
            src="/assets/icons/go.svg"
            alt="goArrow"
            className="w-[1.5rem] h-[1.5rem]"
          />
        </button>
      </div>
    </Container>
  );
};

export default Hero;
