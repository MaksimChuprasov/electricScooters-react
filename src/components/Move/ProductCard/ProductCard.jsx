import React from 'react';

function ProductCard({url, price, title, description}) {
    console.log(url)
    return ( 
        <div>
            <img src={url} alt="ProductImage" />
            <p>{price}</p>
            <p>{title}</p>
            <p>{description}</p>
        </div>
     );
}

export default ProductCard;