import React from "react";
import Container from "./Container";
import data from "../data/ChainFree.json";
import ChainFreeItems from "./ChainFreeItems";

const ChainFree: React.FC = () => {
  return (
    <Container classes="lg:mt-[6.25rem] bg-[url('/images/chainFreebg.png')] bg-cover bg-no-repeat lg:min-h-[106.313rem]">
      <div className="flex items-center lg:gap-[6.25rem] flex-wrap">
        {data.map((item) => (
          <ChainFreeItems key={item.id} data={item} />
        ))}
      </div>
    </Container>
  );
};

export default ChainFree;
