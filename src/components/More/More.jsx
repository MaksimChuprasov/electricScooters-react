import React from 'react';
import AnotherButton from '../UI/Buttons/AnotherButton';
import classes from './More.module.css'

function More() {
    return ( 
        <section className={classes.moreSection}>
            <div className={classes.titleSection}>
                <h1 className={classes.title}>Want to know more?</h1>
                <AnotherButton>Learn more</AnotherButton>
            </div>
            <div>
                <p className={classes.question}><img style={{marginRight:'28px'}} src="images/plus.png" alt="plus" /> How does Dance work?</p>
                <p className={classes.question}><img style={{marginRight:'28px'}} src="images/plus.png" alt="plus" /> How do I charge my Dance eride?</p>
                <p className={classes.question}><img style={{marginRight:'28px'}} src="images/plus.png" alt="plus" /> What accessories can I use with my ebike and emoped?</p>
                <p className={classes.question}><img style={{marginRight:'28px'}} src="images/plus.png" alt="plus" /> How do repairs work?</p>
                <p className={classes.question}><img style={{marginRight:'28px'}} src="images/plus.png" alt="plus" /> Can I test the ride before buying?</p>
                <p className={classes.question}><img style={{marginRight:'28px'}} src="images/plus.png" alt="plus" /> How do I cancel my membership?</p>
                <p className={classes.question}><img style={{marginRight:'28px'}} src="images/plus.png" alt="plus" /> What happens if my vehicle gets stolen?</p>
            </div>
        </section>
     );
}

export default More;