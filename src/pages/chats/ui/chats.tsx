import type { FC } from "react";

import { Page } from "@/widgets/page";
import { usePageTitle } from "@/shared/hooks";
import { Hero } from "@/widgets/hero";

const Chats: FC = () => {
  usePageTitle({ title: "Chats" });

  return (
    <Page contentProps={{ className: "space-y-4" }}>
      <Hero
        backgroundImageSrc={"/bg-three.png"}
        title={"Chats"}
        description={
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis, sint, voluptatem. Ab animi at consequuntur, dicta dolorum enim expedita fugit illo nam officiis perferendis quis repellat, repellendus sint tempore unde!"
        }
      />
    </Page>
  );
};

export default Chats;
