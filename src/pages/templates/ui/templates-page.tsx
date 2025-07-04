import type { FC } from "react";

import { Page } from "@/widgets/page";
import { usePageTitle } from "@/shared/hooks";
import { Hero } from "@/widgets/hero";
import { UploadTemplate } from "@/features/templates";

import Templates from "./templates";

const TemplatesPage: FC = () => {
  usePageTitle({ title: "Templates" });

  return (
    <Page contentProps={{ className: "space-y-4" }}>
      <Hero
        title={"Templates"}
        backgroundImageSrc={"/bg-one.png"}
        description={
          "Templates are the foundation of your documents. Upload or create reusable formats with variables, ready to be filled by your AI assistant. Design once, and generate consistent, professional documents every time"
        }
      >
        <UploadTemplate />
      </Hero>
      <Templates />
    </Page>
  );
};

export default TemplatesPage;
