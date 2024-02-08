import React, { Children } from 'react';
import classes from './Footer.module.css'


function FooterLinks({}) {
    return ( 
        <div>
            <p style={{color:'#d8d8d8', marginBottom:'25px'}}>Menu</p>
            <p className={classes.footerLink}>Rides</p>
            <p className={classes.footerLink}>Concierge</p>
            <p className={classes.footerLink}>For Business</p>
            <p className={classes.footerLink}>Start now</p>
        </div>
     );
}

export default FooterLinks;