import type { FC } from "react";

import { Page } from "@/widgets/page";
import { usePageTitle } from "@/shared/hooks";
import { Prompt } from "@/widgets/prompt";

import { useStartChatMutation } from "../api";
import Greeting from "./greeting";

const Home: FC = () => {
  usePageTitle(undefined);

  const startChatMutation = useStartChatMutation();

  return (
    <Page pageProps={{ className: "flex items-center" }} contentProps={{ className: "space-y-4 " }}>
      <Greeting />
      <Prompt
        onSubmit={startChatMutation.mutate}
        className="mx-auto max-w-xl"
        isLoading={startChatMutation.isPending}
        placeholder={"How can Docbyte help you today?"}
      />
    </Page>
  );
};

export default Home;
