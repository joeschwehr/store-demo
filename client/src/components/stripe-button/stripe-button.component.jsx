import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

const StripeButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = "pk_test_9LctFtT0kT3HSma8AGme1ekO00FWtFY2mL";

    const onToken = (token) => {
        axios({
            url: "payment",
            method: "post",
            data: {
                amount: priceForStripe,
                token
            }
        }).then(response => {
            alert("Payment successful");
        }).catch(error => {
            console.log("Payment Error", JSON.parse(error));
            alert("There was an issue with your payment");
        })     
    }

    return (
        <StripeCheckout 
            label="Pay Now"
            name="Crow Clothing"
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeButton;