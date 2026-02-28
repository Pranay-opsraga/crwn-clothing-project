import { signInWithGooglePopup, createUserDocumentFromAuth, signInWithGithubPopup } from "../utils/firebase/firebase.utils";
import SignUpForm from "../Components/sign-up-form";

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
            <button onClick={logGoogleUser} className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer">SIGN IN WITH GOOGLE</button>
            <button onClick={logGithubUser} className="bg-black opacity-80 hover:opacity-90 text-white font-bold py-2 px-4 rounded cursor-pointer">SIGN IN WITH GITHUB</button>
            <SignUpForm />

        </div>
    )
}

export default SignIn;