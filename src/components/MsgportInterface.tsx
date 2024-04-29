import React from "react";
import Container from "./Container";

const MsgportInterface = () => {
  return (
    <Container classes="flex items-center justify-between lg:mt-[6.25rem]">
      <div className="bg-[#000] rounded-[3.125rem] p-[3.125rem] flex flex-col justify-end items-end">
        <h2 className="text-[1.875rem] leading-[2.375rem] font-bold text-white">
          Msgport Interface
        </h2>
        <p className="text-[1rem] leading-[1.563rem] font-[300] text-white mb-[1.875rem] mt-[0.625rem]">
          This interface provides developers with a generic message passing
          interface to send arbitrary data between contracts on different
          blockchain networks
        </p>
        <img src="/images/code.png" alt="codescreen" className="w-full" />
      </div>
      <div></div>
    </Container>
  );
};

export default MsgportInterface;
