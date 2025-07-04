import { type FC } from "react";

import { Page } from "@/widgets/page";
import { usePageTitle } from "@/shared/hooks";

const Documents: FC = () => {
  usePageTitle({ title: "Documents" });

  return (
    <Page>
      <h1>Docs</h1>
    </Page>
  );
};

export default Documents;
