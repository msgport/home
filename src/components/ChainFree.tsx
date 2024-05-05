import React from "react";
import Container from "./Container";
import data from "../data/ChainFree.json";
import ChainFreeItems from "./ChainFreeItems";
import HowItWorks from "./HowItWorks";

const ChainFree: React.FC = () => {
  return (
    <Container classes="mt-[12.5rem] lg:mt-[6.25rem] lg:min-h-[120rem] relative lg:bg-position-custom relative">
      <div className="flex-col lg:flex-row flex items-center gap-[1.875rem] lg:gap-[3.125rem] 3xl:gap-[6.25rem] lg:flex-wrap">
        {data.map((item) => (
          <ChainFreeItems key={item.id} data={item} />
        ))}
      </div>
      <img
        src="/images/chainFreebg.png"
        alt="chainFree"
        className="absolute hidden lg:block 3xl:w-[87.438rem] 3xl:h-[87.438rem] lg:top-[30rem] 3xl:top-[20.875rem] right-0"
      />
      <div className="lg:hidden bg-[url('/images/chainFreebgMobile.png')] bg-contain w-full min-h-[20.563rem] mt-[9.375rem]"></div>
      <HowItWorks />
    </Container>
  );
};

export default ChainFree;
