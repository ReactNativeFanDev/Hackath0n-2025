import {createAsyncThunk} from '@reduxjs/toolkit';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {signInStart, signInSuccess, signInFailure, signOut} from './authSlice';
import {ref, get, update} from 'firebase/database';
import {handleBaseError} from '../../utils/errorHandler';
import {auth} from '../../utils/firebase/firebaseConfig';
import {db} from '../../utils/firebase/firebaseConfig';
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithCredential,
  signOut as logOut,
  signInWithEmailAndPassword,
} from 'firebase/auth';

export const createProfile = createAsyncThunk(
  'auth/createProfile',
  async (
    {userName, userId, email, phone, photoURL}: any,
    {rejectWithValue},
  ) => {
    if (!userId) {
      return rejectWithValue('User ID is missing');
    }

    const newData = {
      userName: userName ?? '',
      avatar: photoURL ?? '',
      email: email ?? '',
      chats: [],
      description: '',
      phone: phone ?? '',
      donate: '',
    };

    const userRef = ref(db, `users/${userId}`);

    try {
      const snapshot = await get(userRef);
      if (!snapshot.exists()) {
        await update(userRef, newData);
      }

      return true;
    } catch (error: any) {
      handleBaseError(error);
      return true;
    }
  },
);

// ✅ Thunk для Google Sign-In
export const googleSignIn = createAsyncThunk(
  'auth/googleSignIn',
  async (_, {dispatch}) => {
    try {
      dispatch(signInStart());

      await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});

      const signInResult = await GoogleSignin.signIn();
      const idToken = signInResult.data?.idToken;

      if (!idToken) {
        throw new Error('Google Sign-In failed: No ID token received.');
      }

      const googleCredential = GoogleAuthProvider.credential(idToken);

      const userCredential = await signInWithCredential(auth, googleCredential);

      const {uid, email, displayName, phoneNumber, photoURL} =
        userCredential.user;

      const userData = {
        userId: uid,
        email,
        displayName,
        phone: phoneNumber,
        photoURL,
      };

      dispatch(signInSuccess(userData));
      await dispatch(createProfile(userData));

      return true;
    } catch (error: any) {
      const errorMessage = handleBaseError(error);
      dispatch(signInFailure(errorMessage));
      return false;
    }
  },
);

export const emailSignIn = createAsyncThunk(
  'auth/emailSignIn',
  async ({email, password}: {email: string; password: string}, {dispatch}) => {
    try {
      dispatch(signInStart());

      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password,
      );

      const {uid, displayName, photoURL} = userCredential.user;
      const userData = {userId: uid, email, displayName, photoURL};

      dispatch(signInSuccess(userData));
      return true;
    } catch (error: any) {
      const errorMessage = handleBaseError(error);
      dispatch(signInFailure(errorMessage));
      return false;
    }
  },
);

export const register = createAsyncThunk(
  'auth/register',
  async ({email, password}: {email: string; password: string}, {dispatch}) => {
    try {
      dispatch(signInStart());

      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );
      const user = userCredential.user;

      const userData = {
        userId: user.uid,
        email,
        photoURL: user.photoURL,
      };

      dispatch(signInSuccess(userData));

      await dispatch(createProfile(userData));
      return true;
    } catch (error: any) {
      const errorMessage = handleBaseError(error);
      dispatch(signInFailure(errorMessage));

      return false;
    }
  },
);

export const logout = createAsyncThunk('auth/logout', async (_, {dispatch}) => {
  await logOut(auth);
  dispatch(signOut());
});
