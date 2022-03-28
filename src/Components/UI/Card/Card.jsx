import './Card.css'
import React from 'react'

export const Card = ({data})=>{
    
    
    return(
        <>
        {
            data.map(element => (
                <>
                    <div className='cards'>
                    <img src={element.images.original.url} alt={element.title} />
                    <div  className="cardname">
                        <h3 className='cardtitle'>{element.title}</h3>
                    </div>
                    </div>
                </>
            ))
        }
        </>
    )
}