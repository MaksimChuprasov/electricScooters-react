import React from 'react';
import ProductCard from '../../Move/ProductCard/ProductCard';
import {products} from '../../Move/ProductCard/ProductData.js';
import classes from './Subscription.module.css'

function Subscription() {
    return ( 
        <section className={classes.subscriptionSection}>
            <div style={{marginRight:'68px'}}>
                <h1 className={classes.subscriptionTitle}>You’re in charge</h1>
                <p style={{fontSize:'24px', marginBottom:'36px'}}>Your subscription is fully flexible—with free cancelation at any time and no sign-up fees.</p>
                <p className={classes.subscriptionItem}> <img src="images/done.png" alt="done" /> Repairs within 24 hours</p>
                <p className={classes.subscriptionItem}> <img src="images/done.png" alt="done" /> Replacements in case of theft</p>
                <p className={classes.subscriptionItem}> <img src="images/done.png" alt="done" /> App to track your rides</p>
                <p className={classes.subscriptionItem}> <img src="images/done.png" alt="done" /> Cancel anytime</p>
            </div>
            <ProductCard key={products.id} {...products[0]}/>
            <ProductCard key={products.id} {...products[2]}/>
        </section>
     );
}

export default Subscription;