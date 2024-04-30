import PrettyCode from "./PrettyCode";
import { menu } from "../data/code";
import { useState } from "react";

interface EnablingDiverseTypes {
  isDiverse: boolean;
  text: string;
}

const EnablingDiverseItems = ({ isDiverse, text }: EnablingDiverseTypes) => {
  const [activeTitle, setActiveTitle] = useState(menu[2].title);
  const activeMenu = menu.find(({ title }) => title === activeTitle) || menu[2];

  return (
    <div className="lg:w-[40.625rem]">
      {isDiverse && (
        <div>
          <h3 className="text-[1.875rem] leading-[2.375rem] lg:text-[2.875rem] lg:leading-[3.625rem] font-[300] text-white">
            Enabling Diverse
          </h3>
          <h4 className="text-[1.875rem] leading-[2.375rem] lg:text-[2.875rem] lg:leading-[3.625rem] font-[700] text-[#00D448] tracking-[0.125rem]">
            Cross-Chain Interactions
          </h4>
          <h4 className="text-[1.5rem] leading-[1.875rem] lg:text-[2.5rem] lg:leading-[3.17rem] font-[700] text-white mt-[1.875rem] lg:mt-[6.25rem]">
            XAccount
          </h4>
        </div>
      )}
      {!isDiverse && (
        <h4 className="text-[1.5rem] lg:text-[2.5rem] leading-[1.875rem] lg:leading-[3.17rem] font-[700] text-white mt-[1.875rem] 2xl:mt-0">
          Order Clearing(Thirdparty bridge)
        </h4>
      )}
      <p className="text-[0.875rem] leading-[1.375rem] lg:text-[1rem] lg:leading-[1.563rem] font-[300] text-white my-[1.875rem]">
        {text}
      </p>
      <PrettyCode
        code={activeMenu.code}
        language={activeMenu.language}
        className="lg:max-w-[40.625rem]"
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
