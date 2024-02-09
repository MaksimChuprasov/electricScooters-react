import React from 'react';
import classes from './AnotherButton.module.css'

function AnotherButton({children}) {
    return ( 
        <button className={classes.CardButton}>{children} <img style={{marginLeft:'5px'}} src="images/button-next.png" alt="button" /></button>
     );
}

export default AnotherButton;