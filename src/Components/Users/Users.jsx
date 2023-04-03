import React from 'react';
import { useLoaderData } from 'react-router-dom';
import User from '../User/User';

const Users = () => {
    const usersData = useLoaderData();
    // console.log(usersData); 
    return (
        <div className='md:ml-[30%]'>
            {
                usersData.map(user => <User key={user.id} user ={user}></User>)
            }
        </div>
    );
};

export default Users;