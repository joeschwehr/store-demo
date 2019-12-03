import React, { useState, useEffect, useRef } from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/customButton.component";
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils"
import "./signup.styles.scss"

export default function SignUp() {
    const [credentials, setCredentials] = useState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const persistDataOverRerender = useRef({ willUnmount: false })
    useEffect(() => () => {
          persistDataOverRerender.current.willUnmount = true
        },
        []
    )

    const handleChange = (e) => {
        setCredentials({...credentials, [e.target.name]: e.target.value});
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const { displayName, email, password, confirmPassword } = credentials;

        if(password.length < 6){
            alert("Password should be at least 6 characters.")
            return
        }

        if(password !== confirmPassword){
            alert("Passwords don't match")
            return
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password);
            await createUserProfileDocument(user, {displayName});
            !persistDataOverRerender.current.willUnmount && setCredentials({
                displayName: "",
                email: "",
                password: "",
                confirmPassword: " "
            })

        } catch (err)  {
            console.log(err)
        }
    }

    const { displayName, email, password, confirmPassword} = credentials;
    return (
        <div className="sign-up">
            <h2>I do not have an account</h2>
            <span>Sign up with your email and password</span>
            <form className="sign-up-form" onSubmit={handleSubmit}>
                <FormInput 
                    type="text" 
                    name="displayName" 
                    value={displayName} 
                    handleChange={handleChange} 
                    label="Display Name"
                    required
                />
                <FormInput 
                    type="email" 
                    name="email" 
                    value={email} 
                    handleChange={handleChange} 
                    label="Email"
                    required
                />
                <FormInput 
                    type="password" 
                    name="password" 
                    value={password} 
                    handleChange={handleChange} 
                    label="Password"
                    required
                />
                <FormInput 
                    type="password" 
                    name="confirmPassword" 
                    value={confirmPassword} 
                    handleChange={handleChange} 
                    label="Confirm Password"
                    required
                />
                <CustomButton type="submit">Sign Up</CustomButton>
            </form>
        </div>
    )

}