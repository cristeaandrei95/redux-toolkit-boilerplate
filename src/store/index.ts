import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { createLogger } from "redux-logger";

import { reducer as chatroom } from "./slices/chatroom";

const logger = createLogger();

const reduxMiddleware = [...getDefaultMiddleware(), logger];

const store = configureStore({
    reducer: {
        chatroom,
    },
    middleware: reduxMiddleware,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
