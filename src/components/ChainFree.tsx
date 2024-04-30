import React from "react";
import Container from "./Container";
import data from "../data/ChainFree.json";
import ChainFreeItems from "./ChainFreeItems";
import HowItWorks from "./HowItWorks";

const ChainFree: React.FC = () => {
  return (
    <Container classes="mt-[12.5rem] lg:mt-[6.25rem] lg:bg-[url('/images/chainFreebg.png')] bg-contain bg-no-repeat lg:min-h-[106.313rem] relative">
      <div className="flex-col lg:flex-row flex items-center gap-[1.875rem] lg:gap-[6.25rem] lg:flex-wrap">
        {data.map((item) => (
          <ChainFreeItems key={item.id} data={item} />
        ))}
      </div>
      <div className="lg:hidden bg-[url('/images/chainFreebgMobile.png')] bg-contain w-full min-h-[20.563rem] mt-[9.375rem]"></div>
      <HowItWorks />
    </Container>
  );
};

export default ChainFree;
