import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router";

import { axios } from "@/shared/api";

const useStartChatMutation = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: (message: string) =>
      axios.post<Record<"chat", string>>("/chats", { message: message.trim(), chat: null }),
    onSuccess: ({ data: { chat } }) => navigate(`/chats/${chat}`),
  });
};

export default useStartChatMutation;
