import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Post from '../Post/Post';

const Posts = () => {
    const posts = useLoaderData();
    const postsData = posts.slice(0,20);
    // console.log(postsData);
    return (
        <div className='md:ml-[30%] text-red-400 mt-20'>
            {
                postsData.map(postData => <Post key={postData.id} post={postData}></Post>)
            }
        </div>
    );
};

export default Posts;