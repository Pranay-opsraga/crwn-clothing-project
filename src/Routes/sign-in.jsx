import { signInWithGooglePopup, createUserDocumentFromAuth, signInWithGithubPopup } from "../utils/firebase/firebase.utils";

const SignIn = () => {
    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
        console.log(user);
    }
    const logGithubUser = async () => {
        const { user } = await signInWithGithubPopup();
        const userDocRef = await createUserDocumentFromAuth(user);
        console.log(user);
    }
    return (
        <div className="flex flex-col gap-10 items-center justify-center">
            <h1>Sign In Page</h1>
            <button onClick={logGoogleUser} className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer">Sign In with Google</button>
            <button onClick={logGithubUser} className="bg-black opacity-80 hover:opacity-90 text-white font-bold py-2 px-4 rounded cursor-pointer">Sign In with GitHub</button>


        </div>
    )
}

export default SignIn;