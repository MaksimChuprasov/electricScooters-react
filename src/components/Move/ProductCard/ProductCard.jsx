import React from 'react';
import classes from './ProductCard.module.css'
import AnotherButton from '../../UI/Buttons/AnotherButton';

function ProductCard({url, price, title, description}) {
    console.log(url)
    return ( 
        <div className={classes.ProductCard}>
            <img src={url} alt="ProductImage" />
            <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                <p className={classes.Price}>{price}</p>
                <p className={classes.Winter}>Winter offer</p>
            </div>
            <p className={classes.CardTitle}>{title}</p>
            <p className={classes.CardDescription}>{description}</p>
            <AnotherButton>See details</AnotherButton>
        </div>
     );
}

export default ProductCard;