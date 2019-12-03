import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCollectionsForPreview } from "../../redux/shop/shop.selectors"
import CollectionPreview from "../collection-preview/collection-preview.component";
import "./collections-list.styles.scss"

const CollectionsList = ({collections}) => {
    return (
        <div className="collections-overview">
            {collections.map(collection => (
                <CollectionPreview title={collection.title} items={collection.items} key={collection.id} />
            ))}
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview 
})

export default connect(mapStateToProps)(CollectionsList);