import React from 'react';
import ListItem from './ListItem/ListItem';
import {ways} from './ListItem/data.js'
import Button from '../UI/Buttons/Button.jsx';
import image from '../../images/scooters.png'

function HowItWorks() {

    return ( 
        <section>
            <div>
                <h1>How it works</h1>
                <ul>
                    {ways.map((way) => (<ListItem {...way} key={way.id}/>))}
                </ul>
                <Button/>
            </div>
            <img src={image} alt='scooters' />
        </section>
     );
}

export default HowItWorks;