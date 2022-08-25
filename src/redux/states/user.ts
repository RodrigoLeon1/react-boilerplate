import { createSlice } from '@reduxjs/toolkit';
import { UserInfo } from '../../models';
import { persistValueInLocalStorage, removeKeyInLocalStorage } from '../../utilities';

export const USER_NAME = 'user';

export const EmptyUserState: UserInfo = {
  id: 0,
  name: '',
  email: '',
};

const maybeUserInStorage = localStorage.getItem(USER_NAME)
  ? JSON.parse(localStorage.getItem(USER_NAME) as string)
  : EmptyUserState;

export const userSlice = createSlice({
  name: USER_NAME,
  initialState: maybeUserInStorage,
  reducers: {
    createUser: (state, action) => {
      persistValueInLocalStorage<UserInfo>(USER_NAME, action.payload);
      return action.payload;
    },
    updateUser: (state, action) => {
      const updateUser = { ...state, ...action.payload };
      persistValueInLocalStorage<UserInfo>(USER_NAME, updateUser);

      return updateUser;
    },
    resetUser: () => {
      removeKeyInLocalStorage(USER_NAME);
      return EmptyUserState;
    },
  },
});

export const { createUser, updateUser, resetUser } = userSlice.actions;

export default userSlice;
