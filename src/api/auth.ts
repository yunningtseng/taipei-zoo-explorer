import { FirebaseError } from 'firebase/app';
import {
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { auth } from '../utils/firebaseInit';

const provider = new GoogleAuthProvider();

const authApi = {
  loginWithGoogle: async () => {
    try {
      const result = await signInWithPopup(auth, provider);

      const credential = GoogleAuthProvider.credentialFromResult(result);

      // const token = credential?.accessToken;
      const { user } = result;
      const uId = user.uid;
      const userName = user.displayName ?? '';
      const userEmail = user.email ?? '';

      return { uId, userName, userEmail };
    } catch (e) {
      const err = e as FirebaseError;

      // * auth/popup-closed-by-user

      return { error: err.code };
    }
  },

  // - 註冊
  createWithEmail: async (email: string, password: string) => {
    try {
      const result = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );
      const { user } = result;
      const uId = user.uid;
      const userEmail = user.email ?? '';

      return { uId, userEmail };
    } catch (e) {
      const err = e as FirebaseError;

      // * auth/invalid-email

      return { error: err.code };
    }
  },

  // - 登入
  signInWithEmail: async (email: string, password: string) => {
    const result = await signInWithEmailAndPassword(auth, email, password);
    const { user } = result;
    const uId = user.uid;

    return { uId };
  },
};

export default authApi;
