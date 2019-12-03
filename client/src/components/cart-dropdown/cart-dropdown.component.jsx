import React from "react";
import { connect } from "react-redux";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { toggleCartHidden} from "../../redux/cart/cart.actions";
import CartItem from "../cart-item/cart-item.component";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";
import { CartDropdownContainer, EmptyMessageContainer, CartItemContainer, CartDropdownButton } from "./cart-dropdown.styles.jsx"

function CartDropdown ({ cartItems, history, dispatch }) {
    return (
        <CartDropdownContainer>
            <CartItemContainer>
                {
                    cartItems.length ? 
                        cartItems.map(item => {
                            return <CartItem item={item} key={item.id} />
                        })
                    :
                    <EmptyMessageContainer>Your cart is empty.</EmptyMessageContainer>
                }
            </CartItemContainer>
            <CartDropdownButton onClick={ () => {
                console.log("okaaay")
                history.push("/checkout")
                dispatch(toggleCartHidden())
                }}>
                GO TO CHECKOUT
            </CartDropdownButton>
        </CartDropdownContainer>
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})

export default withRouter(connect(mapStateToProps)(CartDropdown));