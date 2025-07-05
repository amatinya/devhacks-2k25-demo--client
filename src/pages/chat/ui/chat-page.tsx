import { useRef, useCallback, useEffect, useState, type FC } from "react";

import type { IChatMessage } from "@/app/types/global";
import { Page } from "@/widgets/page";
import { Prompt } from "@/widgets/prompt";
import { usePageTitle } from "@/shared/hooks";
import { UserMessage } from "@/entities/user-message";
import { AssistantMessage } from "@/entities/assistant-message";

import { useChatQuery, useSendMessageMutation } from "../api";
import ChatSkeleton from "./chat-skeleton";
import AssistantMessageLoader from "./assistant-message-loader";

const ChatPage: FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [unstoredMessage, setUnstoredMessage] = useState<IChatMessage | null>(null);

  const chatQuery = useChatQuery();
  const sendMessageMutation = useSendMessageMutation({
    onSuccess: () => setUnstoredMessage(null),
    onMutate: () => scrollDown(),
  });

  usePageTitle({ title: chatQuery.isSuccess ? chatQuery.data!.chat.name : document.title });

  const onSendMessage = (message: string) => {
    setUnstoredMessage({ role: "user", content: message.trim(), components: [] });
    sendMessageMutation.mutate(message);
  };

  const scrollDown = useCallback(() => {
    if (containerRef.current) {
      containerRef.current.scrollTo({ top: containerRef.current.scrollHeight, behavior: "smooth" });
    }
  }, []);

  const renderMessage = (message: IChatMessage, idx: number) => {
    switch (message.role) {
      case "assistant":
        return <AssistantMessage {...message} key={idx} />;
      case "user":
        return <UserMessage {...message} key={idx} />;
      default:
        return null;
    }
  };

  useEffect(() => {
    scrollDown();
  }, [chatQuery.data, scrollDown]);

  return (
    <Page pageProps={{ ref: containerRef }} contentProps={{ className: "min-h-full flex flex-col gap-y-6" }}>
      {chatQuery.isLoading ? (
        <ChatSkeleton />
      ) : (
        <div className="mx-auto flex w-full max-w-2xl flex-col gap-y-6">
          <h1 className="text-center text-base font-semibold">{chatQuery.data!.chat.name}</h1>
          {chatQuery.data!.chat.messages.map((message, idx) => renderMessage(message, idx))}
          {unstoredMessage && (
            <>
              <UserMessage {...unstoredMessage} />
              <AssistantMessageLoader />
            </>
          )}
        </div>
      )}
      <Prompt
        onSubmit={onSendMessage}
        className="sticky bottom-0 mx-auto mt-auto w-full"
        isLoading={chatQuery.isLoading || sendMessageMutation.isPending}
        placeholder={"Type your message here"}
      />
    </Page>
  );
};

export default ChatPage;
