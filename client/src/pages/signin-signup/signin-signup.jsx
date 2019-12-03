import React from "react";
import "./signin-signup.styles.scss"
import SignIn from "../../components/signin/signin.component";
import SignUp from "../../components/signup/signup.component";

export default function SignInSignUpPage (props) {
    return (
        <div className="sign-in-and-sign-up">
            <SignIn />
            <SignUp />
        </div>
    )
}