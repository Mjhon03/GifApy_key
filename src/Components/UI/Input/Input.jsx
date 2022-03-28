import './Input.css'
import React from 'react'

export const Input = ({name}) => {
    return (
    <>
        <div>
            <input className='inputNameGif' type="search" placeholder='Look Somethings' onChange={name}/>
        </div>
    </>
)
}
