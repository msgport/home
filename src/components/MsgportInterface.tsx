import { useState } from "react";
import Container from "./Container";
import data from "../data/BuildMsgButtons.json";
import datamobile from "../data/BuildMsgButtonsMobile.json";

const MsgportInterface = () => {
  const [selectedItem, setSelectedItem] = useState(0);
  return (
    <Container classes="lg:flex items-center justify-between gap-[6.25rem] mt-[6.25rem] lg:mt-0">
      <div className="bg-[#000] rounded-[3.125rem] p-[1.25rem] lg:p-[3.125rem] lg:flex flex-col justify-end items-end hidden">
        <h2 className="text-[1.875rem] leading-[2.375rem] font-bold text-white">
          Msgport Interface
        </h2>
        <p className="text-[1rem] leading-[1.563rem] font-[300] text-white mb-[1.875rem] mt-[0.625rem]">
          This interface provides developers with a generic message passing
          interface to send arbitrary data between contracts on different
          blockchain networks
        </p>
        <img
          src="/images/code.png"
          alt="codescreen"
          className="w-full hidden lg:block"
        />
        <img
          src="/images/mobilecode.png"
          alt="codescreen"
          className="w-full lg:hidden block"
        />
      </div>
      <div className="flex flex-col lg:items-center lg:justify-center gap-[1.875rem] lg:w-[26.375rem]">
        <h4 className="text-[1.875rem] leading-[2.375rem] lg:text-[1.875rem] lg:leading-[2.375rem] font-[300] text-white">
          Start building with
        </h4>
        <h2 className="text-[1.875rem] leading-[2.375rem] lg:text-[3.75rem] lg:eading-[4.75rem] font-[700] text-[#00D448] tracking-[0.125rem] mt-[-1.875rem] lg:mt-0">
          Msgport
        </h2>
        <div className="lg:hidden">
          <div className="bg-[#000] rounded-[3.125rem] p-[0_1.25rem_1.25rem_1.25rem]">
            <button
              className={
                "text-[#000000] lg:text-[#2A2A2A] text-[1rem] font-[600] leading-[1.563rem] w-full rounded-[4rem] flex items-center justify-center py-[0.625rem] lg:hidden bg-[#00D448]"
              }
            >
              Msgport Interface
            </button>
            <p className="text-[1rem] leading-[1.563rem] font-[300] text-white mb-[1.875rem] mt-[0.625rem]">
              This interface provides developers with a generic message passing
              interface to send arbitrary data between contracts on different
              blockchain networks
            </p>
            <img
              src="/images/code.png"
              alt="codescreen"
              className="w-full hidden lg:block"
            />
            <img
              src="/images/mobilecode.png"
              alt="codescreen"
              className="w-full lg:hidden block"
            />
          </div>
        </div>
        {data.map((item) => {
          return (
            <button
              key={item.id}
              className={
                "text-[#000000] lg:text-[#2A2A2A] text-[1rem] font-[600] leading-[1.563rem] w-full rounded-[4rem] lg:flex items-center justify-center py-[1.063rem] hidden"
              }
              style={{
                backgroundColor:
                  selectedItem === item.id ? `${item.selected}` : `${item.bg}`,
              }}
              onClick={() => setSelectedItem(item.id)}
            >
              {item.text}
            </button>
          );
        })}
        {datamobile.map((item) => {
          return (
            <button
              key={item.id}
              className={
                "text-[#000000] lg:text-[#2A2A2A] text-[1rem] font-[600] leading-[1.563rem] w-full rounded-[4rem] flex items-center justify-center py-[1.063rem] lg:hidden"
              }
              style={{
                backgroundColor:
                  selectedItem === item.id ? `${item.selected}` : `${item.bg}`,
              }}
              onClick={() => setSelectedItem(item.id)}
            >
              {item.text}
            </button>
          );
        })}
        <button className="flex items-center justify-center py-[0.563rem] lg:py-[1.063rem] bg-transparent border border-[#F2F3F5] rounded-[2.5rem] gap-[0.625rem] w-full">
          <span className="font-[600] text-[1rem] text-white leading-[1.563rem]">
            try it now
          </span>
          <img
            src="/assets/icons/go.svg"
            alt="goArrow"
            className="w-[1.5rem] h-[1.5rem]"
          />
        </button>
      </div>
    </Container>
  );
};

export default MsgportInterface;
