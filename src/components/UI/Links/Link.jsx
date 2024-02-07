import React from 'react';
import classes from './Links.module.css'

function Link({children,isActive, ...props}) {
    return ( 
        <button {...props} className={isActive ? `${classes.menuLinks} ${classes.active}` : classes.menuLinks}>
            {children}
        </button>
     );
}

export default Link;