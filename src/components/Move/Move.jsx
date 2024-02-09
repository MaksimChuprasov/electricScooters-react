import React from 'react';
import classes from './Move.module.css'
import ProductCard from './ProductCard/ProductCard';
import {products} from './ProductCard/ProductData.js';

function Move() {
    return ( 
        <section className={classes.moveSection}>
            <h1 style={{fontSize:'66px', color:'#49464F', marginBottom:'27px'}}>Move your way</h1>
            <p style={{fontSize:'20px', color:'#2E2C34', marginBottom:'48px'}}>Choose the electric ride that suits your lifestyle.</p>
            <div style={{display:'grid', gridTemplateColumns:'auto auto auto'}}>
                {products.map((product) =>(<ProductCard key={product.id} {...product}/>))}
            </div>
        </section>
     );
}

export default Move;