import { configureStore } from "@reduxjs/toolkit";

import { documentViewReducer } from "@/widgets/document-view";

const store = configureStore({
  reducer: { documentView: documentViewReducer },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({ serializableCheck: false });
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
