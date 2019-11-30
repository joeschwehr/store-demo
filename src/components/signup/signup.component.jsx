import React from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/customButton.component";
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils"
import "./signup.styles.scss"

export default class SignIn extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            displayName: "",
            email: "",
            password: "",
            confirmPassword: "",
        }
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    handleSubmit = async (e) => {
        e.preventDefault();

        const { displayName, email, password, confirmPassword} = this.state

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
            this.setState({
                displayName: "",
                email: "",
                password: "",
                confirmPassword: " "
            })

        } catch (err)  {
            console.log(err)
        }

 
    }

    render() {
        const { displayName, email, password, confirmPassword} = this.state
        return (
            <div className="sign-up">
                <h2>I do not have an account</h2>
                <span>Sign up with your email and password</span>
                <form className="sign-up-form" onSubmit={this.handleSubmit}>
                    <FormInput 
                        type="text" 
                        name="displayName" 
                        value={displayName} 
                        handleChange={this.handleChange} 
                        label="Display Name"
                        required
                    />
                    <FormInput 
                        type="email" 
                        name="email" 
                        value={email} 
                        handleChange={this.handleChange} 
                        label="Email"
                        required
                    />
                    <FormInput 
                        type="password" 
                        name="password" 
                        value={password} 
                        handleChange={this.handleChange} 
                        label="Password"
                        required
                    />
                    <FormInput 
                        type="password" 
                        name="confirmPassword" 
                        value={confirmPassword} 
                        handleChange={this.handleChange} 
                        label="Confirm Password"
                        required
                    />
                    <CustomButton type="submit">Sign Up</CustomButton>
                </form>
            </div>
        )
    }
}