import {createSlice} from '@reduxjs/toolkit';
import {fetchSearchResults} from './searchThunks';

interface SearchState {
  searchState: boolean;
  searchType: string;
}

const initialState: SearchState = {
  searchState: false,
  searchType: '',
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchState: (state, action) => {
      state.searchState = action.payload;
    },
    setSearchType: (state, action) => {
      state.searchType = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchSearchResults.fulfilled, (state, action) => {
      if (action.payload) {
        state.searchState = false; // Вимикаємо пошук після створення чату
      }
    });
  },
});

export const {setSearchState, setSearchType} = searchSlice.actions;
export default searchSlice.reducer;
