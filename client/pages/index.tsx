import dynamic from "next/dynamic";
import { type ReactElement } from "react";

import { NextPageWithLayout } from "./_app";

const BasicGamePage = dynamic(
  () => import("../site/components/game/BasicGamePage"),
  { ssr: false }
);

const Home: NextPageWithLayout = (props) => {
  return <BasicGamePage {...props} />;
};

Home.getLayout = (page: ReactElement) => {
  return page;
};

export default Home;
