import React from "react";
import { CustomButtonContainer } from "./customButton.styles"

export default function CustomButton ({children, ...props}) {
    return (
        <CustomButtonContainer {...props}>
            {children}
        </CustomButtonContainer>
    )
}