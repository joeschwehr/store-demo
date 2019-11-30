import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase.utils"
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selector"
import { ReactComponent as Logo } from "../../assets/crown.svg";
import "./header.styles.scss";

function Header({currentUser, hidden}) {
    return (
        <header className="header">
            <Link to="/" className="logo-container">
                <Logo className="logo"/>
            </Link>
            <div className="options">
                <Link to="/shop" className="option">
                    SHOP
                </Link>
                <Link to="/contact" className="option">
                    CONTACT
                </Link>
                {currentUser ? 
                    (<div className="option" onClick={() => auth.signOut()}>SIGN OUT</div>)
                :
                    (<Link className="option" to="/signin">SIGN IN</Link>)
                }
                <CartIcon />
            </div>
            { !hidden && <CartDropdown /> }
        </header>
    )
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header);

