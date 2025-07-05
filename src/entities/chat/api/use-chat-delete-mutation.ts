import { useMutation, useQueryClient } from "@tanstack/react-query";

import { RQKeys } from "@/shared/constants";
import { axios } from "@/shared/api";
import type { IChat } from "@/app/types/global";

const useChatDeleteMutation = (chatId: IChat["_id"]) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => axios.delete(`/chats/${chatId}`),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: [RQKeys.CHATS] }),
  });
};

export default useChatDeleteMutation;
