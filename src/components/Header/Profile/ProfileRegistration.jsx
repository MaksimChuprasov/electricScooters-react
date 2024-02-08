import React, { useState } from 'react';
import classes from './ProfileRegistration.module.css'

function ProfileRegistration() {

    const [name,setName] = useState('')
    const [mail, setMail] = useState('')
    const [pasdword, setPasdword] = useState('')

    return ( 
        <div className={classes.registration}>
            <form>
                <label className={classes.registrLabel} htmlFor="name">Your Name</label>
                <input className={classes.registrInput} id='name' type="'text'" placeholder='name' value={name} onChange={(event) => setName(event.target.value)}/>

                <label className={classes.registrLabel} htmlFor="email">Your Email</label>
                <input className={classes.registrInput} id='email' type="email" placeholder="your@email.com" value={mail} onChange={(event) => setMail(event.target.value)}/>

                <label className={classes.registrLabel} htmlFor="pasdword">Your Password</label>
                <input className={classes.registrInput} id='pasdword' type="password" placeholder='password' value={pasdword} onChange={(event) => setPasdword(event.target.value)}/>
                
                <button className={classes.registrBtn}>Submit</button>
            </form>
        </div>
     );
}

export default ProfileRegistration;