import React, {useState, useEffect} from 'react';
import {Card} from '../Card/Card';
import './styles.css';

export const Gallery = () => {
    let [rickImg, setRickImg] = useState(null)
  
    useEffect( () => {
        fetch("https://rickandmortyapi.com/api/character")
        .then(response => response.json() )
        //.then( data => console.log(data.results) )
        .then( data => setRickImg(data.results) )
    },
    [])


    return(

        <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">Gallery</a>
        </nav>
        <div className="container" >

        {rickImg && rickImg.map( (element) => (
            <Card
                image = {element.image}
                name = {element.name}
                gender = {element.gender}
                status = {element.status}
            />
        ))}

        </div>

        </>

    );
}
