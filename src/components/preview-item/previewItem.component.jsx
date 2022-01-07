import React from 'react'

import './previewItem.styles.scss'

const PreviewItem = ({id, name, imageUrl, price}) => (
    <div className='collection-item'>
        <div className="image"
        style={{
            backgroundImage: `url(${imageUrl})`
        }} />
        <div className="collection-footer"> 
             <span className="name"> {name} </span>
             <span className="price"> {price} </span>
        </div>

    </div>
)

export default PreviewItem 