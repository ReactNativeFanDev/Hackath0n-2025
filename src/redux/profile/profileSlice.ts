import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {signOut} from '../auth/authSlice';

interface Chats {
  [chatID: string]: string;
}

export interface ProfileState {
  userName: string;
  email: string;
  avatar: string;
  description: string;
  phone: string;
  chats?: Chats;
  category: string;
  location: string;
  type: 'Volunteer' | 'Organization' | undefined;
  donate: string;
}

const initialState: ProfileState = {
  userName: '',
  email: '',
  avatar: '',
  description: '',
  phone: '',
  category: '',
  type: undefined,
  location: '',
  donate: '',
};

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setUserName(state, action: PayloadAction<string>) {
      state.userName = action.payload;
    },
    setEmail(state, action: PayloadAction<string>) {
      state.email = action.payload;
    },
    setAvatar(state, action: PayloadAction<string>) {
      state.avatar = action.payload;
    },
    setDescription(state, action: PayloadAction<string>) {
      state.description = action.payload;
    },
    setPhone(state, action: PayloadAction<string>) {
      state.phone = action.payload;
    },
    setChats(state, action: PayloadAction<Chats | undefined>) {
      state.chats = action.payload;
    },
    setType(
      state,
      action: PayloadAction<'Volunteer' | 'Organization' | undefined>,
    ) {
      state.type = action.payload;
    },
    setLocation(state, action: PayloadAction<string>) {
      state.location = action.payload;
    },
    setCategory(state, action: PayloadAction<string>) {
      state.category = action.payload;
    },
    setDonate(state, action: PayloadAction<string>) {
      state.donate = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(signOut, () => initialState); // тут скидаємо профіль при signOut
  },
});

export const {
  setUserName,
  setEmail,
  setAvatar,
  setDescription,
  setPhone,
  setChats,
  setType,
  setLocation,
  setCategory,
  setDonate,
} = profileSlice.actions;

export default profileSlice.reducer;
