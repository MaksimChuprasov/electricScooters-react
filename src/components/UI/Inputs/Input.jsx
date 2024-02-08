import React from 'react';
import classes from './Input.module.css'

function Input() {
    return ( 
        <input className={classes.Input} type="email" placeholder='your@email.de'/>
     );
}

export default Input;