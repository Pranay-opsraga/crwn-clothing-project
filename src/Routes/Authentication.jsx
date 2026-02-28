import SignUpForm from "../Components/sign-up-form";
import SignInForm from "../Components/sign-in-form";

const Authentication = () => {
    return (
        <div className="flex gap-20 justify-center px-10 py-8 p-10">
            <SignInForm />
            <SignUpForm />
        </div>
    )
}

export default Authentication;
