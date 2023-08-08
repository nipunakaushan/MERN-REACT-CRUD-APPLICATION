import React from 'react';
import Post from './Post/Post.js';
import useStyle from './styles.js'

import { useSelector } from 'react-redux';

const Posts = () => {
    const posts = useSelector((state) => state.posts);
    const classes = useStyle(); // function call

    console.log(posts);
    return (
        <>
            <h1>POSTS</h1>
            <Post />
            
            <Post />
        </>
        
    );
}

export default Posts;