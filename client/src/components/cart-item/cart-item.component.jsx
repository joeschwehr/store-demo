import React from "react";
import { CartItemContainer, CartItemImageContainer, ItemDetailsContainer, NameContainer } from "./cart-item.styles.jsx"

function CartItem ({ item: {imageUrl, price, name, quantity} }){
    return (
        <CartItemContainer>
            <CartItemImageContainer src={imageUrl} alt="Shopping Cart Item" />
            <ItemDetailsContainer>
                <NameContainer>{name}</NameContainer>
                <NameContainer>
                    {quantity} x ${price}
                </NameContainer>
            </ItemDetailsContainer>

        </CartItemContainer>
    )
}

export default CartItem;