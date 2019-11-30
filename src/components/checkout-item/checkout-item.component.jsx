import React from "react";
import { connect } from "react-redux";
import { clearItemFromCart, addItem, removeItem } from "../../redux/cart/cart.actions";
import "./checkout-item.styles.scss";

function CheckoutItem ({ item, clearItemFromCart, addItem, removeItem }) {
    const {imageUrl, price, quantity, name} = item;

    return (
        <div className="checkout-item">
            <div className="image-container">
                <img alt="item" src={imageUrl}/>
            </div>
            <span className="name">{name}</span>
            <span className="quantity">
                <div onClick={() => removeItem(item)} className="arrow"> &#10094; </div>
                <span className="value">
                    {quantity}
                </span>
                <div onClick={() => addItem(item)} className="arrow"> &#10095; </div>

                </span>
            <span className="price">{price}</span>
            <div onClick={() => clearItemFromCart(item)} className="remove-button">&#10005;</div>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    clearItemFromCart: (item) => dispatch(clearItemFromCart(item) ),
    addItem: (item) => dispatch(addItem(item)),
    removeItem: (item) => dispatch(removeItem(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem);