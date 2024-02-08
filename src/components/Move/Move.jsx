import React from 'react';
import classes from './Move.module.css'
import ProductCard from './ProductCard/ProductCard';
import {products} from './ProductCard/ProductData.js';

function Move() {
    return ( 
        <section className={classes.moveSection}>
            <h1>Move your way</h1>
            <p>Choose the electric ride that suits your lifestyle.</p>
            <div style={{display:'flex'}}>
                {products.map((product) =>(<ProductCard key={product.id} {...product}/>))}
            </div>
        </section>
     );
}

export default Move;