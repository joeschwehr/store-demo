import React from "react";
import { connect } from "react-redux";
import { clearItemFromCart, addItem, removeItem } from "../../redux/cart/cart.actions";
import { CheckoutItemContainer, ImageContainer, CheckoutSpan, QuanitySpan, ValueSpan, ArrowContainer, RemoveContainer } from "./checkout-item.styles.jsx";


function CheckoutItem ({ item, clearItemFromCart, addItem, removeItem }) {
    const {imageUrl, price, quantity, name} = item;

    return (
        <CheckoutItemContainer>
            <ImageContainer>
                <img alt="item" src={imageUrl}/>
            </ImageContainer>
            <CheckoutSpan>{name}</CheckoutSpan>
            <QuanitySpan>
                <ArrowContainer onClick={() => removeItem(item)} > &#10094; </ArrowContainer>
                <ValueSpan>{quantity}</ValueSpan>
                <ArrowContainer onClick={() => addItem(item)} > &#10095; </ArrowContainer>
            </QuanitySpan>
            <CheckoutSpan>{price}</CheckoutSpan>
            <RemoveContainer onClick={() => clearItemFromCart(item)}>&#10005;</RemoveContainer>
        </CheckoutItemContainer>
    )
}

const mapDispatchToProps = dispatch => ({
    clearItemFromCart: (item) => dispatch(clearItemFromCart(item) ),
    addItem: (item) => dispatch(addItem(item)),
    removeItem: (item) => dispatch(removeItem(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem);