import { useEffect, useState, type ReactElement } from "react";

import { NextPageWithLayout } from "./_app";
import GamePage from "./game";

const Home: NextPageWithLayout = (props) => {
  const [shouldRenderClient, setShouldRenderClient] = useState(false);
  useEffect(() => setShouldRenderClient(true), []);

  return shouldRenderClient ? <GamePage {...props} /> : null;
};

Home.getLayout = (page: ReactElement) => {
  return page;
};

export default Home;
