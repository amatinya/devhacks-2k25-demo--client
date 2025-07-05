import type { FC } from "react";
import { QueryClientProvider as QueryClientProviderBase, type QueryClientProviderProps } from "@tanstack/react-query";

import { queryClient } from "@/shared/api";

const QueryClientProvider: FC<Omit<QueryClientProviderProps, "client">> = (props) => {
  return <QueryClientProviderBase client={queryClient} {...props} />;
};

export default QueryClientProvider;
