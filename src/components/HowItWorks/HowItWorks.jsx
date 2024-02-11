import React from 'react';
import ListItem from './ListItem/ListItem';
import {ways} from './ListItem/data.js'
import Button from '../UI/Buttons/Button.jsx';
import classes from './HowItWorks.module.css'

function HowItWorks() {

    return ( 
        <section className={classes.HowWorks}>
            <h1 style={{fontSize:'66px', color:'#49464F'}}>How it works</h1>
            <div style={{display:'flex', marginTop:'21px'}}>
                <div style={{marginTop:'50px'}}>
                    <ul style={{marginBottom:'50px'}}>
                        {ways.map((way) => (<ListItem {...way} key={way.id}/>))}
                    </ul>
                    <Button/>
                </div>
                <img style={{marginRight:'0', marginLeft:'auto'}} src='images/scooters.png' alt='scooters' />
            </div>
        </section>
     );
}

export default HowItWorks;