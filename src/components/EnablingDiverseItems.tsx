import PrettyCode from "./PrettyCode";
import { menu } from "../data/code";

interface EnablingDiverseTypes {
  isDiverse: boolean;
  text: string;
}

const EnablingDiverseItems = ({ isDiverse, text }: EnablingDiverseTypes) => {
  const activeTitle = menu[5].title;
  const activeMenu = menu.find(({ title }) => title === activeTitle) || menu[5];

  const activeTitleOrder = menu[6].title;
  const activeMenuOrder =
    menu.find(({ title }) => title === activeTitleOrder) || menu[6];

  return (
    <div className="lg:max-w-[27.313rem] xl:max-w-[35rem] 2xl:max-w-[40.625rem] 4xl:max-w-[50.625rem] 5xl:min-w-[70.625rem]">
      {isDiverse && (
        <div>
          <h3 className="text-[1.875rem] leading-[2.375rem] lg:text-[2.875rem] lg:leading-[3.625rem] font-[300] text-[#F2F3F5] tracking-[0.125rem]">
            Enabling Diverse
          </h3>
          <h4 className="text-[1.875rem] leading-[2.375rem] lg:text-[2.875rem] lg:leading-[3.625rem] font-[700] text-[#00D448] tracking-[0.125rem]">
            Cross-Chain Interactions
          </h4>
          <h4 className="text-[1.5rem] leading-[1.875rem] lg:text-[2.5rem] lg:leading-[3.17rem] font-[700] text-[#F6F6F7] mt-[1.875rem] lg:mt-[6.25rem] tracking-[0.125rem]">
            XAccount
          </h4>
        </div>
      )}
      {!isDiverse && (
        <h4 className="text-[1.5rem] lg:text-[2.5rem] leading-[1.875rem] lg:leading-[3.17rem] font-[700] text-[#F6F6F7] mt-[1.875rem] 2xl:mt-0 tracking-[0.125rem]">
          Order Clearing (Thirdparty bridge)
        </h4>
      )}
      <p className="text-[0.875rem] leading-[1.375rem] lg:text-[1rem] lg:leading-[1.563rem] font-[300] text-[#F6F6F7] my-[1.875rem]">
        {text}
      </p>
      <PrettyCode
        code={isDiverse ? activeMenu.code : activeMenuOrder.code}
        language={isDiverse ? activeMenu.language : activeMenuOrder.language}
        className="lg:max-w-[27.313rem] xl:max-w-[40.625rem] 4xl:max-w-[50.625rem] 5xl:max-w-[70.625rem]"
      />
      <a
        href={
          isDiverse
            ? "https://msgport.ringdao.com/docs/learn/use-cases/xaccount.html"
            : "https://msgport.ringdao.com/docs/learn/use-cases/order-xclearing.html"
        }
        target="_blank"
      >
        <button className="flex items-center justify-center py-[0.438rem] bg-transparent border border-[#F2F3F5] rounded-[2.5rem] gap-[0.625rem] mt-[1.875rem] px-[0.625rem] btnHover hover:text-[#00D448] hover:border-[#00D448] text-white">
          <span className="font-[300] text-[1rem] leading-[1.563rem]">
            View use case in docs
          </span>
          <img
            src="/assets/icons/go.svg"
            alt="goArrow"
            className="w-[1.5rem] h-[1.5rem]"
          />
        </button>
      </a>
    </div>
  );
};

export default EnablingDiverseItems;
