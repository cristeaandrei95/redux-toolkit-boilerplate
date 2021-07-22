import { createSlice } from "@reduxjs/toolkit";

export const {
    reducer,
    actions: { setChatroom },
} = createSlice({
    name: "chatroom",
    initialState: {
        users: [],
    },
    reducers: {
        setChatroom: (state, action) => action.payload,
    },
});
