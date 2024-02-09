import React from 'react';

function Profile() {
    return ( 
        <div style={{display:'flex', alignItems:'center', cursor:'pointer'}}>
            <img style={{width:'40px', marginRight:'5px'}} src='images/profile.png' alt="profile" />
            <h2 style={{fontSize:'24px', fontWeight:'normal'}}>Profile</h2>
        </div>
     );
}

export default Profile;