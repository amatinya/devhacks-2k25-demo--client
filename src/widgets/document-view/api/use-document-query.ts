import { useQuery } from "@tanstack/react-query";

import { RQKeys } from "@/shared/constants";
import { axios } from "@/shared/api";

const useDocumentQuery = (document: string) => {
  return useQuery({
    queryFn: () => axios.get<{ data: ArrayBuffer }>(`/documents/buffer/${document}`),
    select: (response) => response.data,
    queryKey: [RQKeys.DOCUMENTS, document],
  });
};

export default useDocumentQuery;
