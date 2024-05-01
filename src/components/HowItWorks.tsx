const HowItWorks = () => {
  return (
    <div className="lg:absolute lg:top-[57rem] 2xl:top-[77.5rem]">
      <h2 className="text-[1.875rem] leading-[2.375rem] lg:text-[4.375rem] lg:leading-[5.544rem] font-[300] text-white tracking-[0.125rem]">
        How It
        <span className="text-[1.875rem] leading-[2.375rem] lg:text-[4.375rem] lg:leading-[5.544rem] font-[700] text-[#00D448] ">
          works
        </span>
      </h2>
      <div className="mt-[1.875rem] lg:mt-0 lg:flex items-center gap-[6.25rem] lg:bg-[#0d150fb3] w-full">
        <div className="relative pl-[1.875rem] lg:w-[30.625rem]">
          <img
            src="/assets/icons/green.svg"
            alt="green"
            className="absolute top-0 left-0"
          />
          <p className="text-[1rem] leading-[1.563rem] font-[300] text-white mb-[1.875rem]">
            To provide DApps with a simple and consistent chain-free capability,
            extensive foundational infrastructure is required
          </p>
          <p className="text-[1rem] leading-[1.563rem] font-[300] text-white ">
            Various messaging protocols cater to different needs, each with
            distinct considerations for security and cost, and built on unique
            technologies
          </p>
        </div>
        <div className="mt-[1.875rem] lg:mt-0 relative pl-[1.875rem] lg:w-[30.625rem]">
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
