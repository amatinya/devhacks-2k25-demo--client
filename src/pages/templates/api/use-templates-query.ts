import { useQuery } from "@tanstack/react-query";

import { RQKeys } from "@/shared/constants";
import { axios } from "@/shared/api";
import type { ITemplate } from "@/app/types/global";

const useTemplatesQuery = () => {
  return useQuery({
    queryFn: () => axios.get<{ templates: ITemplate[]; total: number }>("/templates"),
    select: (response) => response.data,
    queryKey: [RQKeys.TEMPLATES],
  });
};

export default useTemplatesQuery;
