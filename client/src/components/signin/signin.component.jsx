import React, { useState } from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/customButton.component";
import {signInWithGoogle, auth} from "../../firebase/firebase.utils"
import "./signin.styles.scss"

export default function SignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleChange = (e) => {
        if(e.target.name === "email"){
            setEmail(e.target.value);
        } else if(e.target.name === "password") {
            setPassword(e.target.value);
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await auth.signInWithEmailAndPassword(email, password);
            setEmail("");
            setPassword("");
        } catch (err) {
            console.log("error signing in", err)
        }
    }

    return (
        <div className="sign-in">
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput 
                    name="email" 
                    type="text" 
                    handleChange={handleChange} 
                    value={email} 
                    required
                    label="Email"
                />
                <FormInput 
                    name="password" 
                    type="password" 
                    handleChange={handleChange} 
                    value={password} 
                    required
                    label="Password"
                />
                <div className="buttons">
                    <CustomButton type="submit">Sign In</CustomButton>
                    <CustomButton onClick={signInWithGoogle} isGoogleSignIn >Sign In With Google</CustomButton>
                </div>

            </form>
        </div>
    )
}