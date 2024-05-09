const HowItWorks = () => {
  return (
    <div className="lg:absolute lg:top-[86rem] 2xl:top-[77.5rem]">
      <div className="flex items-center gap-[0.6rem]">
        <h2 className="text-[1.875rem] leading-[2.375rem] lg:text-[4.375rem] lg:leading-[5.544rem] font-[300] text-white tracking-[0.125rem]">
          How It
        </h2>
        <span className="text-[1.875rem] leading-[2.375rem] lg:text-[4.375rem] lg:leading-[5.544rem] font-[700] text-[#00D448] tracking-[0.125rem]">
          works
        </span>
      </div>
      <div className="mt-[1.875rem] 3xl:mt-0 4xl:mt-[3.125rem] lg:flex lg:gap-[3.125rem] 3xl:gap-[6.25rem] gap-[6.25rem] lg:bg-[#0d150fb3] w-full">
        <div className="relative pl-[1.875rem] lg:w-[27.313rem] 3xl:w-[30.625rem] 5xl:w-[48.125rem]">
          <img
            src="/assets/icons/green.svg"
            alt="green"
            className="absolute top-0 left-0"
          />
          <p className="text-[1rem] leading-[1.563rem] font-[300] text-[#F6F6F7] mb-[1.875rem] tracking-[0.063rem]">
            To provide DApps with a simple and consistent chain-free capability,
            extensive foundational infrastructure is required
          </p>
          <p className="text-[1rem] leading-[1.563rem] font-[300] text-[#F6F6F7] tracking-[0.063rem]">
            Various messaging protocols cater to different needs, each with
            distinct considerations for security and cost, and built on unique
            technologies
          </p>
        </div>
        <div className="mt-[1.875rem] lg:mt-0 relative pl-[1.875rem] lg:w-[27.313rem] 3xl:w-[30.625rem] 5xl:w-[48.125rem]">
          <img
            src="/assets/icons/green.svg"
            alt="green"
            className="absolute top-0 left-0"
          />
          <p className="text-[1rem] leading-[1.563rem] font-[300] text-white ">
            This complex yet orderly system demands significant integration and
            infrastructure development
          </p>
          <p className="text-[1rem] leading-[1.563rem] font-[300] text-white my-[1.875rem]">
            owever, DApp developers no longer need to worry about these
            underlying protocols
          </p>
          <p className="text-[1rem] leading-[1.563rem] font-[300] text-white ">
            With Msgport service layer, direct usage is simplified, while the
            Darwinia open-source community handle the intricate integration and
            construction efforts
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
