import React from 'react'
import Card from './Card'

export default function Container({characters}) {
    
    const characterCards = characters.map(character => {
        return <Card character={character}/>
    })
    
    return (
        <div className='container'>
            {characterCards}
        </div>
    )
}
