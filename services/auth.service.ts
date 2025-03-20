
import { auth, db } from "../firebaseConfig";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
class AuthService {
  authToken = null;
  userProfile = null;
  tokenExpiry = null;
  isloggedIn = "isLoggedIn";
  // Login With Firebase
  async login(email: string, password: string) {
    return new Promise( (resolve, reject) => {
      try {        
        const authResult =  auth.signInWithEmailAndPassword(email, password);
        resolve(authResult)
      } catch (error) {
        reject(error)
      }
    });
  }

  async signUp(email: string, password: string) {
    return auth
      .createUserWithEmailAndPassword(email, password)
      .then(async (authResult) => {
        // this.tokenExpiry = new Date();
        // localStorage.setItem(loginExpiryKey, this.tokenExpiry);
        const user = {
          name: "",
          age: "",
          number: "",
          formations: [],
          profession: "",
          email: authResult?.user?.email,
          id: authResult?.user?.uid,
          role: "Student",
        };
        await db.collection("users").doc(user.id).set(user); // cree dans la collection users un document qui a cet id users.id avk les donné "user"
        await authResult?.user?.sendEmailVerification();
        localStorage.setItem(this.isloggedIn, "true");
      });
  }

  async Logout() {
    await auth.signOut();
  }

  getUserData(userId: string) {
    return db.collection("users").doc(userId).get();
  }
  async anonymous() {
    await firebase.auth().signInAnonymously();
  }
}

export default new AuthService();
