import { useState, useContext } from "react";
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../utils/firebase/firebase.utils";
import FormInput from "./formInputs/formInputs";
import { UserContext } from "../contexts/user.contexts";

const defaultFormFields = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: ""
}


const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;

    console.log(formFields);

    const { setCurrentUser } = useContext(UserContext);
    console.log('hii');

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (password != confirmPassword) {
            alert("passwords do not match");
            return;
        }
        try {
            const { user } = await createAuthUserWithEmailAndPassword(email, password);
            await createUserDocumentFromAuth(user, { displayName });
            setFormFields(defaultFormFields);
            setCurrentUser(user);
            console.log(user);
        } catch (error) {

            if (error.code === 'auth/email-already-in-use') {
                alert("Cannot create user , email already in use");
            }
            else if (error.code === 'auth/weak-password') {
                alert("Cannot create user , password is too weak");
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
            <h2 className="text-3xl font-bold mb-1 ">Don't have an account</h2>
            <span className="text-base mb-4">Sign up with your email and password</span>
            <form onSubmit={handleSubmit} className="flex flex-col mt-4 gap-10">
                <FormInput label="Display Name" type="text" required name="displayName" value={displayName} onChange={handleChange} />
                <FormInput label="Email" type="email" required name="email" value={email} onChange={handleChange} />
                <FormInput label="Password" type="password" required name="password" value={password} onChange={handleChange} />
                <FormInput label="Confirm Password" type="password" required name="confirmPassword" value={confirmPassword} onChange={handleChange} />
                <button type="submit" className="bg-black hover:bg-white hover:text-black hover:border-black hover:border-1 text-white py-3 px-8 mt-4 cursor-pointer self-start">SIGN UP</button>
            </form>
        </div>
    )
}

export default SignUpForm;