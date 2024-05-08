import { useState } from "react";
import Container from "./Container";
import data from "../data/BuildMsgButtons.json";
import datamobile from "../data/BuildMsgButtonsMobile.json";
import PrettyCode from "./PrettyCode";
import { menu } from "../data/code";

const MsgportInterface = () => {
  const [selectedItem, setSelectedItem] = useState(0);
  const activeTitle = menu[0].title;
  const activeMenu = menu.find(({ title }) => title === activeTitle) || menu[0];
  return (
    <Container classes="lg:flex items-center justify-between gap-[3.125rem] lg:gap-[6.25rem] mt-[6.25rem] lg:mt-0">
      <div className="bg-[#000] rounded-[3.125rem] p-[1.25rem] lg:p-[3.125rem] lg:flex flex-col justify-end items-end hidden lg:max-w-[37.563rem] 2xl:max-w-[54.875rem] 4xl:max-w-[74.875rem] 5xl:min-w-[114.875rem]">
        <h2 className="text-[1.875rem] leading-[2.375rem] font-bold text-white">
          Msgport Interface
        </h2>
        <p className="text-[1rem] leading-[1.563rem] font-[300] text-white mb-[1.875rem] mt-[0.625rem] opacity-60">
          This interface provides developers with a generic message passing
          interface to send arbitrary data between contracts on different
          blockchain networks
        </p>

        <PrettyCode
          code={activeMenu.code}
          language={activeMenu.language}
          className="lg:max-w-[32rem] 2xl:max-w-[48.625rem] 4xl:max-w-[70rem] 5xl:min-w-[109rem]"
        />
      </div>
      <div className="flex flex-col lg:items-center lg:justify-center gap-[1.875rem] lg:w-auto xl:w-[26.375rem] lg:px-[1.25rem] 3xl:px-0 4xl:w-[26.375rem]">
        <h4 className="text-[1.875rem] leading-[2.375rem] lg:text-[1.875rem] lg:leading-[2.375rem] font-[300] text-white">
          Start building with
        </h4>
        <h2 className="text-[1.875rem] leading-[2.375rem] lg:text-[3.75rem] lg:eading-[4.75rem] font-[700] text-[#00D448] tracking-[0.125rem] mt-[-1.875rem] lg:mt-0 lg:mb-[3.125rem]">
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
            <PrettyCode
              code={activeMenu.code}
              language={activeMenu.language}
              className="lg:max-w-[48.625rem]"
            />
          </div>
        </div>
        {data.map((item) => {
          return (
            <button
              key={item.id}
              className={
                "text-[#000000] lg:text-[#2A2A2A] text-[1rem] font-[600] leading-[1.563rem] w-full rounded-[4rem] lg:flex items-center justify-center py-[1.063rem] hidden lg:px-[1.25rem] "
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
            Try it now
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
