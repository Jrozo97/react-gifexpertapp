import React from 'react'

export const GifGridItem = ( { title, url } ) => {

    return (

        <div className="card animate__heartBeat animate_slower 3s">
            <img src={ url } alt={ title }></img>
            <p> { title } </p>
        </div>
    )
}
