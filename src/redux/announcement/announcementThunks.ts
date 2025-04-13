import {createAsyncThunk} from '@reduxjs/toolkit';
import {ref, set, push, get, update, remove} from 'firebase/database';
import {RootState} from '../store';
import {db} from '../../utils/firebase/firebaseConfig';
import {handleBaseError} from '../../utils/errorHandler';
import {Asset} from 'react-native-image-picker';
import {Announcement} from './announcementSlice';

export const deleteAnnouncementById = createAsyncThunk<
  boolean,
  {userId: string; announcementId: string},
  {state: RootState}
>(
  'announcement/deleteAnnouncementById',
  async ({userId, announcementId}, {rejectWithValue}) => {
    try {
      if (!userId || !announcementId) {
        return rejectWithValue('Missing userId or announcementId');
      }

      const announcementRef = ref(
        db,
        `announcement/${userId}/${announcementId}`,
      );
      await remove(announcementRef);

      return true;
    } catch (error) {
      handleBaseError(error);
      return rejectWithValue('Failed to delete announcement');
    }
  },
);

export const createNewAnnouncement = createAsyncThunk<
  boolean,
  {
    sex: 'Male' | 'Female';
    species: string;
    breed: string;
    age: string;
    photoArr: Asset[];
    name: string;
    healthCondition: string;
    ageType: 'Month' | 'Year';
    description: string;
    donate: string;
  },
  {state: RootState}
>(
  'announcement/createNewAnnouncement',
  async (announcementData, {getState, rejectWithValue}) => {
    try {
      const state = getState();
      const userId = state.auth.user?.userId;
      const location = state.profile.location;

      if (!userId) {
        return rejectWithValue('User not authenticated');
      }

      const newAnnouncementRef = push(ref(db, `announcement/${userId}`));

      const announcement = {
        sex: announcementData.sex,
        species: announcementData.species,
        breed: announcementData.breed,
        age: announcementData.age,
        photoArr: announcementData.photoArr,
        name: announcementData.name,
        healthCondition: announcementData.healthCondition,
        ageType: announcementData.ageType,
        description: announcementData.description,
        location: location,
        donate: announcementData.donate ? announcementData.donate : '',
        createdAt: new Date().toISOString(),
      };

      await set(newAnnouncementRef, announcement);

      return true;
    } catch (error) {
      handleBaseError(error);
      return rejectWithValue('Failed to create announcement');
    }
  },
);

export const updateAnnouncementById = createAsyncThunk<
  boolean,
  {
    userId: string;
    announcementId: string;
    sex: 'Male' | 'Female';
    species: string;
    breed: string;
    age: string;
    photoArr: Asset[];
    name: string;
    healthCondition: string;
    ageType: 'Month' | 'Year';
    description: string;
    donate: string;
  },
  {state: RootState}
>(
  'announcement/updateAnnouncementById',
  async (data, {getState, rejectWithValue}) => {
    try {
      const state = getState();
      const location = state.profile.location;

      const {
        userId,
        announcementId,
        sex,
        species,
        breed,
        age,
        photoArr,
        name,
        healthCondition,
        ageType,
        description,
        donate,
      } = data;

      if (!userId || !announcementId) {
        return rejectWithValue('Missing userId or announcementId');
      }

      const announcementRef = ref(
        db,
        `announcement/${userId}/${announcementId}`,
      );

      const updatedAnnouncement = {
        sex,
        species,
        breed,
        age,
        photoArr,
        name,
        healthCondition,
        ageType,
        description,
        location,
        donate: donate ? donate : '',
        updatedAt: new Date().toISOString(),
      };

      await update(announcementRef, updatedAnnouncement);

      return true;
    } catch (error) {
      handleBaseError(error);
      return rejectWithValue('Failed to update announcement');
    }
  },
);

export const getAllAnnouncements = createAsyncThunk<
  Announcement[],
  void,
  {state: RootState}
>('announcement/getAllAnnouncements', async (_, {rejectWithValue}) => {
  try {
    const announcementsRef = ref(db, 'announcement');
    const snapshot = await get(announcementsRef);

    if (snapshot.exists()) {
      const data = snapshot.val();
      const allAnnouncements: Announcement[] = [];

      Object.entries(data).forEach(([userId, userAnnouncements]) => {
        Object.entries(
          userAnnouncements as Record<
            string,
            Omit<Announcement, 'id' | 'userId'>
          >,
        ).forEach(([announcementId, announcementData]) => {
          allAnnouncements.push({
            id: announcementId,
            userId,
            ...announcementData,
          });
        });
      });

      return allAnnouncements;
    } else {
      return [];
    }
  } catch (error) {
    handleBaseError(error);
    return rejectWithValue('Failed to fetch announcements');
  }
});

export const getUserAnnouncements = createAsyncThunk<
  Announcement[],
  void,
  {state: RootState}
>(
  'announcement/getUserAnnouncements',
  async (_, {getState, rejectWithValue}) => {
    try {
      const state = getState();
      const userId = state.auth.user?.userId;

      if (!userId) {
        return rejectWithValue('User not authenticated');
      }

      const userAnnouncementsRef = ref(db, `announcement/${userId}`);
      const snapshot = await get(userAnnouncementsRef);

      if (snapshot.exists()) {
        const data = snapshot.val();
        const userAnnouncements: Announcement[] = Object.entries(data).map(
          ([announcementId, announcementData]) => ({
            id: announcementId,
            userId,
            ...(announcementData as Omit<Announcement, 'id' | 'userId'>),
          }),
        );

        return userAnnouncements;
      } else {
        return [];
      }
    } catch (error) {
      handleBaseError(error);
      return rejectWithValue('Failed to fetch user announcements');
    }
  },
);

export const changeSearchState = createAsyncThunk<
  Announcement[],
  Announcement[]
>('announcement/changeSearchState', data => {
  return data;
});
