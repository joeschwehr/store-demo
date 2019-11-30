import React from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/customButton.component";
import {signInWithGoogle, auth} from "../../firebase/firebase.utils"
import "./signin.styles.scss"

export default class SignIn extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            email: "",
            password: "",
        }
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        const { email, password } = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({
                email: "",
                password: "",
            })
        } catch (err) {
            console.log("error signing in", err)
        }
    }

    render() {
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        name="email" 
                        type="text" 
                        handleChange={this.handleChange} 
                        value={this.state.email} 
                        required
                        label="Email"
                    />
                    <FormInput 
                        name="password" 
                        type="password" 
                        handleChange={this.handleChange} 
                        value={this.state.password} 
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
}