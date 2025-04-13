import {ref, onValue, off} from 'firebase/database';

import {db} from '../../utils/firebase/firebaseConfig';
import {
  ProfileState,
  setAvatar,
  setCategory,
  setChats,
  setDescription,
  setDonate,
  setEmail,
  setLocation,
  setPhone,
  setType,
  setUserName,
} from './profileSlice';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {get, update} from '@firebase/database';
import {handleBaseError} from '../../utils/errorHandler';
import {RootState} from '../store';

export const subscribeToUserProfile =
  (userId: string) => (dispatch: any, getState: any) => {
    const userRef = ref(db, `/users/${userId}`);

    const unsubscribe = onValue(userRef, snapshot => {
      const data = snapshot.val();
      if (data) {
        const currentChats = getState().profile.chats;

        dispatch(setUserName(data.userName || ''));
        dispatch(setEmail(data.email || ''));
        dispatch(setAvatar(data.avatar || ''));
        dispatch(setDescription(data.description || ''));
        dispatch(setPhone(data.phone || ''));
        dispatch(setLocation(data.location || ''));
        dispatch(setCategory(data.category));
        dispatch(setDonate(data.donate));

        if (JSON.stringify(data.chats) !== JSON.stringify(currentChats)) {
          dispatch(setChats(data.chats));
        }

        dispatch(setType(data.type));
      }
    });

    return () => off(userRef, 'value', unsubscribe);
  };

export const changeProfileData = createAsyncThunk<
  boolean,
  Partial<ProfileState>,
  {state: RootState}
>('profile/changeProfileData', async (data, {getState, rejectWithValue}) => {
  try {
    const state = getState();
    const userId = state.auth.user?.userId;

    if (!userId) {
      return rejectWithValue('User not authenticated');
    }

    console.log(data);

    await update(ref(db, `users/${userId}`), data);

    return true;
  } catch (error) {
    const errorMessage = handleBaseError(error);
    console.log(errorMessage);
    return rejectWithValue(errorMessage);
  }
});

export const fetchUserProfile = async (userId: string) => {
  try {
    const userRef = ref(db, `/users/${userId}`);
    const snapshot = await get(userRef);
    const data = snapshot.val();

    return data ? data : null;
  } catch (error) {
    handleBaseError(error);
    return error;
  }
};
