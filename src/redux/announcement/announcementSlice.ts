import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {
  changeSearchState,
  createNewAnnouncement,
  getAllAnnouncements,
  getUserAnnouncements,
} from './announcementThunks';
import {Asset} from 'react-native-image-picker';

export interface Announcement {
  id: string;
  userId: string;
  sex: 'Male' | 'Female';
  species: string;
  breed: string;
  age: string;
  ageType: 'Month' | 'Year';
  photoArr: Asset[];
  createdAt: string;
  name?: string;
  healthCondition: string;
  location: string;
  description: string;
  donate: string;
}

interface AnnouncementState {
  allAnnouncements: Announcement[];
  userAnnouncements: Announcement[];
  searchAnnouncements: Announcement[];
  favorite: Announcement[];
  isLoading: boolean;
  error: string | null;
}

const initialState: AnnouncementState = {
  allAnnouncements: [],
  userAnnouncements: [],
  searchAnnouncements: [],
  favorite: [],
  isLoading: false,
  error: null,
};

const announcementSlice = createSlice({
  name: 'announcement',
  initialState,
  reducers: {
    addFavorite(state, action: PayloadAction<Announcement>) {
      state.favorite = [...state.favorite, action.payload];
    },
    removeFavorite(state, action: PayloadAction<Announcement>) {
      state.favorite = state.favorite.filter(
        item => JSON.stringify(item) !== JSON.stringify(action.payload),
      );
    },
  },
  extraReducers: builder => {
    builder
      .addCase(createNewAnnouncement.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(createNewAnnouncement.fulfilled, state => {
        state.isLoading = false;
      })
      .addCase(createNewAnnouncement.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      })
      .addCase(getAllAnnouncements.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getAllAnnouncements.fulfilled, (state, action) => {
        state.isLoading = false;
        state.allAnnouncements = action.payload;
      })
      .addCase(getAllAnnouncements.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      })
      .addCase(getUserAnnouncements.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getUserAnnouncements.fulfilled, (state, action) => {
        state.isLoading = false;
        state.userAnnouncements = action.payload;
      })
      .addCase(getUserAnnouncements.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      })
      .addCase(changeSearchState.fulfilled, (state, action) => {
        state.searchAnnouncements = action.payload || [];
      });
  },
});

export const {addFavorite, removeFavorite} = announcementSlice.actions;

export default announcementSlice.reducer;
