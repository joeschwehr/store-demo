import React from "react"; 
import "./menu-item.styles.scss";
import { withRouter } from "react-router-dom";

const MenuItem = ({ title, imageUrl, size, match, history, linkUrl }) => {

    const handleClick = () => {
        console.log(history.push(`${match.path}${linkUrl}`) )
    }

    return (
        <div className={`${size} menu-item`} onClick={handleClick}>
            <div style={{ backgroundImage: `url(${imageUrl})` }} className="background-image" />
            <div className="content">
                <h1 className="title">{title}</h1>
                <span className="subtitle">SHOP NOW</span>
            </div>
        </div>
    )
}

export default withRouter(MenuItem);