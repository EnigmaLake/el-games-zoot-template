import dynamic from "next/dynamic";

const BasicGamePage = dynamic(
  () => import("../../site/components/game/BasicGamePage"),
  { ssr: false }
);

const GamePage: NextPageWithLayout = () => {
  return <BasicGamePage />;
};

export default GamePage;
