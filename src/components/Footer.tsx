import Container from "./Container";

const Footer = () => {
  return (
    <Container classes="flex items-center justify-between mt-[3.125rem] py-[2.688rem]">
      <p className="font-[300] text-[0.875rem] leading-[1.375rem] lg:text-[1rem] lg:leading-[1.563rem] text-[#F2F3F5]">
        @ 2024 Msgport
      </p>
      <div className="flex items-center gap-[1.25rem] lg:gap-[1.875rem]">
        <a href="" target="_blank" className="hidden">
          <img src="/assets/icons/x.svg" alt="x" />
        </a>
        <a href=" https://t.me/msgport" target="_blank">
          <img src="/assets/icons/telegram.svg" alt="telegram" />
        </a>
        <a href="https://github.com/msgport" target="_blank">
          <img src="/assets/icons/github.svg" alt="github" />
        </a>
      </div>
    </Container>
  );
};

export default Footer;
