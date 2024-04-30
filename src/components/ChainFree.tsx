import React from "react";
import Container from "./Container";
import data from "../data/ChainFree.json";
import ChainFreeItems from "./ChainFreeItems";
import HowItWorks from "./HowItWorks";

const ChainFree: React.FC = () => {
  return (
    <Container classes="mt-[12.5rem] lg:mt-[6.25rem] bg-[url('/images/chainFreebg.png')] bg-cover bg-no-repeat lg:min-h-[106.313rem] relative">
      <div className="flex-col lg:flex-row flex items-center gap-[1.875rem] lg:gap-[6.25rem] lg:flex-wrap">
        {data.map((item) => (
          <ChainFreeItems key={item.id} data={item} />
        ))}
      </div>
      <div className="w-full flex justify-end mt-[9.375rem] lg:mt-0">
        <img
          src="/images/chain.png"
          alt=""
          className="lg:w-[52.688rem] lg:h-[46.438rem]"
        />
      </div>
      <HowItWorks />
    </Container>
  );
};

export default ChainFree;
