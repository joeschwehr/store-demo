import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeButton = ({ price }) => {
    const priceForStrip = price * 100;
    const publishableKey = "pk_test_9LctFtT0kT3HSma8AGme1ekO00FWtFY2mL";

    const onToken = (token) => {
        console.log(token);
        alert("Payment Successful")
    }
    return (
        <StripeCheckout 
            label="Pay Now"
            name="Crow Clothing"
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStrip}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeButton;