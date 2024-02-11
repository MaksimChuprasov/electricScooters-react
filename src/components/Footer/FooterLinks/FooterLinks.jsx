import React, { Children } from 'react';
import classes from './Footer.module.css'


function FooterLinks({title, description1, description2, description3, description4}) {
    return ( 
        <div>
            <p style={{color:'#d8d8d8', marginBottom:'25px'}}>{title}</p>
            <p className={classes.footerLink}>{description1}</p>
            <p className={classes.footerLink}>{description2}</p>
            <p className={classes.footerLink}>{description3}</p>
            <p className={classes.footerLink}>{description4}</p>
        </div>
     );
}

export default FooterLinks;