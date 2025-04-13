import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistStore, persistReducer} from 'redux-persist';
import {configureStore} from '@reduxjs/toolkit';
import authReducer from './auth/authSlice';
import searchReducer from './search/searchSlice';
import profileReducer from './profile/profileSlice';
import cabinetReducer from './cabinet/cabinetSlice';
import announcementReducer from './announcement/announcementSlice';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import {FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER} from 'redux-persist';

// persist config для профілю
const profilePersistConfig = {
  key: 'profile',
  storage: AsyncStorage,
};

// persist config для оголошень
const announcementPersistConfig = {
  key: 'announcement',
  storage: AsyncStorage,
};

const cabinetPersistConfig = {
  key: 'cabinet',
  storage: AsyncStorage,
};

const persistedProfileReducer = persistReducer(
  profilePersistConfig,
  profileReducer,
);
const persistedAnnouncementReducer = persistReducer(
  announcementPersistConfig,
  announcementReducer,
);

const cabinetAnnouncementReducer = persistReducer(
  cabinetPersistConfig,
  cabinetReducer,
);

const store = configureStore({
  reducer: {
    auth: authReducer,
    profile: persistedProfileReducer,
    search: searchReducer,
    announcement: persistedAnnouncementReducer,
    cabinet: cabinetAnnouncementReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const persistor = persistStore(store);
export default store;
