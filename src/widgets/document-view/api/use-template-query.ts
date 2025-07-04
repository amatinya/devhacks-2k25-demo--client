import { useQuery } from "@tanstack/react-query";

import { RQKeys } from "@/shared/constants";
import { axios } from "@/shared/api";

const useTemplateQuery = (template: string) => {
  return useQuery({
    queryFn: () => axios.get<{ data: ArrayBuffer }>(`/templates/buffer/${template}`),
    select: (response) => response.data,
    queryKey: [RQKeys.TEMPLATES, template],
  });
};

export default useTemplateQuery;
