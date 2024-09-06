import useWidth from "../hooks/useWidth";
import Container from "./Container";

const Hero = () => {
  const width = useWidth();
  return (
    <Container classes='lg:bg-[url("/images/heroBG.png")] bg-cover lg:relative mt-[6.25rem] lg:mt-0 lg:min-h-[59.75rem]'>
      {/* <img
        src="/images/hero1.png"
        alt="heroimage"
        className="w-full lg:w-[56.25rem] lg:h-[32.813rem] lg:absolute lg:top-[6.25rem] lg:right-[6.25rem] object-cover"
      /> */}
      <video
        src={width > 1200 ? "/images/hero.mp4" : "/images/hero-m.mp4"}
        autoPlay
        loop
        muted
        className="w-full lg:w-[43.813rem] 3xl:w-[56.25rem] lg:top-[3.75rem] lg:right-[3.125rem] lg:h-[25.625rem] 3xl:h-[32.813rem] lg:absolute 3xl:top-[6.25rem] 3xl:right-[6.25rem] object-cover lg:rounded-[500px] 4xl:w-[56.25rem] 5xl:w-[75rem] 5xl:h-[43.813rem]"
      ></video>

      <div className="mt-[1.875rem] 2xl:mt-0 flex items-center justify-center flex-col lg:block lg:h-[22.188rem] lg:absolute lg:top-[28.125rem] lg:left-[3.125rem] 2xl:left-[6.25rem]">
        <h4 className="text-[#fff] text-[1.25rem] leading-[1.563rem] lg:text-[3.75rem] font-[300] lg:leading-[4.755rem] tracking-[0.125rem]">
          Programmable
        </h4>
        <h1 className="text-[1.875rem] text-[#00D448] lg:text-[4.375rem] 3xl:text-[5.625rem] font-bold lg:leading-[4.375rem] 3xl:leading-[5.625rem]  tracking-[0.125rem] italic w-[20.938rem] lg:w-[42.438rem] 3xl:w-auto text-center lg:text-left lg:mt-[1.25rem]">
          CROSS-CHAIN
        </h1>
        <h1 className="text-[1.875rem] text-[#00D448] lg:text-[4.375rem] 3xl:text-[5.625rem] font-bold lg:leading-[4.375rem] 3xl:leading-[5.625rem]  tracking-[0.125rem] italic w-[20.938rem] lg:w-[42.438rem] 3xl:w-auto text-center lg:text-left mt-[-0.8rem] lg:mt-0">
          MESSAGING PORT
        </h1>
        <a
          href="https://msgport.ringdao.com/docs/index.html"
          target="_blank"
        >
          <button className="flex items-center py-[0.5rem] pr-[0.625rem] pl-[0.938rem] lg:py-[1.125rem] bg-transparent border border-[#F2F3F5] rounded-[2.5rem] gap-[0.625rem] mt-[1.25rem] hover:text-[#00D448] hover:border-[#00D448] text-white btnHover">
            <span className="font-[300] text-[1rem] lg:font-[500] lg:text-[1.25rem]">
              Get Started
            </span>
            <img
              src="/assets/icons/go.svg"
              alt="goArrow"
              className="w-[1.5rem] h-[1.5rem]"
            />
          </button>
        </a>
      </div>
    </Container>
  );
};

export default Hero;
