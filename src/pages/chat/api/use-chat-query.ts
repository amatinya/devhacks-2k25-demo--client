import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";

import { RQKeys } from "@/shared/constants";
import { axios } from "@/shared/api";
import type { IChat } from "@/app/types/global";

const useChatQuery = () => {
  const params = useParams();

  return useQuery({
    queryFn: () => axios.get<{ chat: IChat }>(`/chats/${params.chat}`),
    select: (response) => response.data,
    queryKey: [RQKeys.CHATS, params.chat],
  });
};

export default useChatQuery;
