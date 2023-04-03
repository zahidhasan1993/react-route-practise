import React from 'react';
import { useLoaderData } from 'react-router-dom';

const UserDetails = () => {
    const userDetails = useLoaderData();
    const {address,company,email,name,phone,website} = userDetails;
    // console.log(userDetails);
    return (
        <div className="card w-[90%] mt-16 glass ml-20">
      <div className="card-body items-center">
        <h2 className="card-title">Name : {name}</h2>
        <p>Email :{email}</p>
        <p>Phone :{phone}</p>
        <p>Address : {address.city}, {address.street}</p>
        <p>Company : {company.name}</p>
      </div>
    </div>
    );
};

export default UserDetails;