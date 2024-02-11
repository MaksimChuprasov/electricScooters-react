import React from 'react';
import classes from './Footer.module.css'
import Input from '../UI/Inputs/Input';
import FooterLinks from './FooterLinks/FooterLinks.jsx';
import {links} from './Links.js'

function Footer() {
    return ( 
        <section className={classes.Footer}>
            <div style={{width:'314px'}}>
                <h2 style={{fontSize:'34px', marginBottom:'18px'}}>Stay up to speed</h2>
                <p style={{fontSize:'24px', marginBottom:'30px'}}>Sign up to get the latest Dance offers, updates, and tips straight to your inbox.</p>
                <Input/>
                <p style={{marginTop:'25px', fontSize:'21px'}}>By checking this box, you allow Dance to collect data relating to the Dance newsletter, including whether it has been opened and clicked through. For more information.</p>
            </div>
            {links.map((link) =>(<FooterLinks key={link.id} {...link}/>))}
            <div>

            </div>
        </section>
     );
}

export default Footer;