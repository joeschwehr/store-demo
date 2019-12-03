import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCartItems, selectCartTotal } from "../../redux/cart/cart.selectors";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import "./checkout.styles.scss";
import StripeButton from "../../components/stripe-button/stripe-button.component";

function CheckoutPage ({ cartItems, cartTotal }) {
    return (
        <div className="checkout-page">
            <div className="checkout-header">
                <div className="header-block">
                    <span>Product</span>
                </div>
                <div className="header-block">
                    <span>Description</span>
                </div>
                <div className="header-block">
                    <span>Quantity</span>
                </div>
                <div className="header-block">
                    <span>Price</span>
                </div>
                <div className="header-block">
                    <span>Remove</span>
                </div>
            </div>
            {
                cartItems.map(item => {
                    return <CheckoutItem key={item.id} item={item} />
                })
            }
            <div className="total">
                <span> TOTAL: ${cartTotal} </span>
            </div>
            <StripeButton price={cartTotal} />
            <div className="test-warning">
                <span>*Please use the following test credit card for payment*</span>
                <br/>
                4242 4242 4242 4242 -- EXP: 01/20 CVV: 123
            </div>
        </div>    
    )
}

const mapStatetoProps = createStructuredSelector({
    cartItems: selectCartItems,
    cartTotal: selectCartTotal,
});

export default connect(mapStatetoProps)(CheckoutPage);