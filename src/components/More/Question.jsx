import  React, { useState } from 'react';
import classes from './More.module.css';
import {answers} from './Answers.js';
import Answer from './Answer.jsx';

function Question({children}) {

    const [isOpen, setOpen] = useState(false)

    return ( 
        <div>
            <p onClick = {() => setOpen(!isOpen)} className={classes.question}><img style={{marginRight:'28px'}} src="images/plus.png" alt="plus" />{children}</p>
            <p className={isOpen ? `${classes.Answer} ${classes.active}` : classes.Answer}>{answers.map((answer) =>(<Answer key={answer.id} {...answer}/>))}</p>
        </div>
     );
}

export default Question;