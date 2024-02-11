import React from 'react';
import AnotherButton from '../UI/Buttons/AnotherButton';
import classes from './More.module.css'
import Question from './Question';

function More() {

    return ( 
        <section className={classes.moreSection}>
            <div className={classes.titleSection}>
                <h1 className={classes.title}>Want to know more?</h1>
                <AnotherButton>Learn more</AnotherButton>
            </div>
            <div>
                <Question>How does Dance work?</Question>

                <Question>How do I charge my Dance eride?</Question>
                
                <Question>What accessories can I use with my ebike and emoped?</Question> 
                
                <Question>How do repairs work?</Question> 
                
                <Question>Can I test the ride before buying?</Question> 
                
                <Question>How do I cancel my membership?</Question>  
                
                <Question>What happens if my vehicle gets stolen?</Question>   
            </div>
        </section>
     );
}

export default More;