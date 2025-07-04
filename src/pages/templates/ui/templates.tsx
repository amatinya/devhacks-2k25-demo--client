import { type FC } from "react";

import { Page } from "@/widgets/page";
import { usePageTitle } from "@/shared/hooks";

const Templates: FC = () => {
  usePageTitle({ title: "Templates" });

  return (
    <Page>
      <h1>Templates</h1>
    </Page>
  );
};

export default Templates;
