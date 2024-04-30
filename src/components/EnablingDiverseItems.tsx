interface EnablingDiverseTypes {
  isDiverse: boolean;
  img: string;
  text: string;
}

const EnablingDiverseItems = ({
  isDiverse,
  img,
  text,
}: EnablingDiverseTypes) => {
  return (
    <div className="lg:w-[40.625rem]">
      {isDiverse && (
        <div>
          <h3 className="text-[2.875rem] leading-[3.625rem] font-[300] text-white">
            Enabling Diverse
          </h3>
          <h4 className="text-[2.875rem] leading-[3.625rem] font-[700] text-[#00D448] tracking-[0.125rem]">
            Cross-Chain Interactions
          </h4>
          <h4 className="text-[2.5rem] leading-[3.17rem] font-[700] text-white mt-[6.25rem]">
            XAccount
          </h4>
        </div>
      )}
      {!isDiverse && (
        <h4 className="text-[2.5rem] leading-[3.17rem] font-[700] text-white">
          Order Clearing(Thirdparty bridge)
        </h4>
      )}
      <p className="text-[1rem] leading-[1.563rem] font-[300] text-white my-[1.875rem]">
        {text}
      </p>
      <img
        src={img}
        alt="enablingCodeImage"
        className="w-full object-contain"
      />
      <button className="flex items-center justify-center py-[0.438rem] bg-transparent border border-[#F2F3F5] rounded-[2.5rem] gap-[0.625rem] mt-[1.875rem] px-[0.625rem]">
        <span className="font-[300] text-[1rem] text-white leading-[1.563rem]">
          View use case in docs
        </span>
        <img
          src="/assets/icons/go.svg"
          alt="goArrow"
          className="w-[1.5rem] h-[1.5rem]"
        />
      </button>
    </div>
  );
};

export default EnablingDiverseItems;
