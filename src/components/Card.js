import React from 'react'

export default function Card({character}) {
    
    return (
        <div>
           <h3>{character.name}</h3> 
           <img alt="" src={character.image} />
           <p>{character.gender}</p>
        </div>
    )
}
