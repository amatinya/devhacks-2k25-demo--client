import { useMutation, useQueryClient, type UseMutationOptions } from "@tanstack/react-query";
import { useParams } from "react-router";

import { axios } from "@/shared/api";
import { RQKeys } from "@/shared/constants";

const useSendMessageMutation = (options: Partial<UseMutationOptions<Record<"chat", string>, unknown, string>>) => {
  const queryClient = useQueryClient();
  const { chat } = useParams();

  const { onSuccess, ...restOptions } = options!;

  return useMutation<Record<"chat", string>, unknown, string>({
    mutationFn: (message) => axios.post("/chats", { message: message.trim(), chat }).then((res) => res.data),
    async onSuccess(...args) {
      await queryClient.refetchQueries({ queryKey: [RQKeys.CHATS, chat] });
      onSuccess?.(...args);
    },
    ...restOptions,
  });
};

export default useSendMessageMutation;
