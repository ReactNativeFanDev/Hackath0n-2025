import {createSlice} from '@reduxjs/toolkit';
import {getAllCabinets, getUserCabinets} from './cabinetThunks';

export interface CabinetTypes {
  name: string;
  donate: string;
  number: string;
  email: string;
  location: string;
  id: string;
  userId: string;
}

interface CabinetState {
  cabinets: CabinetTypes[];
  userCabinets: CabinetTypes[];
  isLoading: boolean;
  error: string | null;
}

const initialState: CabinetState = {
  cabinets: [],
  userCabinets: [],
  isLoading: false,
  error: null,
};

const cabinetSlice = createSlice({
  name: 'cabinet',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getUserCabinets.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getUserCabinets.fulfilled, (state, action) => {
        state.isLoading = false;
        state.userCabinets = action.payload;
      })
      .addCase(getUserCabinets.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      })
      .addCase(getAllCabinets.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getAllCabinets.fulfilled, (state, action) => {
        state.isLoading = false;
        state.cabinets = action.payload;
      })
      .addCase(getAllCabinets.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });
  },
});

export const {} = cabinetSlice.actions;

export default cabinetSlice.reducer;
