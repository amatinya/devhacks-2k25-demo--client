import { type FC } from "react";

import { Page } from "@/widgets/page";
import { usePageTitle } from "@/shared/hooks";

const Chats: FC = () => {
  usePageTitle({ title: "Chats" });

  return (
    <Page>
      <h1>Chats</h1>
    </Page>
  );
};

export default Chats;
