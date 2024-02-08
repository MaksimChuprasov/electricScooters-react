import React from 'react';
import logo from '../../images/Frame.png'
import Button from '../UI/Buttons/Button';
import classes from './Header.module.css'
import Link from '../UI/Links/Link';
import Profile from './Profile/Profile';

function Header({active, onChange}) {
    
    return ( 
        <div className={classes.header}>
            <img src={logo} alt='logo'/>

            <nav className={classes.navigation}>
                <Link isActive={active === 'HowItWorks'} onClick={() => onChange('HowItWorks')}>How it works</Link>
                <Link isActive={active === 'Move'} onClick={() => onChange('Move')}>Move</Link>
                <Link isActive={active === 'City'} onClick = {() => onChange('City')}>City</Link>
                <Link isActive={active === 'More'} onClick = {() => onChange('More')}>More</Link>
            </nav>
            <Link isActive={active === 'Profile'} onClick = {() => onChange('Profile')}>
                <Profile/>
            </Link>
            <Button/>
        </div>
     );
}

export default Header;