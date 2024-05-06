import Container from "./Container";
import EnablingDiverseItems from "./EnablingDiverseItems";

const EnablingDiverse = () => {
  return (
    <Container classes="mt-[6.25rem] lg:flex lg:flex-wrap items-start justify-between">
      <EnablingDiverseItems
        text="XAccount is a component within Msgport, xAccount simplifies the user experience in executing cross-chain operations"
        isDiverse={true}
      />
      <EnablingDiverseItems
        text="By utilizing Msgport, DApp developers can facilitate efficient cross-chain order clearing and management of assets, streamlining the process of clearing orders between different blockchain networks"
        isDiverse={false}
      />
    </Container>
  );
};

export default EnablingDiverse;
