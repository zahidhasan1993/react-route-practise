import React from "react";
import { Link } from "react-router-dom";

const Post = ({ post }) => {
//   console.log(post);
  const { body, title } = post;
  return (
    <div className="card w-[70%] glass mb-10">
      <div className="card-body items-center">
        <h2 className="card-title">{title}</h2>
        <div className="card-actions justify-center">
          <button className="btn btn-primary"><Link to={`/post/${post.id}`}>See the Post</Link></button>
        </div>
      </div>
    </div>
  );
};

export default Post;
