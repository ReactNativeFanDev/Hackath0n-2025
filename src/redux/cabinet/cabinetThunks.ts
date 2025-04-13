import {createAsyncThunk} from '@reduxjs/toolkit';
import {ref, set, push, get} from 'firebase/database';
import {RootState} from '../store';
import {db} from '../../utils/firebase/firebaseConfig';
import {handleBaseError} from '../../utils/errorHandler';
import {CabinetTypes} from './cabinetSlice';

export const createNewCabinet = createAsyncThunk<
  boolean,
  CabinetTypes,
  {state: RootState}
>(
  'cabinet/createNewCabinet',
  async (cabinetData, {getState, rejectWithValue}) => {
    try {
      const state = getState();
      const userId = state.auth.user?.userId;

      if (!userId) {
        return rejectWithValue('User not authenticated');
      }

      const newAnnouncementRef = push(ref(db, `cabinet/${userId}`));

      const cabinet = {
        name: cabinetData.name,
        donate: cabinetData.donate,
        number: cabinetData.number,
        email: cabinetData.email,
        location: cabinetData.location,
        createdAt: new Date().toISOString(),
      };

      await set(newAnnouncementRef, cabinet);

      return true;
    } catch (error) {
      handleBaseError(error);
      return rejectWithValue('Failed to create announcement');
    }
  },
);

export const getUserCabinets = createAsyncThunk<
  CabinetTypes[],
  void,
  {state: RootState}
>('cabinet/getUserCabinets', async (_, {getState, rejectWithValue}) => {
  try {
    const state = getState();
    const userId = state.auth.user?.userId;

    if (!userId) {
      return rejectWithValue('User not authenticated');
    }

    const userCabinetRef = ref(db, `cabinet/${userId}`);
    const snapshot = await get(userCabinetRef);

    if (snapshot.exists()) {
      const data = snapshot.val();
      const userCabinets: CabinetTypes[] = Object.entries(data).map(
        ([cabinetId, cabinetData]) => ({
          id: cabinetId,
          userId,
          ...(cabinetData as Omit<CabinetTypes, 'id' | 'userId'>),
        }),
      );

      return userCabinets;
    } else {
      return [];
    }
  } catch (error) {
    handleBaseError(error);
    return rejectWithValue('Failed to fetch user announcements');
  }
});

export const getAllCabinets = createAsyncThunk<
  CabinetTypes[],
  void,
  {state: RootState}
>('cabinet/getAllCabinets', async (_, {rejectWithValue}) => {
  try {
    const cabinetsRef = ref(db, 'cabinet');
    const snapshot = await get(cabinetsRef);

    if (snapshot.exists()) {
      const data = snapshot.val();
      const allCabinets: CabinetTypes[] = [];

      Object.entries(data).forEach(([userId, userCabinets]) => {
        Object.entries(
          userCabinets as Record<string, Omit<CabinetTypes, 'id' | 'userId'>>,
        ).forEach(([cabinetsId, cabinetsData]) => {
          allCabinets.push({
            id: cabinetsId,
            userId,
            ...cabinetsData,
          });
        });
      });

      return allCabinets;
    } else {
      return [];
    }
  } catch (error) {
    handleBaseError(error);
    return rejectWithValue('Failed to fetch announcements');
  }
});
