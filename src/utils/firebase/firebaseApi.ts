import {ref, set, get} from 'firebase/database';
import {db} from './firebaseConfig';

export const firebaseApi = {
  //search human

  async acceptFriendRequest(
    chatId: string,
    userId: string,
    participant: string,
  ): Promise<void> {
    await set(ref(db, `/chats/${chatId}/friends/${userId}`), participant);
  },

  async getUserData(
    setUserData,
    uid: string,
    item: {
      participants: string;
      chatID: string;
    },
  ): Promise<void> {
    const userRef = ref(db, `/users/${item.participants}`);
    const usersSnapshot = await get(userRef);

    const usersData = usersSnapshot.exists() ? usersSnapshot.val() : null;
    setUserData(usersData);

    if (!usersSnapshot.exists()) {
      set(ref(db, `/users/${uid}/chats/${item.chatID}`), null);
    }
  },
};
