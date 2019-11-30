import React from "react";
import "./customButton.styles.scss"

export default function CustomButton ({children, isGoogleSignIn, inverted, ...otherProps}) {
    return (
        <button className={`
                ${inverted ? 'inverted' : '' }
                ${isGoogleSignIn ? 'google-sign-in' : '' } custom-button`} {...otherProps}>
            {children}
        </button>
    )
}