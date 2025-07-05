import { useQuery } from "@tanstack/react-query";

import { RQKeys } from "@/shared/constants";
import { axios } from "@/shared/api";
import type { IChat } from "@/app/types/global";

const useChatsQuery = () => {
  return useQuery({
    queryFn: () => axios.get<{ chats: IChat[]; total: number }>("/chats"),
    select: (response) => response.data,
    queryKey: [RQKeys.CHATS],
  });
};

export default useChatsQuery;
