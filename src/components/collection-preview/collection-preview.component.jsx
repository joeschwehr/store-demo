import React from "react"
import "./collection-preview.styles.scss"
import CollectionItem from "../collection-item/collection-item.component"
import { Link } from "react-router-dom";

export default function CollectionPreview({title, items, history}){

    const firstFour = items.filter((item, index) => index < 4)
    
    return (
        <div className="collection-preview">
            <h2 className="title">
                <Link to={`/shop/${title.toLowerCase()}`}>
                    {title}
                </Link>
            </h2>
            <div className="preview">
                {
                    firstFour.map(item => {
                        return (
                            <CollectionItem key={item.id} {...item}/>
                        )
                    })
                }
            </div>
        </div>
    )
}