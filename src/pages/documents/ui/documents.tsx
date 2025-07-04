import type { FC } from "react";

import { Page } from "@/widgets/page";
import { usePageTitle } from "@/shared/hooks";
import { Hero } from "@/widgets/hero";
import { GenerateDocument } from "@/features/documents";

const Documents: FC = () => {
  usePageTitle({ title: "Documents" });

  return (
    <Page contentProps={{ className: "space-y-4" }}>
      <Hero
        backgroundImageSrc={"/bg-two.png"}
        title={"Documents"}
        description={
          "This is where all your generated documents live. Whether it's a simple letter or a complex contract, every file created by your assistant is saved here for easy access, download, and management"
        }
      >
        <GenerateDocument />
      </Hero>
    </Page>
  );
};

export default Documents;
