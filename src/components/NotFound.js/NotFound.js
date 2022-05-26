import React from 'react';
import notfound from '../../Asset/404page.png'

const NotFound = () => {
    
    return (
        <div className='flex justify-center items-center p-56'>
            <img src={notfound}alt="" />
        </div>
    );
};

export default NotFound;