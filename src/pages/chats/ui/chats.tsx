import type { FC } from "react";

import { Page } from "@/widgets/page";
import { usePageTitle } from "@/shared/hooks";
import { Hero } from "@/widgets/hero";
import { StartChat } from "@/features/chats";

const Chats: FC = () => {
  usePageTitle({ title: "Chats" });

  return (
    <Page contentProps={{ className: "space-y-4" }}>
      <Hero
        backgroundImageSrc={"/bg-three.png"}
        title={"Chats"}
        description={
          "Converse with your AI assistant to generate documents, ask questions, or refine templates through natural language. Each chat becomes a workspace where ideas turn into structured files. It’s like having a smart editor by your side, 24/7"
        }
      >
        <StartChat />
      </Hero>
    </Page>
  );
};

export default Chats;
