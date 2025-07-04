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
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis, sint, voluptatem. Ab animi at consequuntur, dicta dolorum enim expedita fugit illo nam officiis perferendis quis repellat, repellendus sint tempore unde!"
        }
      >
        <UploadTemplate />
      </Hero>
      <Templates />
    </Page>
  );
};

export default TemplatesPage;
