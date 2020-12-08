import React from 'react';

const Recipe = ({image,calories,title}) => {
    return(
        <div>
            <h1>{title}</h1>
            <p>{calories}</p>
            <img src={image} alt={title}/>
        </div>
    );
}

export default Recipe;