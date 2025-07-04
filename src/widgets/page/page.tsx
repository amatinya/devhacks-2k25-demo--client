import { type ComponentProps, type FC, type PropsWithChildren } from "react";
import clsx from "clsx";

interface IPageProps {
  pageProps?: ComponentProps<"main">;
  contentProps?: ComponentProps<"div">;
}

const Page: FC<PropsWithChildren<IPageProps>> = ({ pageProps = {}, contentProps = {}, children }) => {
  return (
    <main {...pageProps} className={clsx("h-full max-h-screen overflow-y-auto p-4", pageProps?.className)}>
      <div {...contentProps} className={clsx("mx-auto w-full max-w-2xl border border-white", contentProps?.className)}>
        {children}
      </div>
    </main>
  );
};

export default Page;
