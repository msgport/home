import Container from "./Container";

const Footer = () => {
  return (
    <Container classes="flex items-center justify-between mt-[3.125rem] py-[2.688rem]">
      <p className="font-[300] text-[1rem] leading-[1.563rem] text-[#F2F3F5]">
        @ 2024 Msgport
      </p>
      <div className="flex items-center gap-[1.875rem]">
        <img src="/assets/icons/x.svg" alt="x" />
        <img src="/assets/icons/telegram.svg" alt="telegram" />
        <img src="/assets/icons/github.svg" alt="github" />
      </div>
    </Container>
  );
};

export default Footer;
