import React from 'react';
import profile from '../../../images/profile.png'

function Profile() {
    return ( 
        <div style={{display:'flex', alignItems:'center', cursor:'pointer'}}>
            <img style={{width:'50px', marginRight:'10px'}} src={profile} alt="profile" />
            <h2 style={{fontSize:'24px', fontWeight:'normal'}}>Profile</h2>
        </div>
     );
}

export default Profile;