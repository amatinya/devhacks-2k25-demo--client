import { useEffect } from "react";

const usePageTitle = (params: Record<"title", string> | undefined) => {
  useEffect(() => {
    document.title = params ? `${params.title} | Docbyte` : "Docbyte";
  }, [params]);
};

export default usePageTitle;
