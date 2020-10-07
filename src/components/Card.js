import React from 'react'

export default function Card({character}) {
    
    return (
        <div>
           <p>{character.name}</p> 
           <img alt="" src={character.image} />
           <p>{character.gender}</p>
        </div>
    )
}
