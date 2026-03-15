import { useState } from "react";
import { signInAuthUserWithEmailAndPassword, signInWithGooglePopup } from "../utils/firebase/firebase.utils";
import FormInput from "./formInputs/formInputs";

const defaultFormFields = {
    email: "",
    password: "",
}

const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;

    const handleSubmit = async (event) => {
        event.preventDefault()
        try {
            const { user } = await signInAuthUserWithEmailAndPassword(email, password);
            setFormFields(defaultFormFields);
            console.log(user);
        } catch (error) {
            if (error.code === 'auth/user-not-found') {
                alert("No user found with this email");
            } else if (error.code === 'auth/wrong-password') {
                alert("Incorrect password");
            } else if (error.code === 'auth/invalid-credential') {
                alert("Invalid email or password");
            } else {
                alert("Something went wrong");
            }
            console.log(error);
        }
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value });
    }

    return (
        <div className="flex flex-col w-full max-w-lg">
            <h2 className="text-3xl font-bold mb-1">Already have an account?</h2>
            <span className="text-base mb-4">Sign in with your email and password</span>
            <form onSubmit={handleSubmit} className="flex flex-col mt-4 gap-10">
                <FormInput label="Email" type="email" required name="email" value={email} onChange={handleChange} />
                <FormInput label="Password" type="password" required name="password" value={password} onChange={handleChange} />
                <div className="flex justify-between py-2">
                    <button type="submit" className="bg-black hover:bg-white hover:text-black hover:border-black hover:border-1 text-white  py-3 px-8 cursor-pointer">SIGN IN</button>
                    <button type="button" onClick={signInWithGooglePopup} className="bg-blue-400 text-white hover:bg-blue-500 py-3 px-8 cursor-pointer">SIGN IN WITH GOOGLE</button>
                </div>
            </form>
        </div>
    )
}

export default SignInForm;
