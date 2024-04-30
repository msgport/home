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
    <div className="lg:w-[40.625rem] lg:h-[17.688rem] ">
      <img
        src={data.icon}
        alt={data.greenTitle}
        className="w-[3.75rem] h-[3.75rem]"
      />
      <div className="lg:flex items-center border-b border-b-[#6F6F6F] lg:mb-[1.25rem] gap-[0.625rem] mt-[1.25rem] lg:mt-0">
        <h3 className="text-[1.875rem] leading-[2.375rem] lg:text-[2.875rem] lg:leading-[3.625rem] font-[700] text-[#00D448] lg:py-[1.25rem]">
          {data.greenTitle}
        </h3>
        <h4 className="text-[1.875rem] leading-[2.375rem] lg:text-[2.875rem] lg:leading-[3.625rem] font-[300] text-white pb-[1.25rem] lg:pb-0">
          {data.whiteTitle}
        </h4>
      </div>
      <p className="text-[1rem] leading-[1.563rem] font-[300] text-white mt-[1.25rem] lg:mt-0">
        {data.desc}
      </p>
    </div>
  );
};

export default ChainFreeItems;
