import React from "react";
import Container from "./Container";

const Header = () => {
  return (
    <Container classes="flex items-center justify-between lg:py-[2.313rem] ">
      <img
        src="/images/logo.png"
        alt="msglogo"
        className="lg:w-[10.688rem] lg:h-[3.438rem]"
      />
      <div className="lg:gap-[2.5rem] flex items-center">
        <a
          href=""
          className="text-white text-[1rem] font-[600] leading-[1.563rem]"
        >
          Learn
        </a>
        <a
          href=""
          className="text-white text-[1rem] font-[600] leading-[1.563rem]"
        >
          Build
        </a>
        <a
          href=""
          className="text-white text-[1rem] font-[600] leading-[1.563rem]"
        >
          Community
        </a>
      </div>
    </Container>
  );
};

export default Header;
