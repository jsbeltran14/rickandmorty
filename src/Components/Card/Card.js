import React from 'react';
import './styles.css';

export const Card = (props) => {

    const {name,image,gender,status} = props

    return (
    
        <div className='card'>
            <img className='card-image' src={image} alt={name} />
            <h3>{name}</h3>
            <p>Gender: {gender}</p>
            <p>Status: {status}</p>
            <button className="btn btn-primary"> Go somewhere</button>
        </div>
    
    )
}
