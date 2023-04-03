import React from "react";
import { useLoaderData } from "react-router-dom";

const PostDetails = () => {
  const postData = useLoaderData();

  const {title,body} = postData;
  //   console.log(postData);
  return (
    <div className="card w-[90%] mt-16 glass ml-20">
      <div className="card-body items-center">
        <h2 className="card-title text-5xl mb-5 text-emerald-900 underline">Post Title : {title}</h2>
        <p className="text-2xl text-red-400">Full Post :{body}</p>
      </div>
    </div>
  );
};

export default PostDetails;
