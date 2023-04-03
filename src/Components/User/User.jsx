import React from "react";
import { Link } from "react-router-dom";

const User = ({ user }) => {
//   console.log(user);
  const {email, name, phone, username, website } = user;
  return (
    <div className="card w-[70%] glass mb-10">
      <div className="card-body items-center">
        <h2 className="card-title">{name}</h2>
        <p>{phone}</p>
        <p>{website}</p>
        <div className="card-actions justify-center">
          <button className="btn btn-primary"><Link to={`/user/${user.id}`}>See details</Link></button>
        </div>
      </div>
    </div>
  );
};

export default User;
