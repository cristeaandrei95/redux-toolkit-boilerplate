import { Dispatch } from '@reduxjs/toolkit';

import { setChatroom as setChatroomAction } from '../slices/chatroom';
import { RootState } from '..';

export const setChatroomData = (user: string) => (dispatch: Dispatch, getState: () => RootState) => {
  const {
    chatroom: { users },
  } = getState();

  dispatch(setChatroomAction({ ...users }));
};
