import React from 'react';
import classes from './ListItem.module.css'

function ListItem({id, title}) {
    return ( 
        <p className={classes.ListItem}>{id}. {title}</p>
     );
}

export default ListItem;