import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { selectShopCollection } from "../../redux/shop/shop.selectors"
import CollectionItem from "../../components/collection-item/collection-item.component";
import "./collection.styles.scss";

const CollectionPage = ({ match, collection }) => {
    
    if(!collection){
        const regex = /^\/[a-zA-Z]*/
        const url = match.path
        const shopPageUrl = url.match(regex)[0];
        return (<Redirect to={shopPageUrl} />)
    }

    window.scrollTo(0, 0);

    return (
        <div className="collection-page">
            <h2 className="title">{collection.title.toUpperCase()}</h2>
            <div className="items">
                {
                    collection.items.map(item => {
                        return <CollectionItem key={item.id} {...item}/>
                    })
                }
            </div>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => ({
    collection: selectShopCollection(ownProps.match.params.collectionTitle)(state)
})

export default connect(mapStateToProps)(CollectionPage);