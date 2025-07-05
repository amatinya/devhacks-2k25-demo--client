import { useQuery } from "@tanstack/react-query";

import { RQKeys } from "@/shared/constants";
import { axios } from "@/shared/api";
import type { IDocument } from "@/app/types/global";

const useDocumentsQuery = () => {
  return useQuery({
    queryFn: () => axios.get<{ documents: IDocument[]; total: number }>("/documents"),
    select: (response) => response.data,
    queryKey: [RQKeys.DOCUMENTS],
  });
};

export default useDocumentsQuery;
