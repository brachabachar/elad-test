import React from 'react';
import './card.css';
const Card = ({ id, url, name }) => {
    return (
        <div className='card-container'>
            <p>Id: {id}</p>
            <p>Site Name: {name}</p>
            <a href={`http://${url}`} target="_blank" >Site Url: {name}</a>
        </div>
    );
};
export default Card;