import React from 'react';
import classes from './City.module.css'
import Button from '../../UI/Buttons/Button';
import Subscription from '../Subscription/Subscription';

function City() {
    return ( 
        <section>
            <div className={classes.CitySection}>
                <div>
                    <h1 className={classes.CityTitle}>Your city is <br /> our city</h1>
                    <p style={{fontSize:'24px', marginBottom:'29px'}}>Our rides are available in <br /> 5 European cities — and <br /> counting.</p>
                    <Button/>
                    <p style={{fontSize:'24px', marginTop:'33px'}}>Want to see Dance in your city?</p>
                </div>
                <div className={classes.Citys}>
                    <h1 className={classes.City}>Berlin</h1>
                    <h1 className={classes.City}>Hamburg</h1>
                    <h1 className={classes.City}>Munich</h1>
                    <h1 className={classes.City}>Paris</h1>
                    <h1 className={classes.City}>Vienna</h1>
                </div>
            </div>
            <Subscription/>
        </section>
     );
}

export default City;