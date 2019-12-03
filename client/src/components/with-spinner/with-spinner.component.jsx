import React from "react";
import { SpinnerOverlay, SpinnerContainer } from "./with-spinner.styles";

const WithSpinner = (WrappedChild) => ({isLoading, ...otherprops}) => {
    return (
        isLoading ? (
            <SpinnerOverlay>
                <SpinnerContainer />
            </SpinnerOverlay>
        )
         :  (
             <WrappedChild {...otherprops} />
         )
    )
}
export default WithSpinner;

