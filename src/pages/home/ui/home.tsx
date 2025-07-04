import { type FC } from "react";

import { Page } from "@/widgets/page";
import { usePageTitle } from "@/shared/hooks";

const Home: FC = () => {
  usePageTitle(undefined);

  return (
    <Page>
      {Array.from({ length: 32 }).map((_, idx) => (
        <h1 key={idx}>{"Home"}</h1>
      ))}
    </Page>
  );
};

export default Home;
