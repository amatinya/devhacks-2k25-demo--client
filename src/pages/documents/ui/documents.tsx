import { type FC } from "react";

import { Page } from "@/widgets/page";
import { usePageTitle } from "@/shared/hooks";
import { Hero } from "@/widgets/hero";

const Documents: FC = () => {
  usePageTitle({ title: "Documents" });

  return (
    <Page contentProps={{ className: "space-y-4" }}>
      <Hero
        backgroundImageSrc={"/bg-two.png"}
        title={"Documents"}
        description={
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis, sint, voluptatem. Ab animi at consequuntur, dicta dolorum enim expedita fugit illo nam officiis perferendis quis repellat, repellendus sint tempore unde!"
        }
      />
    </Page>
  );
};

export default Documents;
