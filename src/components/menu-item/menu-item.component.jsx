import React from "react";
// import { withRouter } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import './menu-item.styles.scss';

const MenuItem = ({title,imageUrl,size,linkUrl}) => {
    let navigate = useNavigate();
    function handleClick() {
        navigate(`/${linkUrl}`);
    }
    return (
        <div className={`menu-item ${size}`} onClick={handleClick}>
            <div style={{ backgroundImage: `url(${imageUrl})`}} className='background-image'></div>
            <div className="content">
                <h1 className="title">{title.toUpperCase()}</h1>
                <span className="subtitle">shop now</span>
            </div>
        </div>
    );
};
export default MenuItem;