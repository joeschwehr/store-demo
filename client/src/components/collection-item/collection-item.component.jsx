import React from "react";
import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart.actions";
import CustomButton from "../custom-button/customButton.component";
import "./collection-item.styles.scss"

function CollectionItem({name, imageUrl, price, id, addItem}){
    const item = {
        id: id,
        name: name, 
        imageUrl: imageUrl,
        price: price,
    }
    return (
        <div className="collection-item">
            <div className="image" style={{ backgroundImage: `url(${imageUrl})`}} />
            <div className="collection-footer">
                <span className="name" >{name}</span>
                <span className="price" >{price}</span>
            </div>
            <CustomButton onClick={() => addItem(item)} inverted> ADD TO CART </CustomButton>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    addItem: (item) => dispatch(addItem(item)),
})

export default connect(null, mapDispatchToProps)(CollectionItem);