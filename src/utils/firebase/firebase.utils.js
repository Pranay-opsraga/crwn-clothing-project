// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth , signInWithPopup , signInWithRedirect , GoogleAuthProvider , GithubAuthProvider} from "firebase/auth";
import { getFirestore, doc , getDoc , setDoc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCJ5JMFC6b09gXB3PKROMldOB9_PBnVYUs",
  authDomain: "crwn-clothing-db-5302d.firebaseapp.com",
  projectId: "crwn-clothing-db-5302d",
  storageBucket: "crwn-clothing-db-5302d.firebasestorage.app",
  messagingSenderId: "971970463175",
  appId: "1:971970463175:web:cdfc5f2581e983c8ef85e2"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
provider.setCustomParameters({
     prompt : "select_account"
})

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth , provider);
export const signInWithGithubPopup = () => signInWithPopup(auth , githubProvider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
       const userDocRef = doc(db , 'users' , userAuth.uid);
       const userSnapshot = await getDoc(userDocRef);

       if(!userSnapshot.exists()){
          const { displayName , email} =  userAuth;
          const createdAt = new Date();

          try {
            await setDoc(userDocRef , {
                 displayName,
                 email,
                 createdAt
            });
            console.log("Document successfully written!");
          } catch (error) {
            console.error("Error writing document:", error);
          }

       }
       return userDocRef;
}