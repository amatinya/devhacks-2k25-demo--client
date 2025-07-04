import type { FC } from "react";
import { Provider, type ProviderProps } from "react-redux";

import { store } from "../store";

const ReduxProvider: FC<Omit<ProviderProps, "store">> = (props) => {
  return <Provider store={store} {...props} />;
};

export default ReduxProvider;
