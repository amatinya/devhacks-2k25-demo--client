import { useState, useRef, useEffect, type ComponentProps, type FC, type FormEvent, type KeyboardEvent } from "react";
import { Paperclip, SendHorizonal, Loader } from "lucide-react";
import clsx from "clsx";

import { IconButton } from "@/shared/ui";

interface IPromptProps extends Omit<ComponentProps<"form">, "onSubmit"> {
  isLoading: boolean;
  placeholder: string;
  onSubmit(message: string): void;
}

const Prompt: FC<IPromptProps> = ({ onSubmit, isLoading, className, ...props }) => {
  const [message, setMessage] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const sendMessage = () => {
    if (message.trim()) {
      onSubmit(message);
      setMessage("");
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    sendMessage();
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [message]);

  return (
    <form
      onSubmit={handleSubmit}
      className={clsx(
        "rounded-xl border border-gray-50/20 bg-gray-50/5 backdrop-blur-md",
        "transition-shadow focus-within:shadow-md",
        className
      )}
      {...props}
    >
      <textarea
        autoFocus
        ref={textareaRef}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder={"Type your message here"}
        className="max-h-28 w-full resize-none bg-transparent px-4 py-3 text-gray-50 placeholder-gray-50/50 outline-none"
        rows={1}
      />
      <div className="flex items-center justify-between px-2 pb-2">
        <IconButton type="button" icon={Paperclip} disabled={isLoading} />
        {(message.trim().length > 0 || isLoading) && (
          <IconButton
            variant="solid"
            icon={isLoading ? Loader : SendHorizonal}
            disabled={isLoading}
            isLoading={isLoading}
          />
        )}
      </div>
    </form>
  );
};

export default Prompt;
