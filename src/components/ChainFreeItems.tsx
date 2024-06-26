import React from "react";

interface ChainFreeItem {
  id: number;
  greenTitle: string;
  whiteTitle: string;
  desc: string;
  icon: string;
}

interface ChainFreeItemsProps {
  data: ChainFreeItem;
}

const ChainFreeItems: React.FC<ChainFreeItemsProps> = ({ data }) => {
  return (
    <div className="lg:w-[27.313rem] 2xl:w-[38rem] 3xl:w-[40.625rem] 2xl:h-[17.688rem] 4xl:w-[50.625rem] 5xl:w-[70.625rem]">
      <img
        src={data.icon}
        alt={data.greenTitle}
        className="w-[3.75rem] h-[3.75rem]"
      />
      <div className="2xl:flex items-center border-b border-b-[#6F6F6F] lg:mb-[1.25rem] gap-[0.625rem] mt-[1.25rem] lg:mt-0">
        <h3 className="text-[1.875rem] leading-[2.375rem] lg:text-[2.875rem] lg:leading-[3.625rem] font-[700] text-[#00D448] lg:py-[1.25rem] tracking-[0.125rem]">
          {data.greenTitle}
        </h3>
        <h4 className="text-[1.875rem] leading-[2.375rem] lg:text-[2.875rem] lg:leading-[3.625rem] font-[300] text-white pb-[1.25rem] lg:pb-0 tracking-[0.125rem]">
          {data.whiteTitle}
        </h4>
      </div>
      <p className="text-[1rem] leading-[1.563rem] font-[300] text-white mt-[1.25rem] lg:mt-0 tracking-[0.063rem]">
        {data.desc}
      </p>
    </div>
  );
};

export default ChainFreeItems;
